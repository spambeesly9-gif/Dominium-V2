"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const CELL = 44;
const TRAIL_DURATION = 700;

const BASE_GRID = (() => {
  const svg = `<svg width="${CELL}" height="${CELL}" viewBox="0 0 ${CELL} ${CELL}" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="${CELL - 1}" height="${CELL - 1}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
})();

type TrailCell = { col: number; row: number; time: number };

export default function FooterGridBackground() {
  const [trailCells, setTrailCells] = useState<TrailCell[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastClient = useRef({ x: -9999, y: -9999 });
  const lastCellKey = useRef("");
  const rafRef = useRef<number>(0);

  const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const updateCell = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;
    const col = Math.floor(x / CELL);
    const row = Math.floor(y / CELL);
    const key = `${col}-${row}`;
    if (key !== lastCellKey.current) {
      lastCellKey.current = key;
      setTrailCells(prev => [...prev, { col, row, time: Date.now() }]);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const loop = () => {
      const now = Date.now();
      setTrailCells(prev => {
        if (!prev.length) return prev;
        const next = prev.filter(c => now - c.time < TRAIL_DURATION);
        return next.length !== prev.length ? next : prev;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      lastClient.current = { x: e.clientX, y: e.clientY };
      updateCell(e.clientX, e.clientY);
    };
    const onScroll = () => updateCell(lastClient.current.x, lastClient.current.y);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateCell, isMobile]);

  const now = Date.now();

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}
    >
      {/* Base grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: BASE_GRID,
        backgroundSize: `${CELL}px ${CELL}px`,
      }} />

      {/* Trail cells — subtle muted gold, fade out over time */}
      {trailCells.map((cell) => {
        const age = now - cell.time;
        const opacity = Math.max(0, 1 - age / TRAIL_DURATION) * 0.35;
        return (
          <div
            key={`${cell.col}-${cell.row}-${cell.time}`}
            style={{
              position: "absolute",
              left: cell.col * CELL,
              top: cell.row * CELL,
              width: CELL,
              height: CELL,
              background: "#E3E3A6",
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
