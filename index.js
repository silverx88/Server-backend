const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// กำหนดให้สามารถเชื่อมต่อข้าม origin ได้ (ควรระบุ origin จริงใน production)
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// เชื่อมต่อ socket เมื่อมี client
io.on("connection", (socket) => {
  console.log("📡 User connected:", socket.id);

  /**
   * เมื่อ client ส่ง event 'draw'
   * กระจายข้อมูลไปยัง client อื่น (ยกเว้นผู้ส่ง)
   */
  socket.on("draw", (data) => {
    socket.broadcast.emit("draw", data);
  });

  /**
   * เมื่อ client ส่งคำสั่ง 'clear'
   * ให้กระจายคำสั่งไปยัง client อื่นเพื่อเคลียร์กระดาน
   */
  socket.on("clear", () => {
    socket.broadcast.emit("clear");
  });

  /**
   * เมื่อ client ตัดการเชื่อมต่อ
   */
  socket.on("disconnect", () => {
    console.log("🔌 User disconnected:", socket.id);
  });
});

// เริ่ม server ที่พอร์ต 3001 (หรือที่กำหนดไว้ใน .env)
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
