import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Navbar from './components/NavBar';
import StickyTitle from './components/StickyTitle';
import Avatar from './components/Avatar';

export default function App() {
  const [visibleSection, setVisibleSection] = useState<string>('Title');
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value based on when you want the section to be considered visible
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ReactLenis root>
      <div className="bg-back-50">
        <Navbar scrollToSection={scrollToSection} heroRef={heroRef} projectsRef={projectsRef} skillsRef={skillsRef} aboutRef={aboutRef} />
        <Avatar />
        <div ref={heroRef} id="Home">
          <Hero />
        </div>
        <div ref={projectsRef} id="Projects">
          <Projects />
        </div>
        <div ref={skillsRef} id="Skills">
          <Skills />
        </div>
        <div ref={aboutRef} id="About Me">
          <About />
        </div>
        <StickyTitle visibleSection={visibleSection} />
      </div>
    </ReactLenis>
  );
}