import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { useTransform, useScroll } from 'motion/react';

export default function Avatar() {
  const objectRefs = {
    lightbulbRef: useRef<any>(null),
    glassesRef: useRef<any>(null),
    gradcapRef: useRef<any>(null)
  };

  const { scrollYProgress } = useScroll();

  // Create transforms for position and opacity
  const verticalOffset1D = useTransform(scrollYProgress, [0.1, 0.33], [0, -280]);
  const verticalOffset1U = useTransform(scrollYProgress, [0.36, 0.43], [0, +280]);
  const verticalOffset2D = useTransform(scrollYProgress, [0.43, 0.66], [0, -440]);
  const verticalOffset2U = useTransform(scrollYProgress, [0.70, 0.77], [0, +440]);
  const verticalOffset3D = useTransform(scrollYProgress, [0.77, 1.0], [0, -400]);

  useEffect(() => {
    const updatePositionsAndOpacity = () => {
      // Update positions (same as before)
      const finalPosition1 = 550 + verticalOffset1D.get() + verticalOffset1U.get();
      const finalPosition2 = 620 + verticalOffset2D.get() + verticalOffset2U.get();
      const finalPosition3 = 650 + verticalOffset3D.get();

      // Update positions
      if (objectRefs.lightbulbRef.current) {
        objectRefs.lightbulbRef.current.position.set(
          objectRefs.lightbulbRef.current.position.x,
          finalPosition1,
          objectRefs.lightbulbRef.current.position.z
        );
      }
      
      if (objectRefs.glassesRef.current) {
        objectRefs.glassesRef.current.position.set(
          objectRefs.glassesRef.current.position.x,
          finalPosition2,
          objectRefs.glassesRef.current.position.z
        );
      }
      
      if (objectRefs.gradcapRef.current) {
        objectRefs.gradcapRef.current.position.set(
          objectRefs.gradcapRef.current.position.x,
          finalPosition3,
          objectRefs.gradcapRef.current.position.z
        );
      }

    };

    scrollYProgress.on("change", updatePositionsAndOpacity);
    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress, verticalOffset1D, verticalOffset1U, 
    verticalOffset2D, verticalOffset2U, verticalOffset3D]);

  const onLoad = (spline: Application) => {
    const obj1 = spline.findObjectByName('lightbulb');
    const obj2 = spline.findObjectByName('glasses');
    const obj3 = spline.findObjectByName('gradcap')
    objectRefs.lightbulbRef.current = obj1;
    objectRefs.glassesRef.current = obj2;
    objectRefs.gradcapRef.current = obj3;
  };

  return (
    <main className="hidden md:block fixed md:-translate-x-35 lg:-translate-x-0">
      <Spline
        className='content-center'
        scene="https://prod.spline.design/m2RHEywOfBhsBJW5/scene.splinecode"
        onLoad={onLoad}
      />
    </main>
  );
}