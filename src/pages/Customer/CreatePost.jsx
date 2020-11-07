import React from 'react';

import useModal from '../../hooks/useModal';
import RequestModal from './RequestModal';

function CreatePost(props) {
  const [isOpen, toggle] = useModal();
  return (
    <div aria-label="create a post" {...props}>
      <div className="flex">
        <img
          className="inline-block w-12 h-12 border border-gray-600 rounded-full"
          src={props.user.photoURL}
          alt={props.user.displayName + 'profile picture'}
        />
        <button
          onClick={toggle}
          className="w-full px-6 py-2 ml-3 text-left text-gray-700 border border-gray-600 rounded-full focus:text-brand-red focus:outline-none focus:border-brand-red"
        >
          What's on your mind, {props.user.displayName.split(' ')[0]}?
        </button>
      </div>
      <RequestModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default CreatePost;
