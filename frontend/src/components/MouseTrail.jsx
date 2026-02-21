import React, { useEffect, useRef } from "react";

function MouseTrail() {
  const canvasRef = useRef(null);
  let sparks = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const addSparks = (e) => {
      for (let i = 0; i < 5; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1.5,
          alpha: 150,
          life: 90,
        });
      }
    };
    document.addEventListener("mousemove", addSparks);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.015;
        s.life--;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 215, 0, ${s.alpha})`;
        ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      sparks = sparks.filter((s) => s.alpha > 0 && s.life > 0);
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", addSparks);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="trail-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
}

export default MouseTrail;
