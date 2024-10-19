// /* eslint-disable react/prop-types */
// import { ArrowUpRight, Github } from "lucide-react";

// const ProjectCard = ({ title, image, isActive }) => (
//     <div
//         className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ${
//             isActive ? "col-span-2 aspect-[2/1]" : "aspect-square"
//         }`}
//     >
//         <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 p-6 w-full">
//             <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
//             <div className="flex items-center justify-between">
//                 <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center transition-colors">
//                     View Project <ArrowUpRight className="ml-2 w-4 h-4" />
//                 </button>
//                 <button className="bg-green-400 p-2 rounded-full">
//                     <Github className="w-5 h-5 text-black" />
//                 </button>
//             </div>
//         </div>
//     </div>
// );

// export default function ProjectShowcase() {
//     return (
//         <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-[1120px] mx-auto">
//                 <h2 className="text-xs uppercase tracking-wider mb-8">
//                     Freelance Showcase
//                 </h2>
//                 <h3 className="text-5xl font-bold mb-12">
//                     Explore more projects
//                 </h3>
//                 <div className="grid grid-cols-4 gap-6">
//                     <ProjectCard
//                         title="Weather app"
//                         image="/public/project1.png"
//                     />
//                     <ProjectCard
//                         title="Landing page"
//                         image="/public/project2.jpeg"
//                         isActive
//                     />
//                     <ProjectCard title="B2B" image="/public/project3.png" />
//                 </div>
//             </div>
//         </div>
//     );
// }





// /* eslint-disable react/prop-types */
// import { ArrowUpRight, Github } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProjectCard = ({ title, image, isActive }) => (
//     <div
//         className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ${
//             isActive ? "scale-110 z-10" : "scale-90"
//         }`}
//         style={{
//             minWidth: "250px",
//             height: "400px",
//         }}
//     >
//         <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 p-6 w-full">
//             <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
//             <div className="flex items-center justify-between">
//                 <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center transition-colors">
//                     View Project <ArrowUpRight className="ml-2 w-4 h-4" />
//                 </button>
//                 <button className="bg-green-400 p-2 rounded-full">
//                     <Github className="w-5 h-5 text-black" />
//                 </button>
//             </div>
//         </div>
//     </div>
// );

// export default function ProjectShowcase() {
//     const containerRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(2); // Make the 3rd one (index 2) active at the start

//     const projects = [
//         { id: 1, title: "Weather app", image: "/public/project1.png" },
//         { id: 2, title: "Landing page", image: "/public/project2.jpeg" },
//         { id: 3, title: "B2B App", image: "/public/project3.png" },
//         { id: 4, title: "E-commerce", image: "/public/project4.png" },
//         { id: 5, title: "Marketing", image: "/public/project5.png" },
//         { id: 6, title: "Portfolio Website", image: "/public/project6.png" },
//     ];

//     useEffect(() => {
//         const container = containerRef.current;

//         // Handle mouse wheel scrolling
//         container.addEventListener('wheel', (e) => {
//             e.preventDefault();
//             container.scrollLeft += e.deltaY * 2; // Adjust scroll speed here
//         });

//         // GSAP animation for enlarging the center item
//         const cards = gsap.utils.toArray(".card");
//         gsap.to(cards, {
//             xPercent: -100 * (projects.length - 1),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: container,
//                 scrub: 1,
//                 snap: {
//                     snapTo: 1 / (cards.length - 1),
//                     duration: 0.2,
//                     ease: "power1.inOut"
//                 },
//                 onUpdate: (self) => {
//                     const middleIndex = Math.round(self.progress * (projects.length - 1));
//                     setActiveIndex(middleIndex);
//                 },
//                 end: () => "+=3000", // Control how long the scrolling lasts
//             },
//         });

//         return () => {
//             container.removeEventListener('wheel', null);
//         };
//     }, []);

//     return (
//         <div className="bg-black text-white py-16 w-full h-screen overflow-hidden">
//             <div className="max-w-full mx-auto">
//                 <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
//                     Freelance Showcase
//                 </h2>
//                 <h3 className="text-5xl font-bold mb-12 text-center">
//                     Explore more projects
//                 </h3>

//                 <div
//                     ref={containerRef}
//                     className="relative flex space-x-6 justify-center w-full h-full overflow-x-hidden overflow-y-hidden"
//                 >
//                     {projects.map((project, index) => (
//                         <div
//                             className={`card flex-none transition-transform duration-500 ${
//                                 activeIndex === index ? "scale-110" : "scale-90"
//                             }`}
//                             key={project.id}
//                             style={{ width: "250px", height: "400px" }}
//                         >
//                             <ProjectCard
//                                 title={project.title}
//                                 image={project.image}
//                                 isActive={index === activeIndex}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Navigation Dots */}
//                 <div className="flex justify-center space-x-4 mt-8">
//                     {projects.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                                 index === activeIndex
//                                     ? "bg-white"
//                                     : "bg-white/20"
//                             }`}
//                             onClick={() => setActiveIndex(index)}
//                         ></button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ title, image, isActive }) => (
    <div
        className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ${
            isActive ? "scale-110 z-10" : "scale-90"
        }`}
        style={{
            minWidth: "20%", // Adjust for 5 items
            height: "400px",
        }}
    >
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
            <div className="flex items-center justify-between">
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center transition-colors">
                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
                <button className="bg-green-400 p-2 rounded-full">
                    <Github className="w-5 h-5 text-black" />
                </button>
            </div>
        </div>
    </div>
);

export default function ProjectShowcase() {
    const containerRef = useRef(null);

    const projects = [
        { id: 1, title: "Weather app", image: "/public/project1.png" },
        { id: 2, title: "Landing page", image: "/public/project2.jpeg" },
        { id: 3, title: "B2B App", image: "/public/project3.png" },
        { id: 4, title: "E-commerce", image: "/public/project2.jpeg" },
        { id: 5, title: "Marketing", image: "/public/project2.jpeg" },
        { id: 6, title: "Portfolio Website", image: "/public/project2.jpeg" },
    ];

    // useEffect(() => {
    //     const cards = gsap.utils.toArray(".card");
    
    //     // Infinite smooth scrolling animation (right to left)
    //     gsap.to(cards, {
    //         xPercent: -100 * cards.length, // Move entire width
    //         repeat: -1, // Infinite loop
    //         duration: 10, // Adjust speed here
    //         ease: "linear",
    //         modifiers: {
    //             xPercent: gsap.utils.wrap(-100 * cards.length, 0), // Wrap the position
    //         },
    //     });
    // }, []);

    useEffect(() => {
        const cards = gsap.utils.toArray(".card");
    
        // Infinite scrolling animation
        gsap.to(cards, {
            xPercent: -100 * cards.length, // Move all the cards left by 100% times the number of cards
            repeat: -1, // Infinite loop
            duration: 10, // Adjust speed as needed
            ease: "linear",
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0), // Wrap around seamlessly
            },
        });
    }, []);

    return (
        <div className="bg-black text-white py-16 w-full h-screen overflow-hidden">
            <div className="max-w-full mx-auto">
                <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
                    Freelance Showcase
                </h2>
                <h3 className="text-5xl font-bold mb-12 text-center">
                    Explore more projects
                </h3>

                <div
                    ref={containerRef}
                    className="relative flex space-x-6 justify-center w-full h-full overflow-hidden"
                >
                    {projects.map((project) => (
                        <div
                            className="card flex-none transition-transform duration-500"
                            key={project.id}
                            style={{ width: "20%", height: "400px" }} // Adjust for 5 items visible
                        >
                            <ProjectCard title={project.title} image={project.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


