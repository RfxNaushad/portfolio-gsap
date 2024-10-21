/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";

const services = [
    {
        icon: "</>", // This is a placeholder. You might want to use a proper icon component.
        title: "Frontend & Backend development",
        description:
            "End-to-end web development and scalable architecture. Version Control: Git for collaboration and code management.",
    },
    {
        icon: "</>", // Placeholder icon
        title: "DevOps & Deployment:",
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

const ServiceCard = ({ service, isLarge = false }) => (
    <div
        className={`bg-[#2A2A2A] rounded-3xl p-6 ${
            isLarge ? "col-span-2" : "col-span-1"
        } flex flex-col`}
    >
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
    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            <div className="max-w-[1120px] mx-auto">
                <div className="absolute top-0 left-0 w-full h-full "></div>
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
                <div className="grid grid-cols-5 gap-6 relative z-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            isLarge={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
