import React from 'react';

const ChatRoomOptions = () => {
  const rooms = ['JavaScript', 'Python', 'PHP', 'C#', 'Ruby', 'Java'];
  return (
    <div class='form-control'>
      <label for='room'>Room</label>
      <select name='room' id='room'>
        {rooms.map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};

export default ChatRoomOptions;
