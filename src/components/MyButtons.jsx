import { useRef, useState } from 'react';
import { gsap, Elastic } from 'gsap';

const MyButtons = () => {
    // Create refs for the buttons
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const strength = 20; // Adjust strength for magnetic effect

    // State to track hover status
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

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

    const handleMouseEnter = (setIsHovered) => {
        setIsHovered(true);
    };

    const handleMouseLeaveBg = (setIsHovered) => {
        setIsHovered(false);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
                ref={buttonRef1}
                className="relative px-8 py-3 text-white text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, buttonRef1)}
                onMouseLeave={() => {
                    handleMouseLeave(buttonRef1);
                    handleMouseLeaveBg(setIsHovered1);
                }}
                onMouseEnter={() => handleMouseEnter(setIsHovered1)}
            >
                <div
                    className={`absolute top-[-50%] left-[-25%] w-[150%] h-[200%] bg-blue-600 rounded-full transition-transform duration-500 ease-in-out ${isHovered1 ? 'translate-y-0' : 'translate-y-[76%]'}`}
                ></div>
                <div
                    className={`absolute top-[-50%] left-[-25%] w-[150%] h-[200%] bg-blue-600 rounded-full transition-transform duration-500 ease-in-out ${isHovered1 ? 'translate-y-0' : 'translate-y-[76%]'}`}
                ></div>
                <span className="relative z-10">Write a Message</span>
            </button>

            <button
                ref={buttonRef2}
                className="relative px-8 py-3 text-white text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, buttonRef2)}
                onMouseLeave={() => {
                    handleMouseLeave(buttonRef2);
                    handleMouseLeaveBg(setIsHovered2);
                }}
                onMouseEnter={() => handleMouseEnter(setIsHovered2)}
            >
                <div
                    className={`absolute top-[-50%] left-[-25%] w-[150%] h-[200%] bg-blue-600 rounded-full transition-transform duration-500 ease-in-out ${isHovered2 ? 'translate-y-0' : 'translate-y-[76%]'}`}
                ></div>
                <span className="relative z-10">Discuss Project</span>
            </button>
        </div>
    );
};

export default MyButtons;