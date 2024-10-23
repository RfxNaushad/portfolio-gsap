
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
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
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
        { color: bg }, // Starting color
        {
          color: fg, // Final color
          duration: 0.1, // Short duration for a sharp change
          stagger: 0.05, // Stagger for one-by-one effect
          ease: "none",  // No easing for a hard transition
        },
        "+=0.01" // Delay between animations
      );
    });

    // Smooth scrolling using Lenis
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
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



