import React from 'react';
import { Users, Heart, Lightbulb, Award, Calendar, MapPin, Target, Star } from 'lucide-react';

const Outreach: React.FC = () => {
  const impactStats = [
    { value: 'In Development', label: 'Students Reached Annually', icon: Users },
    { value: 'In Development', label: 'Community Events', icon: Calendar },
    { value: 'In Development', label: 'Partner Organizations', icon: Target },
    { value: 'In Development', label: 'Volunteer Hours', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Outreach & Impact</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Spreading STEM inspiration and robotics education throughout our community
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-orange-800 font-semibold">
                🚧 Our outreach programs are currently in development. Contact us if you're interested in partnering!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-green-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Outreach Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe that STEM education and robotics should be accessible to everyone in our community. 
              Through our outreach programs, we inspire curiosity, build confidence, and create pathways 
              for students of all backgrounds to explore the exciting world of science and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspire Curiosity</h3>
              <p className="text-gray-600">
                Spark interest in STEM through hands-on demonstrations and interactive experiences 
                that show the fun and creativity in engineering.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Bridges</h3>
              <p className="text-gray-600">
                Connect with diverse communities to ensure STEM opportunities reach students 
                who might not otherwise have access to robotics education.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create Pathways</h3>
              <p className="text-gray-600">
                Provide clear next steps for students interested in joining our programs 
                or pursuing STEM education and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Interested in bringing robotics education to your organization or event? 
            We'd love to work with you to inspire the next generation of STEM leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:beebagon@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Request an Outreach Visit
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outreach;