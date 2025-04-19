

require('dotenv').config(); // โหลดค่าจาก .env


const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
require('dotenv').config();  // สำหรับการใช้ env variables

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*", // ระวัง production ต้องกำหนด origin ให้ปลอดภัย
  }
});

app.use(cors());

// เมื่อมีผู้ใช้งานเชื่อมต่อ
io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);

  // เมื่อ frontend ส่งข้อมูลการวาดมา
  socket.on('draw', (data) => {
    console.log('📩 Draw data received:', data);

    // ส่งข้อมูลให้กับผู้ใช้อื่น ๆ
    socket.broadcast.emit('draw', data);
  });

  // เมื่อผู้ใช้ disconnect
  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// เริ่มฟังที่พอร์ตที่กำหนดใน .env หรือพอร์ต 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
