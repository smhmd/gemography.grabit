import React from 'react';

import useModal from '../../../hooks/useModal';
import RequestModal from '../RequestModal';

function CreatePost({ user }) {
  const [isRequestModalOpen, toggleRequestModal] = useModal();
  return (
    <div aria-label="create a post" className="self-center w-full max-w-md">
      <div
        role="button"
        onClick={toggleRequestModal}
        className="flex items-center w-full p-2 space-x-4 text-sm text-left text-gray-700 bg-white rounded-full shadow cursor-text focus:outline-none focus:bg-gray-100"
        tabIndex="1"
      >
        <img
          className="inline-block w-12 h-12 rounded-full shadow-sm cursor-pointer"
          src={user.photoURL}
          alt={user.displayName + 'profile picture'}
        />
        <span className="block">
          What's on your mind, {user.displayName.split(' ')[0]}?
        </span>
      </div>
      <RequestModal
        user={user}
        isRequestModalOpen={isRequestModalOpen}
        toggleRequestModal={toggleRequestModal}
      />
    </div>
  );
}

export default CreatePost;
