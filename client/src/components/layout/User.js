import React from 'react';

const User = () => {
  return (
    <div class='form-control'>
      <label for='username'>Username</label>
      <input type='text' name='username' id='username' placeholder='Enter username...' required />
    </div>
  );
};

export default User;
