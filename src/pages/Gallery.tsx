import React from 'react';
import { Calendar, Users, Trophy, Star, Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const stats = [
    { icon: Trophy, label: 'Teams Interested', value: 'In Development' },
    { icon: Users, label: 'Potential Members', value: '150+' },
    { icon: Calendar, label: 'Events This Year', value: 'In Development' },
    { icon: Star, label: 'Countries Reached', value: '10+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Experience the excitement, innovation, and community spirit of Robolift
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty Gallery State */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on building our media collection! Check back soon for photos and videos 
              from our robotics competitions, team activities, and community outreach events.
            </p>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 max-w-md mx-auto mb-8">
              <p className="text-blue-800 mb-4">
                In the meantime, follow us on Instagram for the latest updates and behind-the-scenes content!
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
                Contact Us
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

export default Gallery;