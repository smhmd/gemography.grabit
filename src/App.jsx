import React, { useEffect, useState } from "react";
import { firebase, db } from "./firebase";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Driver from "./pages/Driver";

function App() {
  const { user, userType, setUserType } = useAuth(); // user is stateful

  const handleSignIn = async () => {
    const provider = new firebase.auth.FacebookAuthProvider(); // login with facebook
    await firebase.auth().signInWithPopup(provider); // open facebook popup
  };

  return (
    <BrowserRouter>
      <Route exact path="/">
        {/* if not authneticated, go to landing page (Home comp) */}
        {user ? (
          userType === "driver" ? (
            <Driver user={user} />
          ) : (
            <Customer user={user} />
          )
        ) : (
          <Home
            userType={userType}
            setUserType={setUserType}
            handleSignIn={handleSignIn}
          />
        )}
      </Route>
    </BrowserRouter>
  );
}

function useAuth() {
  const [user, setUser] = useState(false);
  const [userType, setUserType] = useState(
    window.localStorage.getItem("userType") || "driver"
  );

  useEffect(() => {
    // sync userType with localStorage to get it on init
    window.localStorage.setItem("userType", userType);
  }, [userType]);

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
        db.collection(userType + "s") // driver to drivers, customer to customers
          .doc(userObject.uid)
          .set(userObject, { merge: true });
      } else {
        setUser(null);
      }
    });
  }, [userType]);

  return { user, userType, setUserType };
}

export default App;
