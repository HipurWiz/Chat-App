import React, { useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

require('./App.css');



firebase.initializeApp({
  apiKey: "AIzaSyBTLCly1aMs9NCZ5OGqQ8rxgdGQT9yTFsQ",
  authDomain: "gang-chat-d169a.firebaseapp.com",
  projectId: "gang-chat-d169a",
  storageBucket: "gang-chat-d169a.appspot.com",
  messagingSenderId: "1038003284923",
  appId: "1:1038003284923:web:51e960016e8f2a24edf29e",
  measurementId: "G-ZV77G6SELG"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);


  //{ user ? <ChatRoom /> : <SignIn /> }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" class="logo" />
        <h1>Google Docs Chat Feature</h1>
        <SignOut />
      </header>

      <section>
      { user ? <ChatRoom /> : <SignIn /> }

      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign In with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onclick={() => auth.signOut()} class="signoutbutton">Sign Out</button>
  )
}

function ChatRoom() {

  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  // Change amount of messages shown by changing the parameter of .limit()
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
      <input value = {formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button type="submit">✈️</button>
    </form>
    </>
  )
}

function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>

    
    </>
  )
}

export default App;
