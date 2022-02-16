import React from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import ChatForm from '../layout/ChatForm';

const Chat = () => {
  return (
    <div class='chat-container'>
      <Header />
      <SideBar />
      <ChatForm />
    </div>
  );
};

export default Chat;
