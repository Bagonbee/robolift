import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Award, Users, Trophy, Calendar, Clock, Target, Waves, Fish, Anchor } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const MateRovRobotics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Waves className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MATE ROV Competition
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Dive into underwater robotics and explore marine environments through hands-on engineering challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Join MATE ROV Team
              </Link>
              <a
                href="https://materovcompetition.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
              >
                Official MATE Website
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownTimer competition="mate" />
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Underwater Robotics Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MATE ROV challenges students to design, build, and operate remotely operated vehicles (ROVs) 
              to complete real-world underwater missions inspired by current marine research and industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 text-center">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marine Science Focus</h3>
              <p className="text-gray-600">
                Missions based on real oceanographic research, marine archaeology, and underwater exploration challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Applications</h3>
              <p className="text-gray-600">
                Tasks simulate actual underwater operations like pipeline inspection, coral reef monitoring, and deep-sea exploration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Anchor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600">
                Comprehensive engineering documentation, technical presentations, and innovative ROV design solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team - Murex Robotics */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Excellence: Murex Robotics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing outstanding achievement in underwater robotics and technical documentation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-teal-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Murex Robotics Team
            </h3>
            <p className="text-gray-600 text-center mb-6 text-lg">
              An exemplary MATE ROV team demonstrating excellence in underwater robotics, 
              technical documentation, and innovative engineering solutions. Their comprehensive 
              approach to ROV design and marine science applications serves as an inspiration 
              for aspiring underwater robotics teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mrx.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Visit mrx.ee
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://github.com/murexrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                GitHub Repository
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Contributions & Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://mrx.ee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Comprehensive Team Website & Documentation
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://github.com/murexrobotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Open-Source ROV Code & Technical Resources
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Advanced Underwater Engineering Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Professional Technical Documentation Standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Marine Science Integration & Research</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>MATE ROV Competition Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Technical Report & Presentation Awards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Innovative ROV Design Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Community Outreach & Education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Open-Source Community Contributor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach & Impact Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pathways to World Championship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple qualification routes emphasizing technical excellence and marine science impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Regional Qualification</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Primary pathway through participating regional events. Teams must demonstrate ROV performance, 
                technical documentation, and engineering presentation excellence.
              </p>
              <a
                href="https://materovcompetition.org/competition-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center"
              >
                Competition Guidelines
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Technical Excellence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Recognition for outstanding engineering communication, technical reports, and innovative 
                ROV design solutions that address real-world marine challenges.
              </p>
              <a
                href="https://materovcompetition.org/technical-reports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center"
              >
                Technical Reports Guide
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Remote Video Qualification</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Alternative online submission pathway allowing teams to qualify through comprehensive 
                video documentation of their ROV capabilities and mission performance.
              </p>
              <a
                href="https://materovcompetition.org/events-qualification"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                Events & Qualification
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              MATE ROV in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our underwater robotics journey and latest achievements
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4">
              <h3 className="text-white font-semibold text-lg">Latest from @robo_lift</h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
                <Waves className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">
                Exciting updates from our MATE ROV program! Our team is making waves in underwater robotics 
                with innovative ROV designs and marine science applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">#MATEROV</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">#UnderwaterRobotics</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">#MarineScience</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">#ROV</span>
              </div>
              <a
                href="https://www.instagram.com/p/DLpe0tUTXyN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                View on Instagram
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* More Content Coming */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 max-w-lg mx-auto mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">More Content Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                We're continuously adding new videos, photos, and documentation from our MATE ROV journey.
              </p>
              <a
                href="https://www.instagram.com/robo_lift/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span className="mr-2">📱</span>
                Follow @robo_lift for Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your MATE ROV Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join our MATE ROV program and access all these resources plus hands-on mentorship and competition opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join MATE ROV Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MateRovRobotics;