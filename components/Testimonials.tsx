'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The attention to detail and personalized service exceeded every expectation. They found us a property that perfectly captures our vision of coastal elegance.",
      author: "Eleanor Whitmore",
      role: "Private Equity Partner",
      avatar: "https://i.pravatar.cc/150?img=47",
      location: "Malibu Estate"
    },
    {
      id: 2,
      quote: "Unparalleled market insight and discretion. Their network opened doors to exclusive opportunities we never knew existed. Truly exceptional.",
      author: "Marcus Chen",
      role: "Tech Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=12",
      location: "Aspen Residence"
    },
    {
      id: 3,
      quote: "From initial consultation to final walkthrough, the experience was seamless. They understand what luxury truly means and deliver beyond words.",
      author: "Victoria Ashford",
      role: "Art Collector",
      avatar: "https://i.pravatar.cc/150?img=32",
      location: "Manhattan Penthouse"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-12 rounded-sm shadow-lg border-l-4 border-amber-600 transition-all duration-500">
            <div className="flex items-start gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-2xl font-light text-slate-700 mb-8 leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].author}
                width={64}
                height={64}
                className="rounded-full ring-2 ring-amber-600/20"
              />
              <div>
                <h4 className="text-lg font-semibold text-slate-800">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-sm text-slate-600">{testimonials[activeIndex].role}</p>
                <p className="text-xs text-amber-600 mt-1">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-12 h-3 bg-amber-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-slate-400'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Small Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left p-6 rounded-sm border transition-all duration-300 ${
                index === activeIndex
                  ? 'border-amber-600 bg-amber-50/50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-slate-300 hover:shadow'
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                className="rounded-full mb-3"
              />
              <h5 className="font-semibold text-slate-800 text-sm">{testimonial.author}</h5>
              <p className="text-xs text-slate-600">{testimonial.role}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
