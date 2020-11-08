import React from 'react';

import Header from '../../components/Header';
import Posts from './Posts';

function Customer({ user }) {
  return (
    <div className="flex flex-col h-screen">
      <Header user={user} />
      <div className="flex flex-1">
        <div className="w-56 border-r-2 border-gray-400 "></div>
        <Posts user={user} />
        <div className="w-64 border-l-2 border-gray-400"></div>
      </div>
    </div>
  );
}

export default Customer;
