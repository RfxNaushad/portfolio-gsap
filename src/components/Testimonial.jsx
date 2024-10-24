import { ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

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
    //    current version
    useEffect(() => {
        testimonials.forEach((testimonial, index) => {
            ScrollTrigger.create({
                trigger: testimonialRefs.current[index],
                start: "top 90%",
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
                                start: "top 80%",
                                end: 'top 20%',
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
        gsap.timeline({
            scrollTrigger: {
                trigger: '.author',
                start: "top 350",
                end: 'top top-=950',
                scrub: true,
                pin: true,
                // markers: true,
            },
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center testimonial">
            <div className="max-w-[1120px] mx-auto relative w-full">
                <div className="mb-12">
                    <h2 className="text-xs uppercase tracking-wider mb-4 text-center md:text-start">What they said</h2>
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
                                <h1
                                    className="reveal-type text-[74px] font-bold leading-[64px] mb-8 inline-block max-w-[70%]"
                                    data-bg-color="gray"
                                    data-fg-color="white"
                                >
                                    {item.quote}
                                </h1>
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
                    <div className="flex flex-col items-end gap-4 absolute top-16 bottom-10 md:top-12 lg:top-28 right-0 md:right-5 lg:-right-10 author z-20">
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
