import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to join our robotics community or have questions about our programs? 
            Get in touch with us directly.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl text-center">
            <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Email Us
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            
            <a 
              href="mailto:beebagon@gmail.com"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6 mr-3" />
              beebagon@gmail.com
            </a>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Robotics Journey?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Join our community of innovators and builders in STEM education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programs"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Programs
              </a>
              <a
                href="/join"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}