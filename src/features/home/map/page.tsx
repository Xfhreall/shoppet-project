'use client';
import WorldMap from '@/shared/components/ui/world-map';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Maps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-300px 0px 0px 0px' });
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (isInView) setShowMap(true);
  }, [isInView]);

  return (
    <div className=" py-40 container mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white dark:text-black">
          Global{' '}
          <span className="text-neutral-400">
            {'Reach'.split('').map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Shoppet services are available across multiple strategic locations
          worldwide, offering seamless connectivity wherever you are. Ideal for
          dynamic professionals, digital nomads, and international travelers.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={
          isInView
            ? { opacity: 1, filter: 'blur(0px)' }
            : { opacity: 0, filter: 'blur(5px)' }
        }
        transition={{ duration: 2 }}
        ref={ref}
      >
        {showMap && (
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -20.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -20.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: -25.2088, lng: 114.8456 }, // Jakarta, Indonesia
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: -25.2088, lng: 114.8456 }, // Jakarta, Indonesia
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: -25.2088, lng: 114.8456 }, // Jakarta, Indonesia
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
            ]}
          />
        )}
      </motion.div>
    </div>
  );
}
