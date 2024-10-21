import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TextEffects = () => {
  useEffect(() => {
    // Create a timeline for sequential animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-effects",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      }
    });

    // Select all reveal-type elements
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars" });

      // Add each text section to the timeline for sequential animation
      timeline.fromTo(
        text.chars,
        { color: bg }, // Start color (gray)
        {
          color: fg, // End color (white or green for full-stack developer)
          duration: 0.3,
          stagger: 0.02,
        },
        "+=0.5" // Delay between the animations (adjust for pacing)
      );
    });

    // Smooth scrolling using Lenis
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
          <h1 className="text text-4xl md:text-[4.25rem] font-bold leading-tight">

            <span
              className="reveal-type"
              data-bg-color="gray"   // Initially gray
              data-fg-color="white"  // Reveals to white for the rest
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
              data-fg-color="gray"  
            >
              back-end.
            </span>

          </h1>
        </div>
      </div>
    </div>
  );
};

export default TextEffects;
