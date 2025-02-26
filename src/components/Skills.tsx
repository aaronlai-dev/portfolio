import { motion } from 'framer-motion';

type ImageType = {
  title: string;
  source: string;
};

type SkillImageProps = {
  image: ImageType;
  index: number;
  delayOffset?: number;
};

// Reusable SkillImage component
const SkillImage = ({ image, index, delayOffset = 0 }: SkillImageProps) => {
  const fadeInAnimationsVariants = (index: number) => ({
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.03 * (index + delayOffset),
      },
    }
  });

  return (
    <motion.img 
      key={index} 
      className="grayscale-100 w-20 transition hover:grayscale-0 hover:drop-shadow-xl hover:scale-115 ease-out" 
      src={image.source} 
      alt={image.title} 
      variants={fadeInAnimationsVariants(index)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    />
  );
};

export default function Skills() {
  const front_end = [
    { title: "HTML", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
    { title: "CSS", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    { title: "Javascript", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    { title: "Typescript", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
    { title: "React", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { title: "Tailwind", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    { title: "FramerMotion", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"},
    { title: "Figma", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},
  ];

  const back_end = [
    { title: "Python", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    { title: "Java", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
    { title: "C", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
    { title: "MySQL", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},
    { title: "Pandas", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"},
    { title: "Numpy", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"},
    { title: "Bash", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"},
    { title: "Git", source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},
  ];

  return(
    <section className="h-dvh w-dvw">
      <div className="flex flex-row h-full">
        <div className="md:basis-2/5"></div>
        <div className="w-full md:basis-3/5 place-content-center justify-items-center md:pr-20 font-jaka font-semibold text-l text-center">
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-12 mb-24 justify-items-center">
            <div className="col-span-4 lg:col-span-1 lg:row-span-2 max-w-30 self-center p-2 rounded-xl bg-back-200">
              Front-End
            </div>
            {front_end.map((image, index) => (
              <SkillImage key={index} image={image} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-12 justify-items-center">
            <h2 className="col-span-4 lg:col-span-1  lg:row-span-2 max-w-30 self-center p-2 rounded-xl bg-back-200">
              Back-End
            </h2>
            {back_end.map((image, index) => (
              <SkillImage key={index} image={image} index={index} delayOffset={front_end.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}