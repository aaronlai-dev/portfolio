import { useState, useRef } from 'react';
import photo from '../assets/BentoPhoto.png';
import bouldering from '../assets/bouldering.mp4';
import family1 from '../assets/family1.jpg';
import family2 from '../assets/family2.jpg';
import family3 from '../assets/family3.jpg';
import food1 from '../assets/food1.jpeg';
import food2 from '../assets/food2.jpeg';
import food3 from '../assets/food3.jpeg';
import { easeInOut, motion } from 'motion/react';

interface GridItemProps {
  className?: string; // Optional className prop
}

const GridItem: React.FC<React.PropsWithChildren<GridItemProps>> = ({ children, className }) => {
  return (
    <motion.div 
      className={`relative rounded-lg p-4 ${className || ''} hover:drop-shadow-2xl`}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1, ease: easeInOut },
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView= {{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
        amount:0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [familyImg, setFamilyImg] = useState<any>(family1);
  const [foodImg, setFoodImg] = useState<any>(food1);

  const playVideo = () => {
    vidRef.current?.play();
  };

  const pauseVideo = () => {
    // Pause as well
    vidRef.current?.pause();
  };

  const familyHover = () => {
    if (familyImg === family1) { setFamilyImg(family2); }
    else if (familyImg === family2) { setFamilyImg(family3); }
    else { setFamilyImg(family1); }
  }

  const foodHover = () => {
    switch(foodImg) {
      case food1:
        setFoodImg(food2);
        break;
      case food2:
        setFoodImg(food3);
        break;
      default:
        setFoodImg(food1);
    }
  }

  return(
    <section className="h-dvh w-screen">
      <div className="flex flex-row h-full">
        <div className="md:basis-2/5"></div>
        <div className="w-full md:basis-3/5 place-content-center justify-items-center">
          <div className="grid grid-cols-4 grid-rows-4 min-h-160 gap-4 ml-10 md:ml-0 mr-10 max-h-2/3 font-titi md:text-l">
            <GridItem className="row-span-2 text-center content-center bg-back-200">
              3rd year UniMelb student as a BSci Computer and Software Systems Major!
            </GridItem>
            <GridItem className="text-sm md:text-3xl text-center content-center bg-back-100">
              🇨🇳 🇯🇵 🇦🇺<br/>🇭🇰 🇨🇦 🇹🇱
            </GridItem>
            <GridItem className="bg-back-200 content-center">
              Recently into: <p className='font-semibold'>Cryptocurrency + Quantum Computing</p>
            </GridItem>
            <GridItem 
              className="row-span-2 bg-back-100 text-4xl text-center content-center overflow-hidden group"
            >
              <video 
                ref={vidRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-2"
                onMouseEnter = {() => playVideo()}
                onMouseLeave = {() => pauseVideo()}
                loop
                muted
                playsInline
              >
                <source src={bouldering} type="video/mp4" />
              </video>
              
              <div className="flex flex-col gap-2">
                <span>🪨</span>
                <span>⬆️</span>
                <span>⬆️</span>
                <span>🧗</span>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-2 bg-back-300">
              <img src={photo} className="absolute bottom-0 left-0 aspect min-h-70 max-h-76 md:max-h-80 rounded-lg"/>
              <p className="absolute bottom-4 right-4">
                me :D
              </p>
            </GridItem>
            <GridItem className="row-span-2 text-5xl text-center content-center bg-back-100 overflow-hidden group">
              <img
                src={foodImg}
                onMouseLeave={() => foodHover()}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-2"
              />
              <div className="flex flex-col gap-8">
                <span>🍲 &nbsp;🍳</span>
                <span>🥘 &nbsp;🍜</span>
              </div>
            </GridItem>
            <GridItem className="text-center content-center bg-back-200">
              Professional at <p className='font-semibold inline'>falling fast</p> <br/>(and getting back up!)
            </GridItem>
            <GridItem className="text-center content-center lg:text-xl bg-back-100">
              Honest Design <br/> == <br/>Good Design
            </GridItem>
            <GridItem className="col-span-2 content-center text-center text-xl bg-back-300 overflow-hidden group">
              <img
                src={familyImg}
                onMouseLeave={() => familyHover()}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
              />
              Youngest of 5 && Uncle to 6
            </GridItem>
          </div>
        </div>
      </div>
    </section>
  )
}