// /* eslint-disable react/prop-types */
// import { ArrowRight } from "lucide-react";

// const services = [
//     {
//         icon: "</>", // This is a placeholder. You might want to use a proper icon component.
//         title: "Frontend & Backend development",
//         description:
//             "End-to-end web development and scalable architecture. Version Control: Git for collaboration and code management.",
//     },
//     {
//         icon: "</>", // Placeholder icon
//         title: "DevOps & Deployment:",
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

// const ServiceCard = ({ service, isLarge = false }) => (
//     <div
//         className={`bg-[#2A2A2A] rounded-3xl p-6 ${
//             isLarge ? "col-span-2" : "col-span-1"
//         } flex flex-col`}
//     >
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
//     return (
//         <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//             <div className="max-w-[1120px] mx-auto">
//                 <div className="absolute top-0 left-0 w-full h-full "></div>
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
//                 <div className="grid grid-cols-5 gap-6 relative z-10">
//                     {services.map((service, index) => (
//                         <ServiceCard
//                             key={index}
//                             service={service}
//                             isLarge={index === 0}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

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

// const ServiceCard = ({ service, isLarge = false }) => (
//     <div
//         className={`bg-[#2A2A2A] rounded-3xl p-6 ${
//             isLarge ? "col-span-2" : "col-span-1"
//         } flex flex-col`}
//     >
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

//         const serviceSections = gsap.utils.toArray(".service-section");

//         serviceSections.forEach((section, index) => {
//             // Create a GSAP timeline for each section
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: section,
//                     start: "top 80%", // Trigger when the top of the section reaches 80% of the viewport height
//                     end: "top 30%", // End when the top of the section reaches 30% of the viewport height
//                     scrub: true,
//                     markers: false,
//                 },
//             });

//             // Animate the section
//             tl.fromTo(
//                 section,
//                 {
//                     x: "100%", // Start from the right
//                     scale: 0.8, // Start smaller
//                     opacity: 0, // Start invisible
//                 },
//                 {
//                     x: "0%", // End in place
//                     scale: 1, // Scale to original size
//                     opacity: 1, // Fade in
//                     duration: 1,
//                     delay: index * 0.2, // Delay each card by its index
//                 }
//             ).to(
//                 section,
//                 {
//                     x: "-100%", // Move out to the left
//                     scale: 0.8, // Shrink slightly
//                     opacity: 0, // Fade out
//                     duration: 1,
//                     delay: 1, // Delay the exit animation
//                 },
//                 "+=0.5" // Start this animation after the first one finishes
//             );
//         });

//         // Cleanup on unmount
//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//         };
//     }, []);

//     return (
//         <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//             <div className="max-w-[1120px] mx-auto">
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

//                 {/* Horizontal container for the service cards */}
//                 <div className="services-container flex">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className={`service-section flex-shrink-0 w-72 mr-6`} // Adjust the width as needed
//                         >
//                             <ServiceCard
//                                 service={service}
//                                 isLarge={index === 0}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
        <h3 className="text-white text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">{service.description}</p>
        <button className="text-white text-sm flex items-center mt-auto">
            Read more <ArrowRight className="ml-1 w-4 h-4" />
        </button>
    </div>
);

export default function WhatIDo() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const serviceSections = gsap.utils.toArray(".service-section");

        // Create a GSAP timeline for the animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".service-container",
                start: "top top",
                end: "+=2000", // Adjust as needed based on your content
                pin: true,
                scrub: 1,
                markers: false,
            },
        });

        serviceSections.forEach((section, index) => {
            tl.fromTo(
                section,
                { x: "100%", opacity: 0 }, // Start off-screen
                { 
                    x: "0%", 
                    opacity: 1, 
                    duration: 0.5,
                    ease: "power1.out",
                },
                index * 0.5 // Stagger the entry of each card
            )
            .to(
                section,
                { 
                    opacity: 0, 
                    duration: 0.5,
                    ease: "power1.in",
                },
                `+=1` // Delay before starting to fade out
            );
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="service-section flex-shrink-0">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


// import React, { useEffect } from "react";
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
//                 pin: true,
//                 scrub: true,
//                 end: "+=3000", // Adjust based on how long you want the pin to last
//             },
//         });

// // Animate each service section in sequence
// // Animate each service section in sequence
// sections.forEach((section, index) => {
//     tl.to(
//         section,
//         {
//             x: -100, // Slide out to the left
//             opacity: 0, // Fade out
//             duration: 0.5,
//             ease: "power1.out",
//             delay: index * 1, // Adjust delay to stagger out
//         },
//         `+=0.5` // Delay to allow the card to stay visible for a moment
//     ).fromTo(
//         section,
//         { x: 100, opacity: 0 }, // Start from off-screen to the right
//         {
//             x: 0, // Move to original position
//             opacity: 1, // Fade in
//             duration: 0.5,
//             ease: "power1.out",
//         },
//         `+=0` // Start the next animation right after the previous one finishes
//     );
// });
//         // Cleanup on unmount
//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//         };
//     }, []);

//     return (
// <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//         <div className="max-w-[1120px] mx-auto service-container">
//             <p className="text-sm uppercase tracking-wider mb-2 relative z-10">
//                 SERVICE OFFERINGS
//             </p>
//             <h2 className="text-5xl font-bold mb-4 relative z-10">
//                 What <span className="text-[#00E676]">I Do</span>
//             </h2>
//             <p className="text-xl text-gray-400 mb-12 max-w-3xl relative z-10">
//                 Expert development services tailored to bring your vision to
//                 life with seamless functionality and cutting-edge
//                 technology.
//             </p>

//             {/* Container for the service cards */}
//             <div className="flex flex-row justify-center gap-6">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="service-section flex-shrink-0 opacity-0 w-full sm:w-1/2 lg:w-1/4" // Ensure it's hidden initially
//                     >
//                         <ServiceCard service={service} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//         {/* Cursor */}
//         <div className="cursor"></div>
//     </div>
//     );
// }






