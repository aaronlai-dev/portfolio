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

export default function ProjectCard({ offset, title, desc, skills }: ProjectCardProps) {

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
      <Card className={offset}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent className="h-20">
        </CardContent>
        <CardFooter>
          {skills}
        </CardFooter>
      </Card>
    </motion.div>
    
  )
}