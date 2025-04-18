// app/api/socket/route.js
import { Server } from "socket.io";

let io;

export async function GET(req) {
  if (!io) {
    console.log("🔌 Initializing new Socket.IO server...");

    const server = req?.socket?.server;

    io = new Server(server, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      console.log("✅ A user connected");

      socket.on("message", (msg) => {
        console.log("📨 Received:", msg);
        io.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("❌ User disconnected");
      });
    });

    server.io = io;
  } else {
    console.log("♻️ Socket.IO server already running.");
  }

  return new Response("Socket.IO server ready", {
    status: 200,
  });
}
