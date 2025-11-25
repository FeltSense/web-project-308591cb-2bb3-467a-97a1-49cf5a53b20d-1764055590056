'use client';

import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Featured Properties', href: '#properties' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const services = [
    { name: 'Luxury Homes', href: '#services' },
    { name: 'Property Management', href: '#services' },
    { name: 'Investment Consulting', href: '#services' },
    { name: 'Market Analysis', href: '#services' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#contact' },
    { name: 'Terms of Service', href: '#contact' },
    { name: 'Cookie Policy', href: '#contact' },
    { name: 'Accessibility', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@luxeestate.com', href: 'mailto:info@luxeestate.com' },
    { icon: MapPin, text: '123 Park Avenue, New York, NY 10022', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#contact', label: 'Facebook' },
    { icon: Instagram, href: '#contact', label: 'Instagram' },
    { icon: Linkedin, href: '#contact', label: 'LinkedIn' },
    { icon: Twitter, href: '#contact', label: 'Twitter' }
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Informed About Luxury Properties
              </h3>
              <p className="text-gray-400">
                Receive exclusive listings and market insights directly to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
              />
              <a
                href="#contact"
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20 whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Luxe Estate</h2>
                <p className="text-sm text-amber-600">Properties</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Curating exceptional properties for discerning clients. We specialize in luxury real estate 
              that defines elegance, sophistication, and timeless value.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 text-gray-400 hover:text-amber-600 transition-colors duration-300 group"
                >
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-amber-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-amber-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {currentYear} Luxe Estate Properties. All rights reserved.</p>
              <p className="mt-1 text-xs text-gray-500">
                Crafted with excellence for luxury real estate
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-600/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </footer>
  );
}
