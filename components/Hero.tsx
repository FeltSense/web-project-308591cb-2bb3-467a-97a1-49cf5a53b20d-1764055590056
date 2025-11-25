'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [searchType, setSearchType] = useState('buy')

  const propertyTypes = ['House', 'Apartment', 'Villa', 'Penthouse', 'Estate']
  const priceRanges = ['$500k - $1M', '$1M - $2M', '$2M - $5M', '$5M+']

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Luxury property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-amber-600/20 border border-amber-600/50 rounded-full text-amber-400 text-sm font-medium backdrop-blur-sm">
                Premium Properties Worldwide
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover Your
              <span className="block text-amber-600 mt-2">Dream Estate</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Exclusive access to the world's most prestigious properties. 
              Experience unparalleled luxury and sophistication in every detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="border-l-2 border-amber-600 pl-4">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400 mt-1">Premium Listings</div>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <div className="text-3xl font-bold text-white">$2.5B+</div>
                <div className="text-sm text-gray-400 mt-1">Portfolio Value</div>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-600/50"
              >
                Explore Properties
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <div className="text-center pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-slate-800">Find Your Perfect Property</h2>
              <p className="text-gray-600 mt-2">Tailored search for discerning clients</p>
            </div>

            {/* Buy/Rent Toggle */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setSearchType('buy')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  searchType === 'buy'
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  searchType === 'rent'
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all duration-300 bg-white">
                    {propertyTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Price Range
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all duration-300 bg-white">
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl mt-2">
                Search Properties
              </button>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Waterfront', 'Penthouse', 'Golf Course', 'Beach Villa'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
