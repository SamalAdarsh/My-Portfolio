import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];
    
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    initCanvas();

    for (let i = 0; i < 350; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.2, 
        radius: Math.random() * 1.5,
      });
    }

    const handleMouseMove = (e) => {
      const centerX = width / 2;
      const centerY = height / 2;
      // FIX: Increased multiplier from -40 to -80 for a more drastic 3D camera pan when moving the mouse
      targetX = ((e.clientX - centerX) / centerX) * -80;
      targetY = ((e.clientY - centerY) / centerY) * -80;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", initCanvas);

    let animationFrameId;

    const render = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        let drawX = star.x + (currentX * star.z);
        let drawY = star.y + (currentY * star.z);

        // FIX: Increased constant drift speed from 0.1 to 0.4 so the stars fly by faster naturally
        star.x -= 0.4 * star.z;
        star.y -= 0.4 * star.z;

        if (star.x < -50) star.x = width + 50;
        if (star.x > width + 50) star.x = -50;
        if (star.y < -50) star.y = height + 50;
        if (star.y > height + 50) star.y = -50;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + (star.z / 3)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Starfield;