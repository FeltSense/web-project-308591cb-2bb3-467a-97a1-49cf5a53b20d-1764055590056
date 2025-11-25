'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '308591cb-2bb3-467a-97a1-49cf5a53b20d',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Begin Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our exclusive properties team. We're here to help you find your perfect luxury residence.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email Us</p>
                    <p className="font-semibold">luxury@estates.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Call Us</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Visit Us</p>
                    <p className="font-semibold">123 Luxury Avenue<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-slate-800 mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-slate-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-slate-800">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-slate-800">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-gray-200 p-8 md:p-10 rounded-2xl shadow-lg">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors duration-300 text-slate-800"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors duration-300 text-slate-800"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors duration-300 text-slate-800"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors duration-300 resize-none text-slate-800"
                      placeholder="Tell us about your ideal property..."
                    />
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-800">
                        Failed to send message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>);
}
