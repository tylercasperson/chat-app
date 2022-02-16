import React from 'react';

const Header = () => {
  return (
    <header className='chat-header'>
      <h1>
        <i className='fas fa-smile'></i> ChatCord
      </h1>
      <a id='leave-btn' className='btn' href='/'>
        Leave Room
      </a>
    </header>
  );
};

export default Header;
