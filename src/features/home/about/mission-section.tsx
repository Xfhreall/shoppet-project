'use client';

import { Card, CardContent } from '@/shared/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { Award, Heart, Shield, Truck } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    icon: Heart,
    title: 'Pet-First Philosophy',
    description:
      'Every decision we make prioritizes the health, happiness, and well-being of your beloved pets.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'We carefully curate every product to ensure it meets our high standards for safety and quality.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Truck,
    title: 'Fast & Reliable',
    description:
      "Quick delivery and reliable service because we know your pets can't wait for their essentials.",
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Award,
    title: 'Expert Support',
    description:
      'Our team of pet care experts is always ready to help you make the best choices for your pets.',
    color: 'from-purple-500 to-violet-500',
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-background md:text-5xl">
            Our Mission & Values
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-muted-foreground">
            At Shoppet, we believe every pet deserves the best. Our mission is
            to make premium pet care accessible, convenient, and affordable for
            pet parents everywhere.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden transition-all duration-500 border-0 group hover:shadow-xl bg-card backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} shadow-lg`}
                    >
                      <value.icon className="text-white w-7 h-7" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                        {value.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
