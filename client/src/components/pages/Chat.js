import React from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import ChatForm from '../layout/ChatForm';

const Chat = () => {
  return (
    <div className='chat-container'>
      <Header inChat={true} />
      <SideBar />
      <ChatForm />
    </div>
  );
};

export default Chat;
