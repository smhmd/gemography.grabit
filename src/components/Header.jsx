import React from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase';

import logoDark from '../assets/logo-dark.svg';

function Header({ user }) {
  return (
    <header className="flex-shrink-0 bg-white border-b-2 border-gray-300">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-10 mx-auto">
        <Link to="/">
          <img src={logoDark} alt="logo" className="w-32" />
        </Link>
        <nav className="flex items-center py-3 space-x-4">
          <button onClick={() => firebase.auth().signOut()}>Logout</button>
          <img
            className="inline-block w-8 h-8 border border-gray-600 rounded-full"
            src={user.photoURL}
            alt={user.displayName + 'profile picture'}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
