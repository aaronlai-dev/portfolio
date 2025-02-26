import React from 'react';
import { Button } from "./ui/button"
import resume from '../assets/resume.pdf';

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  heroRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, heroRef, projectsRef, skillsRef, aboutRef }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 p-4 space-x-4 z-20">
        <Button variant="outline" className="hover:border-pri "><a href={resume} target="_blank" rel='noopener noreferrer'>My Resume</a> </Button>
        <Button variant="outline" className="hover:border-pri"><a href="https://github.com/aaronlai-dev" target="_blank" rel='noopener noreferrer'>GitHub</a></Button>
      </nav>
      <nav className="fixed top-0 right-0 p-4 space-x-4 z-20">
        <button onClick={() => scrollToSection(heroRef)} className="hover:text-pri">Home</button>
        <button onClick={() => scrollToSection(projectsRef)} className="hover:text-pri">Projects</button>
        <button onClick={() => scrollToSection(skillsRef)} className="hover:text-pri">Skills</button>
        <button onClick={() => scrollToSection(aboutRef)} className="hover:text-pri">About Me</button>
      </nav>
    </>
    
  );
};

export default Navbar;