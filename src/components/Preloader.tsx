import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  isLoading?: boolean;
}

export const Preloader = ({ isLoading = true }: PreloaderProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    // Simulate asset loading progress
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 10, 100));

    }, 100);

    if (progress == 100) {
      setFinished(true);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {!finished ? (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
          transition = {{ duration: 2}}
          className = "fixed inset-0 bg-back-50 z-50 flex items-center justify-center"
        >
          <AnimatePresence propagate>
            <motion.span
                initial = {{ scale: 0, opacity: 0 }}
                animate = {{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold"
              >
                {Math.round(progress)}%
              </motion.span>
          </AnimatePresence>
            
        </motion.div>
      ): (
        null
      )}
    </AnimatePresence>
    
  );
};