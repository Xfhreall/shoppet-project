'use client';

import { Card, CardContent } from '@/shared/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { Globe, Heart, Star, Users } from 'lucide-react';
import { useRef } from 'react';
import { AnimatedCounter } from './animated-counter';

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Pet owners trust us with their beloved companions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    value: 20,
    suffix: '+',
    label: 'Countries Served',
    description: 'Delivering pet happiness worldwide',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Star,
    value: 5,
    suffix: '',
    label: 'Star Rating',
    description: 'Consistently excellent service quality',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Heart,
    value: 99,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'We go above and beyond for every pet',
    color: 'from-pink-500 to-rose-500',
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 to-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These numbers represent the trust and love our community has shown
            us over the years
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-card backdrop-blur-sm h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <div className="mb-4">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
