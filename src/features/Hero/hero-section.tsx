'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.h1
      className="text-8xl font-semibold"
      style={{ width: 'max-content' }}
      animate={{
        transition: { type: 'spring', stiffness: 60, damping: 15 },
      }}
      initial={{ y: 0, scale: 1 }}
    >
      {'Shoppet'.split('').map((char, idx) => (
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
