import React from 'react';

const Header = (props) => {
  return (
    <header className='chat-header'>
      <h1>
        <i className='fas fa-smile'></i> ChatCord
      </h1>
      {props.inChat ? (
        <a id='leave-btn' className='btn' href='/'>
          Leave Room
        </a>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
