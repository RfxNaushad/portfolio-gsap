/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


export default function ProjectShowcase() {
  const projectShowRef = useRef(null);
  
  const projects = [
    { id: 1, title: "Weather app", image: "/project1.png" },
    { id: 2, title: "Landing page", image: "/project2.jpeg" },
    { id: 3, title: "B2B App", image: "/project3.png" },
    { id: 4, title: "E-commerce", image: "/project2.jpeg" },
    { id: 5, title: "Marketing", image: "/project2.jpeg" },
    { id: 6, title: "Portfolio Website", image: "/project2.jpeg" },
    
  ];

  return (
    <div
      ref={projectShowRef}
      className="bg-black  text-white py-16 w-full h-screen overflow-hidden"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
          Freelance Showcase
        </h2>
        <h3 className="text-5xl font-bold mb-12 text-center">
          Explore more projects
        </h3>

        
        <div  >
        <Marquee cards={projects} />
        </div>
       

       
      </div>
    </div>
  );
}
