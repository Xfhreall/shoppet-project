'use client';

import { ContactForm } from '@/shared/components/contact-form';
import { ContactInfo } from '@/shared/components/contact-info';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        {/* Main Content */}
        <motion.main
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-12"
        >
          {/* Hero Section */}
          <motion.section variants={fadeInUp} className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Let's Start a Conversation
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Have a question, suggestion, or just want to say hello? We're here
              to help and would love to hear from you.
            </motion.p>
          </motion.section>

          {/* Contact Info Cards */}
          <motion.section variants={fadeInUp} className="mb-16">
            <ContactInfo />
          </motion.section>

          {/* Contact Form */}
          <motion.section variants={fadeInUp}>
            <ContactForm />
          </motion.section>

          {/* Additional Info */}
          <motion.section variants={fadeInUp} className="mt-16 text-center">
            <motion.div
              className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly at +1
                (555) 123-4567.
              </p>
            </motion.div>
          </motion.section>
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="container mx-auto px-4 py-8 text-center text-muted-foreground"
        >
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
