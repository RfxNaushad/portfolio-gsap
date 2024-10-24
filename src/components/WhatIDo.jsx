// import  { useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import "../App.css"

// const services = [
//     {
//         icon: "</>", // Placeholder icon
//         title: "Frontend & Backend development",
//         description:
//             "End-to-end web development and scalable architecture. Version Control: Git for collaboration and code management.",
//     },
//     {
//         icon: "</>", // Placeholder icon
//         title: "DevOps & Deployment",
//         description:
//             "CI/CD pipelines, Docker, and cloud deployment (AWS, Azure).",
//     },
//     {
//         icon: "</>", // Placeholder icon
//         title: "API Integration",
//         description: "Third-party API integration and secure authentication.",
//     },
//     {
//         icon: "</>", // Placeholder icon
//         title: "Database",
//         description: "SQL/NoSQL database optimization.",
//     },
// ];

// const ServiceCard = ({ service }) => (
//     <div className="bg-[#2A2A2A] rounded-3xl p-6 flex flex-col">
//         <div className="bg-[#3A3A3A] rounded-full w-12 h-12 flex items-center justify-center mb-4">
//             <span className="text-white text-xl">{service.icon}</span>
//         </div>
//         <h3 className="text-white text-lg font-semibold mb-2">
//             {service.title}
//         </h3>
//         <p className="text-gray-400 text-sm flex-grow mb-4">
//             {service.description}
//         </p>
//         <button className="text-white text-sm flex items-center mt-auto">
//             Read more <ArrowRight className="ml-1 w-4 h-4" />
//         </button>
//     </div>
// );

// export default function WhatIDo() {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const sections = gsap.utils.toArray(".service-section");

//         // Create a GSAP timeline for the animations
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".service-container",
//                 scrub: true,
//                 end: '+=3000',
//                 pin: true,
//                 markers: true,
//             },
//         });

//         // Animate each service section in sequence
//         // Animate each service section in sequence
//         sections.forEach((section, index) => {
//             tl.to(
//                 section,
//                 {
//                     x: -100, // Slide out to the left
//                     opacity: 0, // Fade out
//                     duration: 0.5,
//                     ease: "power1.out",
//                     delay: index * 1, // Adjust delay to stagger out
//                 },
//                 `+=0.5` // Delay to allow the card to stay visible for a moment
//             ).fromTo(
//                 section,
//                 { x: 100, opacity: 0 }, // Start from off-screen to the right
//                 {
//                     x: 0, // Move to original position
//                     opacity: 1, // Fade in
//                     duration: 0.5,
//                     ease: "power1.out",
//                 },
//                 `+=0` // Start the next animation right after the previous one finishes
//             );
//         });
//         // Cleanup on unmount
//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//         };
//     }, []);

//     return (
//         <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//             <div className="max-w-[1120px] mx-auto service-container">
//                 <p className="text-sm uppercase tracking-wider mb-2 relative z-10">
//                     SERVICE OFFERINGS
//                 </p>
//                 <h2 className="text-5xl font-bold mb-4 relative z-10">
//                     What <span className="text-[#00E676]">I Do</span>
//                 </h2>
//                 <p className="text-xl text-gray-400 mb-12 max-w-3xl relative z-10">
//                     Expert development services tailored to bring your vision to
//                     life with seamless functionality and cutting-edge
//                     technology.
//                 </p>

//                 {/* Container for the service cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-6">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="service-section flex-shrink-0 opacity-0 w-full sm:w-1/2 md:w-full lg:w-full" // Ensure it's hidden initially
//                         >
//                             <ServiceCard service={service} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* Cursor */}
//             <div className="cursor"></div>
//         </div>
//     );
// }


import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../App.css";

const services = [
    {
        icon: "</>", // Placeholder icon
        title: "Frontend & Backend development",
        description:
            "End-to-end web development and scalable architecture. Version Control: Git for collaboration and code management.",
    },
    {
        icon: "</>", // Placeholder icon
        title: "DevOps & Deployment",
        description:
            "CI/CD pipelines, Docker, and cloud deployment (AWS, Azure).",
    },
    {
        icon: "</>", // Placeholder icon
        title: "API Integration",
        description: "Third-party API integration and secure authentication.",
    },
    {
        icon: "</>", // Placeholder icon
        title: "Database",
        description: "SQL/NoSQL database optimization.",
    },
];

const ServiceCard = ({ service }) => (
    <div className="bg-[#2A2A2A] rounded-3xl p-6 flex flex-col">
        <div className="bg-[#3A3A3A] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-white text-xl">{service.icon}</span>
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">
            {service.title}
        </h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">
            {service.description}
        </p>
        <button className="text-white text-sm flex items-center mt-auto">
            Read more <ArrowRight className="ml-1 w-4 h-4" />
        </button>
    </div>
);

export default function WhatIDo() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".service-section");

        // Create animations for each section
        sections.forEach((section, index) => {
            // Set the initial opacity and position of each service card
            gsap.set(section, {
                opacity: 0,
                x: 100, 
            });

            // Create a staggered animation that triggers on scroll
            gsap.to(section, {
                opacity: 1,
                x: 0, 
                duration: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                  
                },
                delay: index * 0.2,
            });
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            <div className="max-w-[1120px] mx-auto service-container">
                <p className="text-sm uppercase tracking-wider mb-2 relative z-10">
                    SERVICE OFFERINGS
                </p>
                <h2 className="text-5xl font-bold mb-4 relative z-10">
                    What <span className="text-[#00E676]">I Do</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-3xl relative z-10">
                    Expert development services tailored to bring your vision to
                    life with seamless functionality and cutting-edge
                    technology.
                </p>

                {/* Container for the service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-section flex-shrink-0 w-full sm:w-1/2 md:w-full lg:w-full"
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Cursor */}
            <div className="cursor"></div>
        </div>
    );
}



