'use client';
import { Button } from '@/shared/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 font-mono">
      <motion.h1
        className="text-[3rem] font-semibold"
        style={{ width: 'max-content' }}
        animate={{
          transition: { type: 'spring', stiffness: 60, damping: 15 },
        }}
        initial={{ y: 0, scale: 1 }}
      >
        {'404/page-not-found:(('.split('').map((char, idx) => (
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
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 2, duration: 1.2, stiffness: 20 }}
        className='space-x-4'
      >
        <Button variant="outline" onClick={() => router.back()}>
          Go back to previous page
        </Button>
        <Button variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
