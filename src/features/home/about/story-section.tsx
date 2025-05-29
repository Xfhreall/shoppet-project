'use client';

import { Card, CardContent } from '@/shared/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-background font-bold mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2025 by a group of passionate pet lovers, Shoppet
                began as a small local pet store with a big dream: to make
                high-quality pet care accessible to everyone, everywhere.
              </p>
              <p>
                What started as a humble brick-and-mortar shop has grown into a
                global e-commerce platform serving thousands of happy customers
                across 20+ countries. Our journey has been driven by one simple
                belief - every pet deserves the best care possible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotateY: 0 }
                : { opacity: 0, x: 50, rotateY: 15 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <img
                    src="https://imgcdn.cna.com.tw/Ind/WebIndPhotos/800/2024/20241125/1024x768_67197215994.jpg"
                    alt="Shoppet team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
