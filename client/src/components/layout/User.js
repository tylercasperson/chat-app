import React from 'react';

const User = () => {
  return (
    <div className='form-control'>
      <label htmlFor='username'>Username</label>
      <input type='text' name='username' id='username' placeholder='Enter username...' required />
    </div>
  );
};

export default User;
