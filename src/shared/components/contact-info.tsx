'use client';

import { Card, CardContent } from '@/shared/components/ui/card';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Veteran Street', 'East Java', 'Malang, Indonesia 12345'],
    color: 'text-blue-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+62 (000) 123-4567', '+62 (000) 987-6543'],
    color: 'text-green-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@shoppet.com', 'support@shoppet.com'],
    color: 'text-purple-500',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Mon - Fri: 9:00 AM - 6:00 PM',
      'Sat: 10:00 AM - 4:00 PM',
      'Sun: Closed',
    ],
    color: 'text-orange-500',
  },
];

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {contactInfo.map((info, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-4 ${info.color}`}
              >
                <info.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="text-sm text-muted-foreground"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
