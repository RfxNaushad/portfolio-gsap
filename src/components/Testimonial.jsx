import { ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        name: "Alex Mua",
        role: "Ngeni Lab director",
        subRole: "Lead Developer",
        quote: "Nafiur transformed our projects with reliable, user-friendly solutions. Highly recommend!",
        avatar: "/testimonial_avatar1.png",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Tech Innovators CEO",
        subRole: "Product Strategist",
        quote: "Working with Nafiur has been a game-changer for our company. Their solutions are top-notch!",
        avatar: "/testimonial_avatar2.png",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "StartUp Ventures Founder",
        subRole: "Software Architect",
        quote: "Nafiur's expertise in creating scalable solutions has been invaluable to our growth.",
        avatar: "/testimonial_avatar3.png",
    },
];
export default function Testimonial() {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
    const testimonialRefs = useRef([]);

    // useEffect(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.author',
        //         start: "top 200",
        //         end: 'top top-=750',
        //         scrub: true,
        //         pin: true,
        //         // markers: true,
        //     },
        // });
    //     // text effect 
    //     const timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".content",
    //             start: "top 80%",
    //             end: "top 20%",
    //             scrub: true,
    //             markers: false,
    //         }
    //     });
    //     const splitTypes = document.querySelectorAll(".reveal-type");
    //     splitTypes.forEach((char) => {
    //         const bg = char.dataset.bgColor;
    //         const fg = char.dataset.fgColor;
    //         const text = new SplitType(char, { types: "chars" });
    //         timeline.fromTo(
    //             text.chars,
    //             { color: bg },
    //             {
    //                 color: fg,
    //                 duration: 0.1,
    //                 stagger: 0.05,
    //                 ease: "none",
    //             },
    //             "+=0.01"
    //         );
    //     });
    //     const lenis = new Lenis();
    //     lenis.on("scroll", (e) => {
    //         console.log(e);
    //     });
    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);

    //     testimonials.forEach((testimonial, index) => {
    //         ScrollTrigger.create({
    //             trigger: testimonialRefs.current[index],
    //             start: "top 10%",
    //             onEnter: () => setActiveTestimonial(testimonials[index + 1] || testimonials[index]),
    //             onLeaveBack: () => setActiveTestimonial(testimonials[index - 1] || testimonials[index]),
    //         });
    //     });
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);


    // version 2
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.author',
    //             start: "top 200",
    //             end: 'top top-=750',
    //             scrub: true,
    //             pin: true,
    //             // markers: true,
    //         },
    //     });
    
    //     // Initialize GSAP timeline for text reveal
    //     testimonials.forEach((testimonial, index) => {
    //         ScrollTrigger.create({
    //             trigger: testimonialRefs.current[index],
    //             start: "top 60%",
    //             // end: 'top -100%',
    //             markers: true,
    //             scrub: true,
    //             onEnter: () => {
    //                 setActiveTestimonial(testimonials[index]);
    
    //                 const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
    //                 if (revealTypeElement) {
    //                     const bg = revealTypeElement.dataset.bgColor;
    //                     const fg = revealTypeElement.dataset.fgColor;
    //                     const text = new SplitType(revealTypeElement, { types: "chars" });
    //                     gsap.set(text.chars, { color: bg });
    //                     gsap.fromTo(
    //                         text.chars,
    //                         { color: bg }, // Start color
    //                         {
    //                             color: fg, 
    //                             // duration: 0.1,
    //                             stagger: 0.02,
    //                             ease: "none",
    //                         }
    //                     );
    //                 }
    //             },
    //             onLeaveBack: () => {
    //                 const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
    //                 if (revealTypeElement) {
    //                     const bg = revealTypeElement.dataset.bgColor;
    //                     const text = new SplitType(revealTypeElement, { types: "chars" });
    //                     gsap.to(text.chars, { color: bg, duration: 0 }); 
    //                 }
    //                 setActiveTestimonial(testimonials[index - 1] || testimonials[index]);
    //             },
    //         });
    //     });
    
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);
    // version 3
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.author',
    //             start: "top 200",
    //             end: 'top top-=750',
    //             scrub: true,
    //             pin: true,
    //         },
    //     });
    
    //     testimonials.forEach((testimonial, index) => {
    //         ScrollTrigger.create({
    //             trigger: testimonialRefs.current[index],
    //             start: "top 60%",
    //             scrub: true,
    //             onEnter: () => {
    //                 const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
    //                 if (revealTypeElement) {
    //                     const bg = revealTypeElement.dataset.bgColor;
    //                     const fg = revealTypeElement.dataset.fgColor;
    //                     const text = new SplitType(revealTypeElement, { types: "chars" });
    
    //                     gsap.set(text.chars, { color: bg }); // Set initial color
    //                     setActiveTestimonial(testimonials[index]); // Set active testimonial at the start
    
    //                     // Create a timeline for the text reveal based on scroll
    //                     const revealTimeline = gsap.timeline({
    //                         scrollTrigger: {
    //                             trigger: revealTypeElement,
    //                             start: "top 90%", // Adjust this to control when the reveal starts
    //                             end: "top 20%", // Adjust this to control when the reveal ends
    //                             scrub: 1, // Smooth scrubbing
    //                         },
    //                     });
    
    //                     revealTimeline.fromTo(
    //                         text.chars,
    //                         { color: bg }, // Start color
    //                         {
    //                             color: fg,
    //                             stagger: 0.02,
    //                             ease: "none",
    //                         }
    //                     );
    //                 }
    //             },
    //             onLeaveBack: () => {
    //                 const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
    //                 if (revealTypeElement) {
    //                     const bg = revealTypeElement.dataset.bgColor;
    //                     const text = new SplitType(revealTypeElement, { types: "chars" });
    //                     gsap.to(text.chars, { color: bg, duration: 0 }); // Reset to initial color
    //                 }
    //                 // Do not change active testimonial on leave back
    //             },
    //         });
    //     });
    
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);

    //    current version
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => t, // linear easing
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on unmount
        };
    }, []);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.author',
                start: "top 200",
                end: 'top top-=750',
                scrub: true,
                pin: true,
            },
        });
    
        testimonials.forEach((testimonial, index) => {
            ScrollTrigger.create({
                trigger: testimonialRefs.current[index],
                start: "top 60%",
                scrub: true,
                onEnter: () => {
                    const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
                    if (revealTypeElement) {
                        const bg = revealTypeElement.dataset.bgColor;
                        const fg = revealTypeElement.dataset.fgColor;
                        const text = new SplitType(revealTypeElement, { types: "chars" });
    
                        gsap.set(text.chars, { color: bg }); 
                        setActiveTestimonial(testimonials[index]); 

                        const revealTimeline = gsap.timeline({
                            scrollTrigger: {
                                trigger: revealTypeElement,
                                start: "top 90%", 
                                end: "top 20%", 
                                scrub: 1,
                            },
                        });
    
                        revealTimeline.fromTo(
                            text.chars,
                            { color: bg },
                            {
                                color: fg,
                                stagger: 0.02,
                                ease: "none",
                            }
                        );
                    }
                },
                onLeaveBack: () => {
                    setActiveTestimonial(testimonials[index - 1] || testimonials[index]);
                    const revealTypeElement = testimonialRefs.current[index].querySelector('.reveal-type');
                    if (revealTypeElement) {
                        const bg = revealTypeElement.dataset.bgColor;
                        const text = new SplitType(revealTypeElement, { types: "chars" });
                        gsap.to(text.chars, { color: bg, duration: 0 }); // Reset to initial color
                    }
                },
            });
        });
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center testimonial">
            <div className="max-w-[1120px] mx-auto relative w-full">
                <div className="mb-12">
                    <h2 className="text-xs uppercase tracking-wider mb-4">What they said</h2>
                    <hr className="border-gray-800" />
                </div>

                <div className="flex flex-col items-start gap-8 px-7 content">
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            ref={el => testimonialRefs.current[index] = el}
                            className="py-20 border-b "
                        >
                            <div className="relative">
                                <RiDoubleQuotesL className="text-green-400 text-6xl absolute -left-20 -top-4" />
                                <span
                                    className="reveal-type text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 inline-block max-w-[70%]"
                                    data-bg-color="gray"
                                    data-fg-color="white"
                                >
                                    {item.quote}
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                                <p className="text-gray-500 text-sm">{item.subRole}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Avatar Section - Fixed in the center */}
                <div>
                    <div className="flex flex-col items-end gap-4 absolute top-8 md:top-12 lg:top-28 right-0 md:right-5 lg:-right-10 author z-20">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={` flex items-center rounded-full overflow-hidden relative cursor-pointer transition-all duration-300 ${activeTestimonial.id === testimonial.id ? "" : "grayscale opacity-50"
                                    }`}
                            >  
                                {activeTestimonial.id === testimonial.id && (
                                    <div className="">
                                        <ChevronLeft className="text-green-400 w-6 h-6 font-bold" />
                                    </div>
                                )}
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="size-[87px] object-cover rounded-full p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
