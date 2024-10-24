import React, { useEffect, useRef } from 'react';
import { Elastic, gsap } from 'gsap';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import download from "../assets/icon/download.png";
import down from "../assets/icon/lower-arrow.png";
import bgImage from "../assets/images/hero-bg.png";
import profile from "../assets/images/man-smiling.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import "../App.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
    const marqueeRefs = useRef([]);
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);
    const btnFillRef1 = useRef(null);
    const btnFillRef2 = useRef(null);
    const btnFillRef3 = useRef(null);
    const strength = 20;

    const animateBtnFill = (btnFillRef, translateY, duration) => {
        const btnFill = btnFillRef.current;
        if (btnFill) {
            requestAnimationFrame(() => {
                btnFill.animate(
                    {
                        transform: `translate(-50%, ${translateY}%)`,
                    },
                    { duration, fill: "forwards", easing: "ease" }
                );
            });
        }
    };

    const handleMouseMove = (event, buttonRef) => {
        const magnetButton = buttonRef.current;
        const bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
            duration: 1,
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Elastic.easeOut.config(1, 0.3),
        });
    };

    const handleMouseLeave = (buttonRef) => {
        gsap.to(buttonRef.current, {
            duration: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(1, 0.3),
        });
    };

    const handleMouseEnter = (btnFillRef) => {
        animateBtnFill(btnFillRef, 50, 0);
        animateBtnFill(btnFillRef, -50, 850);
    };

    const handleMouseLeaveBg = (btnFillRef) => {
        animateBtnFill(btnFillRef, -150, 850);
    };
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
                        <button
                            ref={buttonRef1}
                            className="relative px-8 py-3 text-white text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden"
                            onMouseMove={(e) => handleMouseMove(e, buttonRef1)}
                            onMouseLeave={() => {
                                handleMouseLeave(buttonRef1);
                                handleMouseLeaveBg(btnFillRef1);
                            }}
                            onMouseEnter={() => handleMouseEnter(btnFillRef1)}
                        >
                            <div
                                ref={btnFillRef1}
                                className="absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-[#ff9e14] rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]"
                            ></div>
                            <div className="relative z-10 flex items-center gap-3">Download CV <FaDownload /></div>

                        </button>
                        <button
                            ref={buttonRef2}
                            className="relative flex justify-center items-center text-white rounded-full p-2 transition duration-300 w-[2.5rem] h-[2.5rem] magnetic overflow-hidden border "
                            onMouseMove={(e) => handleMouseMove(e, buttonRef2)}
                            onMouseLeave={() => {
                                handleMouseLeave(buttonRef2);
                                handleMouseLeaveBg(btnFillRef2);
                            }}
                            onMouseEnter={() => handleMouseEnter(btnFillRef2)}
                        >
                            <div
                                ref={btnFillRef2}
                                className="absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-[#ff9e14] rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]"
                            ></div>
                            <FaLinkedin className="w-4 h-4 text-white z-10" />
                        </button>
                        <button
                            ref={buttonRef3}
                            className="relative flex justify-center items-center text-white rounded-full p-2 transition duration-300 w-[2.5rem] h-[2.5rem] magnetic overflow-hidden border "
                            onMouseMove={(e) => handleMouseMove(e, buttonRef3)}
                            onMouseLeave={() => {
                                handleMouseLeave(buttonRef3);
                                handleMouseLeaveBg(btnFillRef3);
                            }}
                            onMouseEnter={() => handleMouseEnter(btnFillRef3)}
                        >
                            <div
                                ref={btnFillRef3}
                                className="absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-[#ff9e14] rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]"
                            ></div>
                            <FaGithub className="w-4 h-4 text-white z-10" />
                        </button>
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
