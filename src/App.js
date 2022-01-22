import React from 'react';
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
        
      </header>

      <section>
        {<ChatRoom />}

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
    <button onclick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  // Change amount of messages shown by changing the parameter of .limit()
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  )
}

function ChatMessage(props) {
  const {text, uid} = props.message;

  return (
    <p>{text}</p>
  )
}

export default App;
