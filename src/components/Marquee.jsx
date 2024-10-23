/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { horizontalLoop } from "./horizontalLoop"; // Import the horizontalLoop function
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ title, image, isActive }) => (
  <div
    className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ${
      isActive ? "scale-110 z-10" : "scale-90"
    }`}
    style={{
      minWidth: "20%", // Adjust for 5 items
      height: "400px",
    }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <div className="flex items-center justify-between">
        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center transition-colors">
          View Project <ArrowUpRight className="ml-2 w-4 h-4" />
        </button>
        <button className="bg-green-400 p-2 rounded-full">
          <Github className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  </div>
);

const Marquee = ({ cards }) => {
   
  const marqueeRef = useRef(null);
  useEffect(() => {
    const items = marqueeRef.current.children;
    // Call horizontalLoop for continuous scrolling of cards
    const loopTimeline = horizontalLoop(items, {
      speed: 1,
      snap: 1,
      repeat: -1,
      paused:false,
    });

    // Scale the center card
    loopTimeline.eventCallback("onUpdate", () => {
      const rect = marqueeRef.current.getBoundingClientRect();
      // eslint-disable-next-line no-unused-vars
      Array.from(items).forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(itemRect.left + itemRect.width / 2 - centerX);
        // Scale based on distance from center
        const scaleValue = 1.3 - Math.min(distanceFromCenter / (rect.width / 2), 0.4); 
        gsap.to(item, {
          scale: scaleValue > 0.6 ? scaleValue : 0.6, // maintain minimum scale at 0.6
          duration: 0.5,
          ease: "power3.out",
        });
      });
    });

    return () => {
      loopTimeline.kill(); 
    };
  }, [cards]);

  return (
   <>
    <div className="picker  " ref={marqueeRef}>
      {cards.map((card, index) => (
        <div key={index} className="cell  ">
         <ProjectCard title={card.title} image={card.image} />
        </div>
      ))}
      </div>
    
   </>
    
  );
};

export default Marquee;
