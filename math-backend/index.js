// index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*", // ระวัง production ต้องกำหนด origin ให้ปลอดภัย
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);

  socket.on('message', (msg) => {
    console.log('📩 Message received:', msg);
    io.emit('message', msg); // broadcast
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
