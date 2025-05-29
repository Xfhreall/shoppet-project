'use client';

import type React from 'react';

import { Alert, AlertDescription } from '@/shared/components/ui/alert';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Mail,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (
      !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-$$$$]/g, ''))
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <motion.div variants={itemVariants}>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6"
            >
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6"
            >
              <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  Something went wrong. Please try again later.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`pl-10 transition-all duration-200 ${
                    errors.name ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`pl-10 transition-all duration-200 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`pl-10 transition-all duration-200 ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                />
              </div>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`min-h-[120px] resize-none transition-all duration-200 ${
                  errors.message ? 'border-red-500 focus:border-red-500' : ''
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg font-medium relative overflow-hidden group"
              >
                <motion.div
                  className="flex items-center justify-center gap-2"
                  animate={isSubmitting ? { scale: 0.95 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'linear',
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
