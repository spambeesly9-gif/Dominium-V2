"use client";
import React, { useState, useEffect, useRef } from "react";

const SpotlightBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastClient = useRef({ x: 0, y: 0 });
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = (clientX: number, clientY: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({ x: clientX - rect.left, y: clientY - rect.top });
    }
  };

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastClient.current = { x: e.clientX, y: e.clientY };
      updatePosition(e.clientX, e.clientY);
      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 150);
    };

    const handleScroll = () => {
      updatePosition(lastClient.current.x, lastClient.current.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}
    >
      <div
        style={{
          position: "absolute",
          borderRadius: "9999px",
          pointerEvents: "none",
          transition: "width 300ms ease-out, height 300ms ease-out",
          left: mouse.x,
          top: mouse.y,
          width: isMoving ? "60px" : "80px",
          height: isMoving ? "60px" : "80px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0, 6, 65, 0.82) 0%, transparent 48%)",
        }}
      />
    </div>
  );
};

export default SpotlightBackground;
