import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const mouseMoveTimeout = useRef(null);

  // Handle hover and mousemove event
  useGSAP(() => {
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Move the mask smoothly with cursor
      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.2,
        ease: "power3.out",
      });

      // Set a timeout to reset the text position
      clearTimeout(mouseMoveTimeout.current);

      // Move the text to follow the cursor with lagging effect
      gsap.to(textRef.current, {
        x: x /8,
        y: y /8,
        duration: 0.4,
        ease: "power2.out",
      });

      // Reset text to center after 100ms of inactivity
      mouseMoveTimeout.current = setTimeout(() => {
        gsap.to(textRef.current, {
          x: 19,
          y: 10,
          duration: 0.3,
        //   ease: "power2.out",
        });
      }, 100);
    };

    if (hovered) {
      cardRef.current.addEventListener("mousemove", handleMouseMove);
    } else {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearTimeout(mouseMoveTimeout.current);
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      className="relative w-72 h-48 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Content */}
      <h2 className="text-2xl text-gray-700">Hover Over Me</h2>

      {/* Cursor Mask */}
      {hovered && (
        <div
          ref={cursorRef}
          className="absolute -top-14 -left-12 w-24 h-24 bg-gray-400 bg-opacity-25 rounded-full pointer-events-none flex items-center justify-center"
         
        >
          <span
            ref={textRef}
            className="text-lg font-bold text-black transform"
            style={{ transform: "translate(-50%, -50%)" }} // Center text
          >
            View
          </span>
        </div>
      )}
    </div>
  );
}

