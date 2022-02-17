import React from 'react';

const ChatRoomOptions = () => {
  const rooms = ['JavaScript', 'Python', 'PHP', 'C#', 'Ruby', 'Java'];
  return (
    <div className='form-control'>
      <label htmlFor='room'>Room</label>
      <select name='room' id='room'>
        {rooms.map((i, index) => (
          <option key={index} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChatRoomOptions;
