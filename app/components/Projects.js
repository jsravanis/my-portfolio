import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full md:flex-row md:justify-between">
                    <h3 className="text-xl font-semibold">StudySphere | <a href="https://github.com/jsravanis/study-sphere" target="_blank"
                             className="text-blue-700 hover:underline">View Project</a></h3>
                    <p className="text-gray-600 mt-4">Developed a web application for creating and managing study groups
                        with features like real-time collaboration via chat, file sharing, and flashcard creation. Submitted initial version to PearlHacks 2025.</p>
                    <p className="text-gray-600 mt-2"><b>Tools Used:</b> React, Vite, Tailwind CSS, WebSockets, Java Spring
                        Boot, PostgreSQL, JWT, STOMP</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full md:flex-row md:justify-between">
                    <h3 className="text-xl font-semibold">Wellness Track | <a href="https://github.com/jsravanis/WellnessTrack" target="_blank"
                             className="text-blue-700 hover:underline">View Project</a></h3>
                    <p className="text-gray-600 mt-4">Developed a decoupled Single Page Application (SPA) to showcase
                        the impact of wearable devices in healthcare, using dynamic charts with data stored in MongoDB and
                        deployed it using Ngnix.</p>
                    <p className="text-gray-600 mt-2"><b>Tools Used:</b> HTML, CSS, React, MongoDB, Ngnix, Java, JWT,
                        Spring Boot, D3.js</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                    <h3 className="text-xl font-semibold">Veg vs Non-Veg Classifier</h3>
                    <p className="text-gray-600 mt-4">Captured images of University dining food for the dataset and
                        performed Veg vs
                        Non-Veg Food Classification using CNN and pre-trained models. Developed a web application to
                        access it using StreamLit.</p>
                    <p className="text-gray-600 mt-2"><b>Tools Used:</b> Python, Keras, TensorFlow, CNN, StreamLit</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                    <h3 className="text-xl font-semibold">Hospital Management System</h3>
                    <p className="text-gray-600 mt-4">Developed a Hospital Management System for hospital employees to
                        manage their
                        patient’s treatment, tests, rooms, and medication. Led a team of 6 people while working on the
                        project.</p>
                    <p className="text-gray-600 mt-2"><b>Tools Used:</b> HTML, CSS, Bootstrap, Javascript, SQLAlchemy
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
