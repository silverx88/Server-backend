# Creating an updated server file with the necessary changes based on the user's request.
updated_code = """
// ==============================
// เรียกใช้งาน Module ที่จำเป็น
// ==============================
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// ==============================
// ตั้งค่า Express และ HTTP Server
// ==============================
const app = express();
const server = http.createServer(app);

// ==============================
// กำหนดให้ Socket.IO สามารถเชื่อมต่อข้าม origin ได้
// หมายเหตุ: ใน production ควรระบุ origin จริงแทน *
// ==============================
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// ==============================
// ตัวแปรเก็บรายชื่อผู้ใช้ที่เชื่อมต่อ
// โดยใช้ socket.id เป็น key และ username เป็น value
// ==============================
const connectedUsers = {};

// ==============================
// เมื่อมีผู้ใช้เชื่อมต่อ (connect)
// ==============================
io.on("connection", (socket) => {
  console.log("🔌 New client connected:", socket.id);

  /**
   * รับชื่อผู้ใช้เมื่อเข้าใช้งาน whiteboard
   * และส่งอัปเดตรายชื่อทั้งหมดให้ผู้ใช้ทุกคน
   */
  socket.on('join', (data) => {
    connectedUsers[socket.id] = data.username; // เก็บชื่อผู้ใช้ใน connectedUsers
    io.emit('userList', Object.values(connectedUsers)); // ส่งข้อมูล userList ไปยัง client ทุกตัว
  });

  /**
   * รับข้อมูลการวาดจากผู้ใช้
   * แล้วส่งต่อไปยังผู้ใช้คนอื่น (ไม่รวมตัวเอง)
   */
  socket.on("draw", (data) => {
    socket.broadcast.emit("draw", data);
  });

  /**
   * รับคำสั่งล้างกระดานจากผู้ใช้
   * แล้วกระจายคำสั่งไปยังผู้ใช้คนอื่น
   * 
   * คำสั่ง | ส่งถึงใครบ้าง
      socket.emit(...) | ส่งถึงเฉพาะตัวเอง
      socket.broadcast.emit(...) | ส่งถึงทุกคน ยกเว้นตัวเอง
      io.emit(...) | ส่งถึง ทุกคน
   * 
   * 
   */
  socket.on("clear", () => {
    io.emit("clear");
  });

  /**
   * เมื่อผู้ใช้ตัดการเชื่อมต่อ (disconnect)
   * ลบชื่อออกจากรายชื่อผู้ใช้ และอัปเดตรายชื่อให้ทุกคน
   */
  socket.on("disconnect", () => {
    const username = connectedUsers[socket.id];
    console.log(`❌ ${username || "Unknown"} disconnected`);
    delete connectedUsers[socket.id];
    io.emit("userList", Object.values(connectedUsers)); // ส่งข้อมูล userList หลังจากผู้ใช้ตัดการเชื่อมต่อ
  });
});

// ==============================
// เริ่มต้น Server บนพอร์ตที่กำหนด
// ==============================
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
"""

# Saving the updated server file
file_path = "/mnt/data/updated_whiteboard_server.js"
with open(file_path, "w") as file:
    file.write(updated_code)

file_path
