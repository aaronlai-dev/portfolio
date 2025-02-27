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
      className={`relative rounded-lg p-2 md:p-4 ${className || ''} hover:drop-shadow-2xl`}
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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [familyImg, setFamilyImg] = useState<any>(null);
  const [foodImg, setFoodImg] = useState<any>(null);

  const playPause = () => {
    if (!vidRef.current) {
      return;
    }

    if (vidRef.current.currentTime > 0 && !vidRef.current.paused && !vidRef.current.ended) {
      vidRef.current.pause();
      setIsVisible(false);
    }
    else {
      vidRef.current.play();
      setIsVisible(true);
    }
  };

  const familyHover = () => {
    switch(familyImg) {
      case family1:
        setFamilyImg(family2);
        break;
      case family2:
        setFamilyImg(family3);
        break;
      case family3:
        setFamilyImg(null);
        break;
      default:
        setFamilyImg(family1);
    }
  }

  const foodHover = () => {
    switch(foodImg) {
      case food1:
        setFoodImg(food2);
        break;
      case food2:
        setFoodImg(food3);
        break;
      case food3:
        setFoodImg(null);
        break;
      default:
        setFoodImg(food1);
    }
  }

  return(
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 min-h-160 gap-2 md:gap-4 mr-4 ml-4 md:ml-0 md:mr-12 max-h-2/3 font-titi">
      <GridItem className="row-span-2 text-center content-center bg-back-200">
        3rd year UniMelb student as a BSci Computer and Software Systems Major!
      </GridItem>
      <GridItem className="text-l lg:text-3xl text-center content-center bg-back-100">
        🇨🇳 🇯🇵 🇦🇺<br/>🇭🇰 🇨🇦 🇹🇱
      </GridItem>
      <GridItem className="bg-back-200 content-center text-sm lg:text-lg">
        Recently into: <p className='font-semibold'>Crypto + Quantum Computing</p>
      </GridItem>
      <GridItem 
        className="row-span-2 bg-back-100 text-4xl text-center content-center overflow-hidden"
      >
        <video 
          ref={vidRef}
          className={`absolute inset-0 w-full h-full object-cover z-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          preload="none"
          onMouseEnter = {() => playPause()}
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
      <GridItem className="hidden md:block row-span-2 col-span-2 bg-back-300">
        <img src={photo} className="absolute bottom-0 left-0 aspect min-h-70 max-h-76 md:max-h-80 rounded-lg" loading="lazy"/>
        <p className="absolute bottom-4 right-4">
          me :D
        </p>
      </GridItem>
      <GridItem className="md:hidden text-center content-center lg:text-xl bg-back-300 md:bg-back-100">
        Honest Design <br/> == <br/>Good Design
      </GridItem>
      <GridItem className="row-span-2 text-5xl text-center content-center bg-back-100 overflow-hidden">
        <img
          src={foodImg}
          loading="lazy"
          onMouseEnter={() => foodHover()}
          onTouchStart={() => foodHover()}
          className={`absolute inset-0 w-full h-full object-cover opacity-0 z-2 ${foodImg != null ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="flex flex-col gap-8">
          <span>🍲 🍳</span>
          <span>🥘 🍜</span>
        </div>
      </GridItem>
      <GridItem className="text-center content-center text-sm lg:text-lg bg-back-200">
        A pro at <p className='font-semibold inline'>falling fast</p> <br/>(and getting back up!)
      </GridItem>
      <GridItem className="hidden md:block text-center content-center lg:text-xl bg-back-100">
        Honest Design <br/> == <br/>Good Design
      </GridItem>
      <GridItem className="col-span-2 content-center text-center md:text-xl min-h-20 bg-back-300 overflow-hidden">
        <img
          src={familyImg}
          loading="lazy"
          onMouseEnter={() => familyHover()}
          onTouchStart={() => familyHover()}
          className={`absolute inset-0 w-full h-full object-cover ${familyImg != null ? 'opacity-100' : 'opacity-0'}`}
        />
        Youngest of 5 && Uncle to 6
      </GridItem>
    </div>
  )
}