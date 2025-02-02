'use client';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ['Home', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'];

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            {/* Main header container */}
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>

                {/* Desktop Navigation (visible on md and up) */}
                <ul className="hidden md:flex space-x-6">
                    {sections.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section.toLowerCase()}`}
                                className="px-2 lg:px-4 hover:text-blue-500 transition"
                            >
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Icon (visible on small screens) */}
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden">
                    {/* Horizontal Line for Separation */}
                    <div className="border-t border-gray-300 mx-4"></div>
                    <ul className="flex flex-col space-y-2 bg-white">
                        {sections.map((section) => (
                            <li key={section} className="text-center">
                                <a
                                    href={`#${section.toLowerCase()}`}
                                    className="block px-4 py-2 hover:text-blue-500 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
