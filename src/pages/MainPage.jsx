import { useRef, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import RecentProjects from "../components/RecentProjects";
import Testimonial from "../components/Testimonial";
import WhatIDo from "../components/WhatIDo";
import WorkExperience from "../components/WorkExperience";
import TextMarquee from "../components/TextMarquee";
import gsap, { Elastic } from "gsap";


function MainPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const buttonRef1 = useRef(null);
    const btnFillRef1 = useRef(null);
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
    return (
        <div className="main-section ">
            {/* Navbar */}
            <nav
                id="menu-navbar "
                className=" bg-black text-white flex justify-between items-center p-4 border-b border-gray-300"
            >
                <div className="font-bold text-xl">A. Al Akib</div>

                <div className="hidden md:flex space-x-4 justify-center items-center">
                    <a href="#work" className="hover:text-gray-400 text-sm">
                        Work
                    </a>
                    <a href="#about" className="hover:text-gray-400 text-sm">
                        About
                    </a>
                    <button
                        ref={buttonRef1}
                        className="relative px-6 py-2 text-white hover:text-black text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden"
                        onMouseMove={(e) => handleMouseMove(e, buttonRef1)}
                        onMouseLeave={() => {
                            handleMouseLeave(buttonRef1);
                            handleMouseLeaveBg(btnFillRef1);
                        }}
                        onMouseEnter={() => handleMouseEnter(btnFillRef1)}
                    >
                        <div
                            ref={btnFillRef1}
                            className="absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-white rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]"
                        ></div>
                        <span className="relative z-10">Contact</span>
                    </button>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black text-white md:hidden">
                        <div className="flex flex-col space-y-2 p-4">
                            <a href="#work" className="hover:text-gray-400">
                                Work
                            </a>
                            <a href="#about" className="hover:text-gray-400">
                                About
                            </a>
                            <a
                                href="#contact"
                                className="bg-transparent border border-white 
                            rounded-md px-4 py-2 hover:bg-white hover:text-black transition duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <Hero />
            <TextMarquee />
            <About />
            {/* <WhatWeDo /> */}
            <WhatIDo />
            <RecentProjects />
            <WorkExperience />
            <Testimonial />
            <ProjectShowcase />
            <Footer />

        </div>
    );
}

export default MainPage;
