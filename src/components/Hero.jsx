import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import download from "../assets/icon/download.png";
import down from "../assets/icon/lower-arrow.png";
import bgImage from "../assets/images/hero-bg.png";
import profile from "../assets/images/man-smiling.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import "../App.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
    // const marqueeRef = useRef(null);

    // useEffect(() => {
    //   const marquee = marqueeRef.current;
    //   const width = marquee.scrollWidth / 2; // Get the width of the marquee content
  
    //   gsap.to(marquee, {
    //     x: `-${width}px`, // Move left by the width of the container
    //     duration: 10, // Adjust for speed
    //     repeat: -1, // Infinite looping
    //     ease: 'linear',
    //     modifiers: {
    //       x: (x) => `${parseFloat(x) % width}px`, // Wrap around once the content reaches the end
    //     },
    //   });
    // }, []);
    const marqueeRefs = useRef([]);

    useEffect(() => {
      // Iterate over all marquee elements
      marqueeRefs.current.forEach((item) => {
        const marqueeInner = item.querySelector('.marquee__inner');
        const marqueeContent = marqueeInner.querySelector('.marquee__content');
  
        // Duration from data attribute or default
        const duration = item.getAttribute('data-marquee-duration') || 20;
  
        // Clone the content for a seamless animation
        const marqueeContentClone = marqueeContent.cloneNode(true);
        marqueeInner.appendChild(marqueeContentClone);
  
        // Animate the inner element containing both the original and cloned text
        gsap.to(marqueeInner, {
          x: `-${marqueeContent.offsetWidth}px`,
          duration: duration,
          ease: 'linear',
          repeat: -1,
        });
      });
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-start  relative bg-black text-white py-20"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "contain",
                backgroundPosition: "top",
                backgroundPositionY: "-4rem",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1444px]  mx-auto column-section flex items-center justify-between">
                {/* Left Column */}
                <div className="flex flex-col justify-center items-start w-[25%] p-8">
                    <p className="mb-6">
                        A full stack web developer passionate about building
                        accessible and user-friendly websites. Check out my
                        projects.
                    </p>
                    {/* Download CV Button and Icons */}
                    <div className="flex items-center space-x-4 mb-6">
                        <a
                            href="#"
                            className="bg-[#ff9e14] flex gap-3 items-center text-[1rem] text-black font-semibold py-2.5 px-4 rounded-[1.5rem] shadow hover:bg-orange-400 transition duration-300"
                        >
                            DOWNLOAD CV
                            <img
                                src={download}
                                alt="Icon arrow"
                                className="w-4 h-4"
                            />
                        </a>

                        <a
                            href="#"
                            className="bg-[#ff9e14] flex justify-center items-center text-black rounded-full p-2 transition duration-300 w-[2.5rem] h-[2.5rem]"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>

                        <a
                            href="#"
                            className="bg-[#ff9e14] flex justify-center items-center text-black rounded-full p-2 transition duration-300 w-[2.5rem] h-[2.5rem]"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Middle Column - Profile Image with Blur Effect */}
                <div className="flex justify-center items-end w-[50%]">
                    <div className="relative image-container">
                        <img
                            src={profile}
                            alt="Profile"
                            className="object-cover h-60 w-60 md:w-full md:h-auto"
                        />
                    </div>
                </div>

                {/* Right Column - Arrow and Text */}
                <div className="flex flex-col w-[25%] p-8 text-start">
                    <img src={down} alt="Icon arrow" className="w-6 h-6 mb-8" />
                    <h2 className="text-[2rem]">Freelance</h2>
                    <h3 className="text-[2rem]">Full Stack Developer</h3>
                </div>
            </div>

            {/* Name Scrolling Section */}
            {/* <div className="-mt-32 z-10">
                <div className="overflow-hidden relative">
                    <div className=" ">
                        <h1 ref={textRef} className="hero-name text-[12vw] text-center font-semibold leading-none text-nowrap">
                            Abdullah Al Akib
                        </h1>
                    </div>
                </div>
            </div> */}
        {/* <div className="overflow-hidden relative w-full">
           <div ref={marqueeRef} className="flex whitespace-nowrap">
              <h1 className="hero-name text-[12vw] text-center font-semibold leading-none"> Abdullah Al Akib </h1> 
              <h1 className="hero-name text-[12vw] text-center font-semibold leading-none"> Abdullah Al Akib </h1>
            </div>
        </div> */}

    {/* <div className="flex flex-col justify-center gap-[50px] overflow-hidden -mt-32 z-10">
      <div
        className="marquee whitespace-nowrap"
        data-marquee-duration="35"
        ref={(el) => (marqueeRefs.current[0] = el)}
      >
        <div className="marquee__inner flex gap-[20px]">
          <div className="marquee__content text-white text-[13vw] text-center font-semibold">
            Abdullah Al Akib Abdullah Al Akib Abdullah Al Akib Abdullah Al Akib
          </div>
        </div>
      </div>
    </div> */}

    </div>
    );
};

export default Hero;
