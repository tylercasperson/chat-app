import React from 'react';
import User from './User';
import ChatRoomOptions from './ChatRoomOptions';

const EnterAChat = () => {
  return (
    <main class='join-main'>
      <form action='chat.html'>
        <User />
        <ChatRoomOptions />
        <button type='submit' class='btn'>
          Join Chat
        </button>
      </form>
    </main>
  );
};

export default EnterAChat;
