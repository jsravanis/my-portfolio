import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer II at Loraine Lab, UNCC",
            date: "Oct 2023 - Present",
            points: [
                "Created a plugin to integrate Ensembl data into the IGB with efficient searching and caching.",
                "Enhanced IGB's UI using Java Swing, OSGi, and Apache Felix",
                "Automated integration of 220+ genome species into IGB using UCSC’s REST API with JSON.",
                "Optimized performance by reducing load time increase from 23% to 4% using multithreading."
            ]
        },
        {
            role: "Backend Developer (Team Lead) at Backbase",
            date: "Oct 2022 - July 2023",
            points: [
                "Customized Backbase products for SNB Neo Bank using Java and Spring Boot.",
                "Delivered Digital Lending product by integrating SOAP-based web services with XML.",
                "Led backend team, created technical solutions through client collaboration and team management.",
                "Using Agile methodologies, effectively planned and delivered high-quality features on time."
            ]
        },
        {
            role: "Software Developer at Tata Consultancy Services",
            date: "Sept 2020 - Oct 2022",
            points: [
                "Collaborated with multiple teams to manage patient treatment and test results for DaVita.",
                "Worked on 6 microservices using Java, Spring Boot, Kafka, and RestTemplate to ensure seamless integration.",
                "Maintained a code coverage standard of 80%+ by writing emulated test cases for integration testing.",
                "Improved database performance by refining SQL and NoSQL queries"
            ]
        },
        {
            role: "Data Science Intern at Tata Consultancy Services",
            date: "Jan 2020 - April 2020",
            points: [
                "Performed segmentation and churn analysis on a health insurance dataset",
                "Developed and deployed a web app using HTML, Bootstrap, and Flask for ML model visualization"
            ]
        }
    ];

    return (
        <section id="experience" className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-8 top-5 bottom-0 w-1 bg-blue-300"></div>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex">
                                {/* Timeline marker */}
                                <div className="absolute left-0 top-2 flex items-center justify-center w-16 h-16">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full ring-4 ring-white">
                                        <span className="sr-only">Timeline marker</span>
                                    </div>
                                </div>
                                {/* Experience card */}
                                <div className="ml-20 bg-white p-6 rounded-lg shadow-lg w-full">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start">
                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                        <p className="text-gray-500 md:text-right mt-2 md:mt-0">{exp.date}</p>
                                    </div>
                                    <ul className="list-disc list-inside mt-4 space-y-2">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="text-gray-700">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
