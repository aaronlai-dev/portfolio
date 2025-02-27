import { easeInOut, motion } from 'motion/react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface ProjectCardProps {
  offset: string;
  title: string;
  desc: string;
  skills: string;
  git: string;
}

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  }
};

export default function ProjectCard({ offset, title, desc, skills, git }: ProjectCardProps) {

  return (
    <motion.div className="hover:drop-shadow-[0_35px_35px_rgba(200,209,204,1)]"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1, ease: easeInOut },
      }}
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        amount: 0.8,
        once: true,
      }}
    >
      <Card className={`${offset} group`}>
        <CardHeader className="p-4 md:p-6 text-sm md:text-lg">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-xs md:text-sm">{desc}</CardDescription>
        </CardHeader>
        <CardContent className="hidden h-20 md:flex items-center justify-center">
          <a href={git} target="_blank" rel='noopener noreferrer'>
            <i className="devicon-github-original colored text-5xl opacity-0 transition group-hover:opacity-100 duration-150 ease-in-out"></i>
          </a>
        </CardContent>
        <CardFooter className="p-4 md:p-6 text-sm md:text-base">
          {skills}
        </CardFooter>
      </Card>
    </motion.div>
    
  )
}