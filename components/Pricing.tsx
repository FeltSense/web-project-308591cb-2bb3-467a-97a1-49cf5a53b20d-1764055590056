'use client';

import { Check, Sparkles, Crown, Shield } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Limited Time Pre-Order
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Exclusive Founding Member Access
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our elite community of luxury real estate professionals and gain lifetime access to premium features
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Premium Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Crown className="w-4 h-4" />
                FOUNDING MEMBER
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-8 py-12 text-center">
                <h3 className="text-2xl font-bold mb-2">Lifetime Premium Access</h3>
                <p className="text-gray-300 mb-6">One-time payment, unlimited value</p>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-400 line-through text-2xl">$299</span>
                </div>
                <p className="text-amber-400 font-semibold mt-2">Save 90% - Pre-Order Only</p>
              </div>

              {/* Features */}
              <div className="px-8 py-10">
                <div className="space-y-4 mb-8">
                  {[
                    'Unlimited property listings',
                    'Advanced analytics dashboard',
                    'Priority customer support',
                    'Exclusive market insights',
                    'AI-powered property matching',
                    'White-glove concierge service',
                    'Private networking events',
                    'Lifetime platform updates'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="bg-amber-100 rounded-full p-1 group-hover:bg-amber-200 transition-colors">
                        <Check className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stripe Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Pre-Order Now - $29
                </button>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <span>•</span>
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-3">
              <span className="font-bold text-slate-800">247 founding members</span> have already joined
            </p>
            <div className="flex justify-center -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-300 to-slate-400"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-600 flex items-center justify-center text-white text-xs font-bold">
                +242
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Highlights */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
              <div className="font-semibold text-slate-800 mb-1">Lifetime Access</div>
              <div className="text-sm text-gray-600">No recurring fees ever</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="font-semibold text-slate-800 mb-1">Premium Support</div>
              <div className="text-sm text-gray-600">Always here to help</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">30</div>
              <div className="font-semibold text-slate-800 mb-1">Day Guarantee</div>
              <div className="text-sm text-gray-600">Risk-free investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>);
}
