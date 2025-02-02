'use client'; // Add this line

import React, { useEffect, useState } from 'react';
import styles from '../../styles/hero.module.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Hi, I'm Jaya Sravani Sirigineedi!";

    useEffect(() => {
        let index = 0;
        const typeCharacter = () => {
            if (index < fullText.length) {
                // Use charAt to safely get the character at the current index
                const nextChar = fullText.charAt(index);
                setText((prev) => prev + nextChar);
                index++;
                setTimeout(typeCharacter, 100); // Schedule next character
            }
        };
        typeCharacter();
    }, []);

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="text-center">
                <h1 className={styles.name}>
                    <span className={styles.cursor}>{text}</span>
                </h1>
            </div>
            <div className="text-center">
                <p className="text-center mt-4 text-sm md:text-xl px-6 max-w-3xl w-full">
                    Passionate Software Developer with nearly 5 years of experience. Proficient in Java, Spring Boot,
                    and microservices
                    architecture, with a strong foundation in agile methodologies and cloud technologies. To learn more
                    about me and my skills...
                </p>
                <div className="mt-6 space-x-4 text-center">
                    <a href="#skills"
                       className="inline-block text-sm md:text-lg bg-white text-blue-600 px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
                        View My Work
                    </a>
                    <a href="/Resume_Jaya_Sravani_Sirigineedi.pdf" target="_blank"
                       className="inline-block text-sm md:text-lg bg-white text-blue-600 px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
