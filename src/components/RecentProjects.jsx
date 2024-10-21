/* eslint-disable react/prop-types */
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Website name",
        image: "/recent_project1.png",
        category: "React JS",
        technologies: [
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
        ],
    },
    {
        id: 2,
        title: "Social Media App",
        image: "/recent_project2.png",
        category: "React JS",
        technologies: [
            "React",
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Tailwindcss",
            "Nest.js",
        ],
    },
    {
        id: 3,
        title: "Weather Forecast App",
        image: "/recent_project3.png",
        category: "React JS",
        technologies: [
            "React",
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Tailwindcss",
            "Nest.js",
        ],
    },
    {
        id: 4,
        title: "Personal Portfolio Website",
        image: "/recent_project4.png",
        category: "React JS",
        technologies: [
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
        ],
    },
];

const ProjectCard = ({ project, isWide }) => (
    <div
        className={`flex flex-col justify-end w-full h-[30.3rem] object-cover  rounded-3xl overflow-hidden ${
            isWide ? "col-span-7" : "col-span-5"
        } bg-cover  bg-no-repeat `}
        style={{ backgroundImage: `url(${project.image})` }}
    >
        {/* <div className="absolute inset-0 bg-black bg-opacity-90"></div> */}
        {/* <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
        /> */}
        <div className="flex items-center gap-4 p-6 ">
            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center text-sm font-medium">
                View Project <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-green-400 p-2 rounded-full">
                <Github className="w-5 h-5 text-black" />
            </button>
        </div>

        <div className="p-6 bg-black opacity-90 ">
            <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
            </h3>
            <div className="w-8/12 flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="border-2 border-gray-700 text-gray-300 text-xs px-3 py-2 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const FilterButton = ({ label, isActive, onClick }) => (
    <button
        className={`px-6 py-3 rounded-full text-sm font-medium ${
            isActive ? "bg-orange-500 text-white" : "bg-gray-700 text-white"
        }`}
        onClick={onClick}
    >
        {label}
    </button>
);

export default function ProjectShowcase() {
    const [filter, setFilter] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(4);

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    const loadMore = () => {
        setVisibleProjects((prevVisible) => prevVisible + 4);
    };

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1120px] mx-auto">
                <div className="flex space-x-4 mb-12">
                    {["All", "Laravel", "React JS", "Wordpress"].map(
                        (category) => (
                            <FilterButton
                                key={category}
                                label={category}
                                isActive={filter === category}
                                onClick={() => setFilter(category)}
                            />
                        )
                    )}
                </div>
                <div className="grid grid-cols-12  gap-8 mb-12">
                    {filteredProjects
                        .slice(0, visibleProjects)
                        .map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isWide={index % 3 === 0}
                            />
                        ))}
                </div>
                {visibleProjects < filteredProjects.length && (
                    <div className="text-center">
                        <button
                            className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium"
                            onClick={loadMore}
                        >
                            Load more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
