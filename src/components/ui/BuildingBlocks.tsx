"use client";
import React, { useEffect, useRef } from "react";

/* ── Constants ───────────────────────────────────────────── */
const B  = 11;  // block size in canvas pixels
const S  = 13;  // step (block + 2px gap)

const NAVY        = "#000435";
const NAVY_DARK   = "#000a6e";
const GOLD        = "#E3E3A6";
const GOLD_DIM    = "#c9c97e";
const WINDOW_DARK = "#111122"; // unlit window colour

const GLOW_R = 22; // glow falloff radius around a window block (canvas px)

/* ── Building definitions ────────────────────────────────── */
type C = "W" | "G" | "D" | "R" | null;
const W: C = "W", G: C = "G", D: C = "D", R: C = "R", _: C = null;

const DEFS: Array<{ grid: C[][] }> = [
  // 0 — wide low-rise (11 × 9)
  { grid: [
    [R,R,R,R,R,R,R,R,R,R,R],
    [W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W,W,W],
  ]},
  // A — medium apartment (9 × 13)
  { grid: [
    [_,R,R,R,R,R,R,R,_],
    [W,W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,G,W],
    [W,W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,G,W],
    [W,W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,G,W],
    [W,W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,G,W],
    [W,W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,G,W],
    [W,W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W,W],
  ]},
  // B — tall tower (5 × 20)
  { grid: [
    [_,_,D,_,_],
    [_,D,D,D,_],
    [R,R,R,R,R],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
    [W,G,W,G,W],
    [W,W,W,W,W],
  ]},
  // C — short wide block (13 × 8)
  { grid: [
    [R,R,R,R,R,R,R,R,R,R,R,R,R],
    [W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W],
    [W,G,W,G,W,G,W,G,W,G,W,G,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W],
  ]},
  // D — skyscraper (6 × 23)
  { grid: [
    [_,D,D,D,D,_],
    [D,D,D,D,D,D],
    [R,R,R,R,R,R],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,G,W,W,G,W],
    [W,W,W,W,W,W],
    [W,W,W,W,W,W],
  ]},
  // E — medium block (8 × 15)
  { grid: [
    [_,R,R,R,R,R,R,_],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W,W],
    [W,W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W,W],
  ]},
  // 6 — narrow tower (7 × 19)
  { grid: [
    [_,_,D,D,D,_,_],
    [_,D,D,D,D,D,_],
    [R,R,R,R,R,R,R],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,G,W,W,G,W,W],
    [W,W,W,W,W,W,W],
    [W,W,W,W,W,W,W],
  ]},
];

/* ── Block type ──────────────────────────────────────────── */
interface Block {
  hx: number; hy: number;
  color: string;
  isStatic: boolean; // roof/spire blocks — fixed colour, no cursor interaction
}

/* ── Component ───────────────────────────────────────────── */
const BuildingBlocks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const blocks    = useRef<Block[]>([]);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CW = canvas.width;
    const CH = canvas.height;

    const totalBldgW = DEFS.reduce((s, d) => s + d.grid[0].length * S, 0);
    const GAP = Math.floor((CW - totalBldgW) / (DEFS.length + 1));
    let curX = GAP;

    const arr: Block[] = [];

    DEFS.forEach(def => {
      const cols = def.grid[0].length;
      const rows = def.grid.length;
      const bldH = rows * S;
      const baseY = CH - bldH + 26; // push buildings to canvas bottom edge

      def.grid.forEach((row, ri) => {
        row.forEach((cell, ci) => {
          if (!cell) return;
          const hx = curX + ci * S;
          const hy = baseY + ri * S;
          const isStatic = cell === "R" || cell === "D";
          let color = NAVY;
          if (cell === "R") color = NAVY_DARK;
          if (cell === "D") color = GOLD_DIM;
          arr.push({ hx, hy, color, isStatic });
        });
      });

      curX += cols * S + GAP;
    });

    blocks.current = arr;

    const loop = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, CW, CH);

      // Draw static blocks first (roofs + spires — fixed colour, no interaction)
      ctx.shadowBlur = 0;
      for (const b of arr) {
        if (!b.isStatic) continue;
        ctx.fillStyle = b.color;
        ctx.fillRect(Math.round(b.hx), Math.round(b.hy), B, B);
      }

      // Draw interactive blocks — glow yellow when cursor is near
      for (const b of arr) {
        if (b.isStatic) continue;
        const cx = b.hx + B / 2;
        const cy = b.hy + B / 2;
        const d  = Math.sqrt((cx - mx) ** 2 + (cy - my) ** 2);

        if (d < GLOW_R) {
          const t = 1 - d / GLOW_R;
          ctx.shadowBlur  = 14 * t;
          ctx.shadowColor = GOLD;
          ctx.fillStyle   = `rgba(227,227,166,${0.4 + 0.6 * t})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle  = b.color;
        }

        ctx.fillRect(Math.round(b.hx), Math.round(b.hy), B, B);
      }

      ctx.shadowBlur = 0;
      raf.current = requestAnimationFrame(loop);
    };

    // Only run the RAF loop while the canvas is visible
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        raf.current = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf.current);
      }
    });
    io.observe(canvas);
    return () => { io.disconnect(); cancelAnimationFrame(raf.current); };
  }, []);

  /* cursor tracking */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMove = (e: MouseEvent) => {
      const rect   = canvas.getBoundingClientRect();
      const scaleX = canvas.width  / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top)  * scaleY,
      };
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={330}
      aria-hidden="true"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
};

export default BuildingBlocks;
