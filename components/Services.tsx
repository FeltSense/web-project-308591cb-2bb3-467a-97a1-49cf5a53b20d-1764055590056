'use client';

import { Search, Map, Video, UserCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: 'Advanced Search Filters',
      description: 'Precision search with location, price range, property type, and amenities to find your perfect luxury home.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      features: ['Location-based', 'Price range', 'Custom filters']
    },
    {
      icon: Map,
      title: 'Interactive Maps',
      description: 'Explore neighborhoods with detailed maps showing schools, amenities, and local attractions.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
      features: ['Neighborhood insights', 'Transit access', 'Local amenities']
    },
    {
      icon: Video,
      title: 'Virtual Tours',
      description: 'Immersive 3D walkthroughs and virtual staging let you experience properties from anywhere.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      features: ['3D walkthroughs', 'Virtual staging', '360° views']
    },
    {
      icon: UserCircle,
      title: 'Expert Agents',
      description: 'Connect with experienced luxury real estate professionals dedicated to your success.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
      features: ['Verified agents', 'Direct contact', 'Portfolio access']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Premium Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sophisticated tools designed for discerning clients seeking exceptional properties
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-2 border-amber-600 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
