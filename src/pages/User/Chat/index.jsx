import React from 'react';
import Messages from './Messages';

export default function Chat() {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <Messages />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const message = e.target.elements[0].value;
        }}
      >
        <input
          required
          className="p-2 border border-gray-500 rounded outline-none focus:border-gray-700"
          placeholder="Send message"
          type="text"
        />
      </form>
    </div>
  );
}
