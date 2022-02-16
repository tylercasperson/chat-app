const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.on('connection', (socket) => {
  //   Welcome current user

  socket.emit('message', 'Welcome to the chat app');

  //   Broadcast when a user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  //   Runs when client disconects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
