'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 2800], [0, 80]);

  const text = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="w-full relative h-[300vh] bg-background z-0 overflow-clip"
      ref={ref}
    >
      <div className="h-screen w-full sticky top-0 grid place-items-center">
        <motion.div
          className="bg-foreground aspect-square size-12 absolute rounded-full"
          style={{ scale }}
        />
        <motion.h1
          className="text-[4rem] font-semibold"
          style={{ width: 'max-content', scale: text, opacity: text }}
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
      </div>
    </section>
  );
}
