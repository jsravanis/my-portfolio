// app/page.js
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
    return (
        <div>
            <main>
                <Hero/>
                <Skills/>
                <hr/>
                <Experience/>
                <hr/>
                <Projects/>
                <hr/>
                <Testimonials/>
                <hr/>
                <Contact/>
            </main>
        </div>
    );
}
