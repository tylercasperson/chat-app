import React from 'react';

const ChatForm = () => {
  return (
    <div className='chat-form-container'>
      <form id='chat-form'>
        <input id='msg' type='text' placeholder='Enter Message' required autocomplete='off' />
        <button className='btn'>
          <i className='fas fa-paper-plane'></i> Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
