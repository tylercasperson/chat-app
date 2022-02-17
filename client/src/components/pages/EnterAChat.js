import React from 'react';

import Header from '../layout/Header';
import User from '../layout/User';
import ChatRoomOptions from '../layout/ChatRoomOptions';

const EnterAChat = () => {
  return (
    <div className='join-container'>
      <Header inChat={false} />
      <main className='join-main'>
        <form action={'/chat'}>
          <User />
          <ChatRoomOptions />
          <button type='submit' className='btn'>
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
};

export default EnterAChat;
