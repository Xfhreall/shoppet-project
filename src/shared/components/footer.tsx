import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo/paws2.jpg';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative size-8">
                <Image src={logo} fill alt="logo" className="rounded-full" />
              </div>
              <h2 className="text-2xl font-bold">ShopPet</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Your trusted partner in pet care. We provide quality products and
              expert advice to keep your furry friends happy and healthy.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors text-sm"
              >
                Contact us
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors text-sm"
              >
                Shipping Info
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors text-sm"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Stay Connected Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Get pet care tips, exclusive offers, and new product updates!
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-background placeholder-gray-400 flex-1"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 px-6">
                  <span className="sr-only">Subscribe</span>→
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-muted-foreground">shoppet@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-muted-foreground">+62 123 4567 8911</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-muted-foreground">
                  123 Pet Street, Animal City, AC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>© 2024 ShopPet. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for pet lovers everywhere.</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-background transition-colors"
              >
                Accessibility
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
