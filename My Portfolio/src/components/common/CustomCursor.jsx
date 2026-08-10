import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Start off-screen so it doesn't blink in the top left corner
    const mouse = { x: -100, y: -100 }; 
    const circle = { x: -100, y: -100 };

    const handleMove = (e) => {
      // Support both standard mouse movements AND mobile touch swipe movements
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      mouse.x = clientX;
      mouse.y = clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    // Listen for both desktop mouse and mobile touch events
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    const render = () => {
      circle.x += (mouse.x - circle.x) * 0.15; 
      circle.y += (mouse.y - circle.y) * 0.15;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0)`;
      }
      requestAnimationFrame(render);
    };
    
    let animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, []); // The isVisible state has been completely removed

  return (
    <>
      {/* Outer Trailing Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-12 h-12 border border-[#8245ec] rounded-full pointer-events-none z-[99999] -ml-6 -mt-6 shadow-[0_0_10px_rgba(130,69,236,0.5)]"
        style={{ willChange: 'transform' }}
      ></div>
      
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#8245ec] rounded-full pointer-events-none z-[99999] -ml-1 -mt-1 shadow-[0_0_5px_rgba(130,69,236,0.8)]"
        style={{ willChange: 'transform' }}
      ></div>
    </>
  );
};

export default CustomCursor;