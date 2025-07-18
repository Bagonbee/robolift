import React from 'react';
import { Calendar, Search, Mail, Instagram } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay up to date with the latest achievements, competitions, and activities from Robolift
            </p>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on bringing you the latest news and updates from our robotics teams. 
              Check back soon for competition results, team achievements, and exciting announcements!
            </p>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 max-w-md mx-auto mb-8">
              <p className="text-blue-800 mb-4">
                For the latest updates and daily content, follow us on Instagram!
              </p>
              <a
                href="https://www.instagram.com/robo_lift/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Follow @robo_lift
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us for Updates
              </a>
              <a
                href="/programs"
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default News;