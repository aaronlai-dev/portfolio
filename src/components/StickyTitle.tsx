import React from 'react';
import { motion } from 'motion/react';

interface StickyTitleProps {
  visibleSection: string;
}

const StickyTitle: React.FC<StickyTitleProps> = ({ visibleSection }) => {
  return (
    <motion.div 
        className="fixed bottom-5 left-5 text-5xl md:text-7xl font-semibold z-10"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 0.4, filter: "blur(0)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        key={visibleSection}
      >
        {visibleSection}
      </motion.div>
  );
};

export default StickyTitle;