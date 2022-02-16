import React from 'react';

const SideBar = (props) => {
  return (
    <main className='chat-main'>
      <div className='chat-sidebar'>
        <h3>
          <i className='fas fa-comments'></i> Room Name:
        </h3>
        <h2 id='room-name'>{props.chatRoom}</h2>
        <h3>
          <i className='fas fa-users'></i> Users
        </h3>
        <ul id='users'></ul>
      </div>
      <div className='chat-messages'></div>
    </main>
  );
};

export default SideBar;
