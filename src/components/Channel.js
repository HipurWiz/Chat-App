import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';

import Message from './Message.js';

const Channel = ({user = null, db = null}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const {uid, displayName, photoURL} = user;

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limitToLast(25)
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    setMessages(data);
                });
            return unsubscribe;
        }
    }, [db]);
    
    const handleOnChange = e => {
        setNewMessage(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
    }

    return (
        <>
            <ul>
                {messages.map(message => (
                    <li key={message.id} class="msgs"><Message {... message}/></li>
                ))}
            </ul>
            <form name="sendMessageForm" onSubmit={handleOnSubmit}>
                <input type="text" value={newMessage} onChange={handleOnChange} placeholder='Type a message' class="msgInput" />
                <button type="submit" disabled={!newMessage} class="sendButton">Send</button>
            </form>
        </>
    );
}

export default Channel;