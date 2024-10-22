import { ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.author',
                start: "top 200",
                end: 'top top-=750',
                scrub: true,
                pin: true,
                // markers: true,
            },
        });
        testimonials.forEach((testimonial, index) => {
            ScrollTrigger.create({
                trigger: testimonialRefs.current[index],
                start: "top 10%",
                onEnter: () => setActiveTestimonial(testimonials[index + 1] || testimonial),
                onLeaveBack: () => setActiveTestimonial(testimonials[index - 1] || testimonial),
            });
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center testimonial">
            <div className="max-w-[1120px] mx-auto relative">
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
                                <blockquote className="quote text-5xl font-extrabold leading-tight mb-8 text-reveal">
                                    {item.quote}
                                </blockquote>
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
                    <div className="flex flex-col items-end gap-4 absolute top-28 -right-10 author z-20">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={` flex items-center rounded-full overflow-hidden relative cursor-pointer transition-all duration-300 ${activeTestimonial.id === testimonial.id ? "" : "grayscale opacity-50"
                                    }`}
                            >  {activeTestimonial.id === testimonial.id && (
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
