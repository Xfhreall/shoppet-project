'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const minScale = 0.3;
  const maxScroll = 180;
  const scale = 1 - Math.min(scrollY, maxScroll) / (maxScroll * 0.8);
  const finalScale = Math.max(scale, minScale);
  const minY = -260;
  const y = (-Math.min(scrollY, maxScroll) / maxScroll) * Math.abs(minY);

  return (
    <motion.h1
      ref={h1Ref}
      className="text-8xl font-semibold z-50 fixed -translate-y-[50%] top-[50%]"
      style={{ width: 'max-content' }}
      animate={{
        scale: finalScale,
        y: y,
        transition: { type: 'spring', stiffness: 60, damping: 15 },
      }}
      initial={{ y: 0, scale: 1 }}
    >
      {['S', 'h', 'o', 'p', 'p', 'e', 't'].map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: idx * 0.1, duration: 1.2, stiffness: 20 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
