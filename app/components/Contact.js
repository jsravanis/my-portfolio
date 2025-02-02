import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-8 text-center"> {/* Reduced padding */}
            <h2 className="text-2xl font-bold mb-2">Contact Me</h2> {/* Reduced font size */}
            <p className="mb-4 text-sm">Feel free to reach out via email or social media!</p> {/* Reduced text size */}

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-6">
                <a
                    href="mailto:jsravanis901@gmail.com"
                    className="text-blue-500 hover:text-blue-700 transition duration-300 text-3xl hover:scale-110 transform"
                >
                    <img src="https://svgl.app/library/gmail.svg" alt="Gmail" className="w-8 h-8"/>
                </a>
                <a
                    href="https://github.com/jsravanis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-300 text-3xl hover:scale-110 transform"
                >
                    <img src="https://svgl.app/library/github-light.svg" alt="Github" className="w-8 h-8"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/jaya-sravani-sirigineedi-9540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition duration-300 text-3xl hover:scale-110 transform"
                >
                    <img src="https://svgl.app/library/linkedin.svg" alt="LinkedIn" className="w-8 h-8"/>
                </a>
            </div>
        </section>
    );
};

export default Contact;
