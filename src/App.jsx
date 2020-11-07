import React, { useEffect, useState } from 'react';
import { firebase, db } from './firebase';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Customer from './pages/Customer';
import Driver from './pages/Driver';

function App() {
  const { user, usertype, setUsertype } = useAuth(); // user is stateful

  const handleSignIn = async () => {
    const provider = new firebase.auth.FacebookAuthProvider(); // login with facebook
    await firebase.auth().signInWithPopup(provider); // open facebook popup
  };

  return (
    <BrowserRouter>
      <Route exact path="/">
        {/* if not authneticated, go to landing page (Home comp) */}
        {user ? (
          usertype === 'drivers' ? (
            <Driver user={user} />
          ) : (
            <Customer user={user} />
          )
        ) : (
          <Home
            usertype={usertype}
            setUsertype={setUsertype}
            handleSignIn={handleSignIn}
          />
        )}
      </Route>
    </BrowserRouter>
  );
}

function useAuth() {
  const [user, setUser] = useState(false);
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
        // set current user to user object
        setUser(userObject);
        // set user in firestore
        db.collection(usertype)
          .doc(userObject.uid)
          .set(userObject, { merge: true });
      } else {
        setUser(null);
      }
    });
  }, [usertype]);

  return { user, usertype, setUsertype };
}

export default App;
