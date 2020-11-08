import React from 'react';
import CreatePost from './CreatePost';

function Posts({ user }) {
  return (
    <div className="flex-grow col-span-2 px-8 py-4 md:px-16">
      <CreatePost user={user} />
    </div>
  );
}

export default Posts;
