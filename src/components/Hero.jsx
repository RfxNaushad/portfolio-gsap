// import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import download from "../assets/icon/download.png";
import down from "../assets/icon/lower-arrow.png";
import bgImage from "../assets/images/hero-bg.png";
import profile from "../assets/images/man-smiling.png";
// import { gsap } from 'gsap';

import "../App.css";

const Hero = () => {
    return (
        <div
            className="flex flex-col items-center justify-start h-screen relative bg-black text-white py-20"
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
                <div className="flex flex-col justify-center items-start w-1/3 p-8">
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
                <div className="flex justify-center items-end w-1/3">
                    <div className="relative image-container">
                        <img
                            src={profile}
                            alt="Profile"
                            className="object-cover h-60 w-60 md:w-full md:h-auto"
                        />
                    </div>
                </div>

                {/* Right Column - Arrow and Text */}
                <div className="flex flex-col w-1/3 p-8 text-start">
                    <img src={down} alt="Icon arrow" className="w-6 h-6 mb-8" />
                    <h2 className="text-[2rem]">Freelance</h2>
                    <h3 className="text-[2rem]">Full Stack Developer</h3>
                </div>
            </div>

            {/* Name Scrolling Section */}
            <div className="-mt-32 z-10">
                <div className="overflow-hidden relative">
                    <div className=" ">
                        <h1 className="hero-name text-[12vw] text-center font-semibold leading-none text-nowrap">
                            Abdullah Al Akib
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
