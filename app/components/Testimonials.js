'use client';

import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
    { text: "Sravani does truly excellent work. In my group, she added major new features to our software - Integrated Genome Browser (IGB) - and she brought us miles closer to our big goal of connecting the world's major open bioinformatics data sources to IGB, so that scientists can visually compare results and data from many different studies in the same interface. For this, she leveraged her prior work building and using APIs. In addition, she upgraded our web analytics setup, allowing us to track the number of Integrated Genome Browser downloads. At the same time, she kept outstanding notes on everything she did, giving us the ability to maintain and continue her work for years to come. She also has helped a huge amount with on-boarding and training new students. And, of course, she did all of this while earning a masters degree in a demanding and competitive Computer Science program. Based on having worked with her for most of her tenure at UNC Charlotte, I feel well-qualified to say that Sravani is a brilliant developer and communicator - top 1% in engineering skill, teamwork, and leadership.",
        name: "Ann Loraine", designation: "Lab Professor of Bioinformatics and Genomics" },
    { text: "I've worked with Sravani for a little over a year now as her day to day supervisor. Sravani joined our lab at UNC Charlotte as a Research Assistant working on our software, the Integrated Genome Browser. Sravani is an incredibly skilled software developer and worked on several major projects within the lab. Her biggest contribution was leading the project to integrate data from the UCSC Genome Browser REST API with the Integrated Genome Browser. Her work has been presented at several conferences including Intelligent Systems for Molecular Biology (ISMB), Pacific Symposium on Biocomputing (PSB), and the UNC Charlotte Biological Sciences Research Symposium. I have been truly appreciative to have Sravani as part of our team. I know she has a bright future ahead of her and highly recommend her to any future employers.",
        name: "Nowlan Freese", designation: "Project Manager, Research Assistant Professor of Bioinformatics and Genomics" },
    { text: "I recommend Sravani as an exceptionally skilled Java developer. She consistently demonstrates an impressive command of Java programming, delivering clean and efficient code. What sets her apart is her remarkable communication skills, which greatly facilitate teamwork and project success. Sravani excels in conveying complex technical concepts clearly, both in team meetings and when collaborating with non-technical stakeholders. Her dedication to continuous learning and willingness to mentor others make her an invaluable asset to any organization. I have every confidence that Sravani will continue to excel in the field of Java development and make significant contributions to any team fortunate enough to have her onboard.",
        name: "Bartosz Kończyk", designation: "Team Member, Java Developer" },
    { text: "I wanted to take a moment to express my heartfelt appreciation for her outstanding contributions and remarkable performance as a backend developer on Project SNB over the past seven months. Her dedication, skillset, and work ethic have been truly commendable, and I am incredibly impressed with the results you have achieved. Since joining the project, she have consistently demonstrated a deep understanding of backend development concepts and an unwavering commitment to delivering high-quality solutions. Her technical expertise has been invaluable in driving the success of the project, and your ability to navigate complex challenges with ease has been remarkable. One aspect that truly stands out about your work is your attention to detail. Moreover, her strong communication and collaboration skills have made you a valuable team player. She actively participate in discussions, offer insightful suggestions, and proactively share your knowledge with others. Her willingness to go the extra mile and assist your colleagues, whether it's by providing guidance or helping to troubleshoot issues, has fostered a positive and supportive work environment. Her contributions to Project SNB have been instrumental in its success. Once again, I would like to express my deepest appreciation for her hard work and dedication.",
        name: "Parit Sharma", designation: "Core Project Member, UI/UX Lead Designer" }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false); // To prevent SSR issues
    const intervalRef = useRef(null); // To manage the interval

    useEffect(() => {
        setIsClient(true); // Set to true once the component is mounted on the client-side
        startAutoPlay(); // Start autoplay when the component mounts

        return () => clearInterval(intervalRef.current); // Clean up on unmount
    }, []);

    const startAutoPlay = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 30000);
    };

    const handleNavigation = (index) => {
        setCurrentIndex(index);
        startAutoPlay(); // Restart autoplay after manual navigation
    };

    const prevTestimonial = () => {
        handleNavigation((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial = () => {
        handleNavigation((currentIndex + 1) % testimonials.length);
    };

    // Only render the component after client-side mounting
    if (!isClient) {
        return null; // Or an empty fragment to ensure no SSR rendering
    }

    return (
        <section id="testimonials" className="py-10 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                    <p className="text-lg px-4 italic text-gray-600">
                        "{testimonials[currentIndex].text}"
                    </p>
                    <h4 className="mt-4 font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].designation}</p>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-5xl text-gray-400 hover:text-black"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-5xl text-gray-400 hover:text-black"
                    >
                        &#10095;
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleNavigation(index)}
                                className={`h-3 w-3 rounded-full cursor-pointer ${
                                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
