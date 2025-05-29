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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Shoppet, we believe every pet deserves the best. Our mission is
            to make premium pet care accessible, convenient, and affordable for
            pet parents everywhere.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-card backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                    >
                      <value.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
