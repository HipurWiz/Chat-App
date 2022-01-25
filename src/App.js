import React, {useState, useEffect} from 'react';

//Components
import Button from './components/Button';
import Channel from './components/Channel';

// Firebase dependencies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  //your firebase config
});

const auth = firebase.auth();

const db = firebase.firestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);

        const email = user.email;
        //whitelist
        if (email === "example@example.com" || email === "example@example.com") {
          
        } else {
          //whatever you want to redirect them to.
          window.location.href = "https://safeshare.tv/x/ss5c53106cbb0b3";
        }
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }

  if (initializing) return "Loading";

  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>Sign Out</Button>
          <Channel user={user} db={db}></Channel>
        </>
      ) : (<Button onClick={signInWithGoogle}>Sign in With Google</Button>)}
    </div>
  );
}

export default App;
