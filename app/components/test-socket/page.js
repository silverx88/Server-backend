"use client";
import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function TestSocketPage() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Socket connected");
    });

    socket.on("message", (data) => {
      console.log("📥 Received:", data);
      setMsg(data);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">🧪 ทดสอบ WebSocket</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => socket.emit("message", "Hello from client!")}
      >
        ส่งข้อความ
      </button>
      <p className="mt-4">ข้อความที่ได้รับ: {msg}</p>
    </div>
  );
}
