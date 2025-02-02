// app/layout.js
import Navbar from './components/Navbar';
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

// Custom fonts for your portfolio
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Jaya Sravani Sirigineedi", // Updated title to reflect your name
    description: "Passionate Software Developer Portfolio showcasing skills, experience, and projects.",
};

export default function Layout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar />
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
