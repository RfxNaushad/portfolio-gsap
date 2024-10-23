import { useRef, } from 'react';
import { gsap, Elastic } from 'gsap';

const MyButtons = () => {
    // Create refs for the buttons
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const btnFillRef = useRef(null);
    const strength = 20; // Adjust strength for magnetic effect

   

    const animateBtnFill = (translateY, duration) => {
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

    const handleMouseEnter = () => {
     
        animateBtnFill(50, 0);
        // Move the fill element to the center with animation
        animateBtnFill(-50, 850);

        
    };

    const handleMouseLeaveBg = () => {
         // Move the fill element upwards
    animateBtnFill(-150, 850);

       
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
                ref={buttonRef1}
                className="relative px-8 py-3 text-white text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden "
                onMouseMove={(e) => handleMouseMove(e, buttonRef1)}
                onMouseLeave={() => {
                    handleMouseLeave(buttonRef1);
                    handleMouseLeaveBg(1);
                }}
                onMouseEnter={() => handleMouseEnter()}
            >
                <div
                ref={btnFillRef}
                    className={`absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-green-600 rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]`}
                ></div>
                <span className="relative z-10">Write a Message</span>
            </button>

            <button
                ref={buttonRef2}
                className="relative px-8 py-3 text-white text-sm font-medium border border-gray-400 rounded-full magnetic overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, buttonRef2)}
                onMouseLeave={() => {
                    handleMouseLeave(buttonRef2);
                    handleMouseLeaveBg(2);
                }}
                onMouseEnter={() => handleMouseEnter()}
            >
                <div
                ref={btnFillRef}
                    className={`absolute top-1/2 left-1/2 w-[150%] h-[200%] bg-green-600 rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]`}
                ></div>
                <span className="relative z-10">Discuss Project</span>
            </button>
        </div>
    );
};

export default MyButtons;
