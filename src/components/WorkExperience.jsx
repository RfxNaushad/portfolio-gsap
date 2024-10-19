const WorkExperience = () => {
    const experiences = [
        {
            company: "iBOS Limited",
            period: "Now",
            role: "Full Stack Developer",
            description:
                "Where I did different products of this company that was given this company a biggest reveniu",
        },
        {
            company: "AGT Tech",
            period: "2022-2023",
            role: "Backend Developer",
            description:
                "Where I did different products of this company that was given this company a biggest reveniu",
        },
        {
            company: "Ngeni Lab",
            period: "2020-2021",
            role: "Backend Developer",
            description:
                "Where I did different products of this company that was given this company a biggest reveniu",
        },
        {
            company: "Off Tech LTD",
            period: "2018-2019",
            role: "Frontend Developer",
            description:
                "Where I did different products of this company that was given this company a biggest reveniu",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-teal-500 to-green-500 rounded-full filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-yellow-500 to-red-500 rounded-full filter blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-[1120px] mx-auto">
                <p className="text-sm uppercase tracking-wider mb-4 text-center">
                    Work Experience
                </p>
                <h1 className="text-5xl font-bold mb-12 text-center py-10">
                    Where I Gained Expertise
                    <br />&{" "}
                    <span className="text-green-400">Grew My Skills</span>
                </h1>

                {experiences.map((exp, index) => (
                    <div key={index} className="mb-8">
                        <div className="flex justify-between px-7">
                            <div className="w-1/2 pr-4">
                                <h2 className="text-2xl font-bold">
                                    {exp.company}
                                </h2>
                                <p className="text-gray-500">{exp.period}</p>
                            </div>
                            <div className="w-1/2 pl-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-400">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <hr className="border-gray-800 mt-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
