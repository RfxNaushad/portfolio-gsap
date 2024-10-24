
import '../App.css'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Create a timeline for hard color reveal
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-effects",
        start: "top 50%",
        end: "top top",
        scrub: true,
        // markers: true,
      }
    });
    // Select all reveal-type elements
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor; // Background color (initial)
      const fg = char.dataset.fgColor; // Foreground color (final)

      // Use SplitType to split the text into individual characters
      const text = new SplitType(char, { types: "chars" });

      // Hard color reveal with no easing and short duration
      timeline.fromTo(
        text.chars,  // Target individual characters
        { color: bg }, 
        {
          color: fg,
          duration: 0.5, 
          stagger: 0.05, 
          ease: "none", 
        },
        "+=0.01" 
      );
    });
    // Clean up GSAP ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          About Me
        </p>

        <div className="text-effects">
          <h1 className="text text-4xl md:text-[4.5rem] leading-[64px] font-bold">

            <span
              className="reveal-type"
              data-bg-color="gray"  
              data-fg-color="white"  
            >
              I'm a{" "}
            </span>

            <span
              className="reveal-type"
              data-bg-color="gray"   
              data-fg-color="#22C55E" 
            >
              full-stack developer{" "}
            </span>

            <span
              className="reveal-type"
              data-bg-color="gray"   
              data-fg-color="white"  
            >
              focused on building quality and impactful digital solutions across front-end{" "} and{" "}
            </span> 

            <span
              className="reveal-type"
              data-bg-color="gray"   
              data-fg-color="white"  
            >
              back-end.
            </span>

          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;



