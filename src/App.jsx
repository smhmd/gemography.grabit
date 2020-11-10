import React, { useEffect, useState } from 'react';
import { firebase, db } from './firebase';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import LoadingScreen from './pages/LoadingScreen';
// import TailwindHelper from './components/TailwindHelper';

function App() {
  const { user, setUser, usertype, setUsertype } = useAuth(); // user is stateful

  const handleSignIn = async () => {
    const provider = new firebase.auth.FacebookAuthProvider(); // login with facebook
    await firebase.auth().signInWithPopup(provider); // open facebook popup
  };

  return (
    <BrowserRouter>
      <Route path="/">
        {user === 'loading' ? (
          <LoadingScreen />
        ) : user ? (
          <User user={user} setUser={setUser} usertype={usertype} />
        ) : (
          <Home
            usertype={usertype}
            setUsertype={setUsertype}
            handleSignIn={handleSignIn}
          />
        )}
      </Route>
      {/* <TailwindHelper /> */}
    </BrowserRouter>
  );
}

function useAuth() {
  const [user, setUser] = useState('loading');
  const [usertype, setUsertype] = useState(
    window.localStorage.getItem('usertype') || 'drivers',
  );

  useEffect(() => {
    // sync usertype with localStorage to get it on init
    window.localStorage.setItem('usertype', usertype);
  }, [usertype]);

  useEffect(() => {
    // return for clean up. listener on authentication.
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // create user object
        const userObject = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        };
        const userReference = db.collection(usertype).doc(userObject.uid); // put in a var and pass in user state becaused needed to compare in firestore's "where(q, o, val)" (as the last val. See posts.jsx)
        userReference
          .get() // get this piece of data
          .then((doc) => doc.data()) // get the content
          .then((data) => {
            if (!data) {
              // if the content is empty, the user is brand new and must be set() with the stuff that came from the authentication.
              userReference.set(userObject);
              setUser({ ...userObject, ref: userReference }); // set user state using the authentication properties and the reference.
            } else {
              setUser({ ...data, ref: userReference });
            } // set the state using the data from the server (because changable by the user) since the user is old.
          });
      } else {
        setUser(null);
      }
    });
  }, [usertype]);

  return { user, setUser, usertype, setUsertype };
}

export default App;
