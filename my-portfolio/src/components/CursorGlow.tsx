import React, { useEffect, useRef } from "react";

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0"
      style={{
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "700px",
        background:
          "radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 65%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
};

export default CursorGlow;
