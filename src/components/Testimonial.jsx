// import { ChevronLeft } from 'lucide-react';
// import { useState } from "react";
// import { RiDoubleQuotesL } from "react-icons/ri";

// const testimonials = [
//     {
//         id: 1,
//         name: "Alex Mua",
//         role: "Ngeni Lab director",
//         subRole: "Lead Developer",
//         quote: "Nafiur transformed our projects with reliable, user-friendly solutions. Highly recommend!",
//         avatar: "/public/testimonial_avatar1.png",
//     },
//     {
//         id: 2,
//         name: "Sarah Johnson",
//         role: "Tech Innovators CEO",
//         subRole: "Product Strategist",
//         quote: "Working with Nafiur has been a game-changer for our company. Their solutions are top-notch!",
//         avatar: "/public/testimonial_avatar2.png",
//     },
//     {
//         id: 3,
//         name: "Michael Chen",
//         role: "StartUp Ventures Founder",
//         subRole: "Software Architect",
//         quote: "Nafiur's expertise in creating scalable solutions has been invaluable to our growth.",
//         avatar: "/public/testimonial_avatar3.png",
//     },
// ];

// export default function Testimonial() {
//     const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

//     return (
//         <div className="bg-black text-white  font-sans min-h-screen flex flex-col justify-center">
//             <div className="max-w-[1120px] mx-auto ">
//                 <div className="mb-12">
//                     <h2 className="text-xs uppercase tracking-wider mb-4">
//                         What they said
//                     </h2>
//                     <hr className="border-gray-800"></hr>
//                 </div>

//                 <div className="flex items-start gap-8 px-7">
//                     <div className="flex-grow">
//                         <div className="relative">
//                             <RiDoubleQuotesL className="text-green-400 text-6xl absolute -left-20 -top-4" />
//                             <blockquote className="text-5xl font-extrabold leading-tight mb-8">
//                                 {activeTestimonial.quote}
//                             </blockquote>
//                         </div>
//                         <div>
//                             <p className="font-semibold">
//                                 {activeTestimonial.name}
//                             </p>
//                             <p className="text-gray-500 text-sm">
//                                 {activeTestimonial.role}
//                             </p>
//                             <p className="text-gray-500 text-sm">
//                                 {activeTestimonial.subRole}
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex flex-col items-end gap-4">
//                         {testimonials.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className={`w-20 h-20 rounded-full overflow-hidden relative cursor-pointer transition-all duration-300 ${
//                                     activeTestimonial.id === testimonial.id
//                                         ? ""
//                                         : "grayscale opacity-50"
//                                 }`}
//                                 onClick={() =>
//                                     setActiveTestimonial(testimonial)
//                                 }
//                             >
//                                 <img
//                                     src={testimonial.avatar}
//                                     alt={testimonial.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 {activeTestimonial.id === testimonial.id && (
//                                     <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
//                                         <img src='../assets/icon/toolip.png'></img>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

                

//                 </div>
//             </div>
//         </div>
//     );
// }

import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
    {
        id: 1,
        name: "Alex Mua",
        role: "Ngeni Lab director",
        subRole: "Lead Developer",
        quote: "Nafiur transformed our projects with reliable, user-friendly solutions. Highly recommend!",
        avatar: "/public/testimonial_avatar1.png",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Tech Innovators CEO",
        subRole: "Product Strategist",
        quote: "Working with Nafiur has been a game-changer for our company. Their solutions are top-notch!",
        avatar: "/public/testimonial_avatar2.png",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "StartUp Ventures Founder",
        subRole: "Software Architect",
        quote: "Nafiur's expertise in creating scalable solutions has been invaluable to our growth.",
        avatar: "/public/testimonial_avatar3.png",
    },
];

export default function Testimonial() {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

    return (
        <div className="bg-black text-white  font-sans min-h-screen flex flex-col justify-center">
            <div className="max-w-[1120px] mx-auto ">
                <div className="mb-12">
                    <h2 className="text-xs uppercase tracking-wider mb-4">
                        What they said
                    </h2>
                    <hr className="border-gray-800"></hr>
                </div>

                <div className="flex items-start gap-8 px-7">
                    <div className="flex-grow">
                        <div className="relative">
                            <RiDoubleQuotesL className="text-green-400 text-6xl absolute -left-20 -top-4" />
                            <blockquote className="text-5xl font-extrabold leading-tight mb-8">
                                {activeTestimonial.quote}
                            </blockquote>
                        </div>
                        <div>
                            <p className="font-semibold">
                                {activeTestimonial.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {activeTestimonial.role}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {activeTestimonial.subRole}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={`w-20 h-20 rounded-full overflow-hidden relative cursor-pointer transition-all duration-300 ${
                                    activeTestimonial.id === testimonial.id
                                        ? ""
                                        : "grayscale opacity-50"
                                }`}
                                onClick={() =>
                                    setActiveTestimonial(testimonial)
                                }
                            >
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                                {activeTestimonial.id === testimonial.id && (
                                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                                        <ChevronLeft className="text-green-400 w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
