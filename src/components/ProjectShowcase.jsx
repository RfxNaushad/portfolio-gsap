/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
       

        {/* <div
          ref={containerRef}
          className="relative flex space-x-6  justify-center w-full h-full "
        >
          {projects.map((project, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="card flex-none  transition-transform duration-500"
              key={project.id}
              style={{ width: "20%", height: "400px" }} // Adjust for 5 items visible
            >
              <ProjectCard title={project.title} image={project.image} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
