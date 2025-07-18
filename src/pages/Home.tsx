import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Code, Rocket, Heart, Star, Zap, Target, Award } from 'lucide-react';

const Home: React.FC = () => {
  const programs = [
    {
      name: 'VEX Robotics',
      description: 'Middle & High School competitive robotics with metal construction systems',
      age: 'Ages 11-18',
      slug: 'vex-robotics',
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      participants: '50+'
    },
    {
      name: 'FIRST Tech Challenge',
      description: 'High school robotics combining engineering, programming, and teamwork',
      age: 'Ages 12-18',
      slug: 'ftc',
      icon: Code,
      color: 'from-blue-500 to-indigo-500',
      participants: '40+'
    },
    {
      name: 'FIRST Robotics Competition',
      description: 'The ultimate high school robotics experience with industry mentorship',
      age: 'Ages 14-18',
      slug: 'frc',
      icon: Rocket,
      color: 'from-purple-500 to-violet-500',
      participants: '30+'
    },
    {
      name: 'MATE ROV',
      description: 'Underwater robotics challenging students to explore marine environments',
      age: 'Ages 13-18',
      slug: 'mate-rov',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
      participants: '25+'
    }
  ];

  const stats = [
    { label: 'Global Members', value: '150+', icon: Users },
    { label: 'Countries', value: '10+', icon: Globe },
    { label: 'Open Projects', value: '25+', icon: Code },
    { label: 'Community Events', value: '50+', icon: Heart }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Open Source Community',
      description: 'Connect with robotics teams across 10+ countries in our international network of innovators'
    },
    {
      icon: Code,
      title: 'Free & Open Resources',
      description: 'All our code, documentation, and educational materials are freely available to everyone'
    },
    {
      icon: Users,
      title: 'Inclusive STEM Access',
      description: 'No financial barriers - our nonprofit ensures every student can participate in robotics'
    },
    {
      icon: Rocket,
      title: 'Innovation-First Approach',
      description: 'Cutting-edge robotics programs preparing students for tomorrow\'s technological challenges'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        
        {/* Glassmorphism Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/514590198_2149813708821073_5531416528099146746_n.png" 
              alt="RoboLift Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
            />
          </div>

          {/* Main Heading - Immediate Visibility */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Making Robotics
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Accessible
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our global open-source community connecting robotics teams worldwide through 
              VEX, FTC, FRC, and MATE ROV programs
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/join"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>

          {/* Global Reach Indicator */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by teams worldwide</p>
            <div className="flex justify-center items-center space-x-4 text-2xl">
              <span>🇻🇳</span>
              <span>🇺🇸</span>
              <span>🇹🇼</span>
              <span>🇸🇬</span>
              <span>🇩🇪</span>
              <span>🇬🇧</span>
              <span>🇹🇷</span>
              <span>🇵🇭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl shadow-lg mb-4 border border-gray-200/50 dark:border-gray-600/50">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source. Global. Accessible.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building the future of robotics education through open collaboration and inclusive access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Four Pathways to Innovation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From beginners to advanced competitors, we offer diverse pathways for students to explore robotics and STEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                to={`/programs/${program.slug}`}
                className="group bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className={`p-6 bg-gradient-to-r ${program.color} text-white`}>
                  <program.icon className="h-8 w-8 mb-4" />
                  <div className="text-sm font-semibold mb-2 opacity-90">{program.age}</div>
                  <h3 className="text-xl font-bold mb-2">
                    {program.name}
                  </h3>
                  <div className="text-sm opacity-90">{program.participants} participants</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-700/90 dark:to-purple-700/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission: Democratizing Robotics Education
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              We believe every student, regardless of background or financial situation, deserves access to 
              world-class robotics education. Through our open-source platform and global community, 
              we're breaking down barriers and building bridges to STEM careers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Free Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="opacity-90">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Open</div>
                <div className="opacity-90">Source Everything</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our global community of innovators, builders, and problem-solvers. 
              No experience necessary – just bring your curiosity and passion for learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our Community
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;