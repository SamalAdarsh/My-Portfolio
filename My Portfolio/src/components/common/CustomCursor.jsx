import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  
  // Detect if the device has a physical mouse ("fine pointer")
  // If it's a touch screen (like a phone), isVisible will be false.
  const [isVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(pointer: fine)").matches;
    }
    return false;
  });

  useEffect(() => {
    // If it's a mobile device, completely skip the event listeners to save performance
    if (!isVisible) return;

    const mouse = { x: -100, y: -100 }; 
    const circle = { x: -100, y: -100 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

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
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  // If the device doesn't use a mouse, render absolutely nothing
  if (!isVisible) return null;

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