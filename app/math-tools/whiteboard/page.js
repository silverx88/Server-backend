"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function WhiteboardPage() {
  const canvasRef = useRef(null);
  const socketRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [ctxReady, setCtxReady] = useState(false);

  useEffect(() => {
    // ป้องกัน SSR
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    setCtxReady(true);

    // ✨ ใช้ URL ให้ถูกกับ dev/prod
    const serverUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://your-production-server.vercel.app"; // <-- เปลี่ยนตรงนี้ให้ถูก

    const socket = io(serverUrl);
    socketRef.current = socket;

    socket.on("draw", ({ x, y }) => {
      if (!ctx) return;
      ctx.lineTo(x, y);
      ctx.stroke();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMouseDown = (e) => {
    if (!ctxReady) return;
    isDrawingRef.current = true;
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawingRef.current || !ctxReady) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    socketRef.current.emit("draw", { x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100vh", display: "block" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}
