import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Download, Trophy, Play, BookOpen, MessageCircle, Users, Clock, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const FrcRobotics: React.FC = () => {
  const quickLinks = [
    { title: 'FIRST Robotics', url: 'https://www.firstinspires.org/robotics/frc', icon: ExternalLink },
    { title: 'FRC Events', url: 'https://frc-events.firstinspires.org/', icon: Trophy },
    { title: 'WPILib Suite', url: 'https://wpilib.org/', icon: Download },
    { title: 'Chief Delphi', url: 'https://www.chiefdelphi.com/', icon: MessageCircle },
    { title: 'FRC Discord', url: 'https://discord.gg/frc', icon: MessageCircle },
    { title: 'Game Manual', url: 'https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/programs"
            className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-400 rounded-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">FIRST Robotics Competition</h1>
                <p className="text-purple-100 text-lg">Innovation • Excellence • Leadership</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl">
              The ultimate high school robotics experience with industry-level engineering challenges, 
              professional mentorship, and championship competition.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-purple-200">Team Size</div>
                  <div className="font-semibold">25-40 students</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-purple-200">Age Range</div>
                  <div className="font-semibold">14-18 years</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-purple-200">Season</div>
                  <div className="font-semibold">January - April</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-purple-200">Commitment</div>
                  <div className="font-semibold">15-20 hours/week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <CountdownTimer />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 bg-gray-50 hover:bg-purple-50 rounded-xl transition-colors group text-center"
              >
                <link.icon className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
                <span className="font-medium text-gray-900 group-hover:text-purple-900 text-sm leading-tight">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach & Impact Awards */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outreach & Impact Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FRC places strong emphasis on community impact and outreach, with prestigious awards providing direct paths to FIRST Championship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FIRST Impact Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FIRST Impact Award</h3>
                  <p className="text-purple-600 font-semibold">Most Prestigious FRC Award</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Formerly the Chairman's Award, this honors the team that best represents a model for others to emulate 
                and best embodies FIRST's purpose and goals. Recognizes significant measurable impact on participants 
                and community over a sustained period.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Qualifies for FIRST Championship</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Championship winners enter Hall of Fame</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Pre-qualified for future Championships</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-800 text-sm font-medium">
                  💡 Sustained community impact over multiple seasons, not just single build season achievements
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.firstinspires.org/resource-library/frc/awards-and-recognition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official FIRST Impact Award Guide
                </a>
              </div>
            </div>

            {/* Engineering Inspiration Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Engineering Inspiration</h3>
                  <p className="text-indigo-600 font-semibold">Engineering Advocacy</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Celebrates outstanding success in advancing respect and appreciation for engineering within 
                a team's school or organization and community. Also qualifies teams for FIRST Championship.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Qualifies for FIRST Championship</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Engineering advocacy focus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">School and community impact</span>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-indigo-800 text-sm font-medium">
                  🎓 Focuses on promoting engineering appreciation and STEM education in schools and communities
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.firstinspires.org/resource-library/frc/awards-and-recognition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Engineering Inspiration Award Guide
                </a>
              </div>
            </div>
          </div>

          {/* Dean's List */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-yellow-200 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dean's List Award</h3>
                <p className="text-yellow-600 font-semibold mb-4">Individual Student Recognition</p>
                <p className="text-gray-700 mb-6">
                  While an individual award for students rather than teams, being a Dean's List Finalist or Winner 
                  at the Championship level recognizes exceptional leadership and dedication to advancing STEM, 
                  often including substantial outreach efforts.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm font-medium">
                    🌟 Recognizes student leaders who demonstrate exceptional commitment to STEM outreach and community impact
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.firstinspires.org/resource-library/frc/awards-and-recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Official Dean's List Award Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 text-white max-w-2xl mx-auto">
              <Trophy className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Impact Award Essays & Videos</h3>
              <p className="text-purple-100">
                FRC teams submit comprehensive essays and videos documenting their community impact for judged awards, 
                showcasing sustained outreach efforts and measurable community benefits over multiple seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Excellence - FRC Team */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Excellence: FRC Team 6110</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing outstanding achievement in FIRST Robotics Competition engineering and design innovation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-purple-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              FRC Team 6110
            </h3>
            <p className="text-gray-600 text-center mb-6 text-lg">
              An exemplary FRC team demonstrating excellence in mechanical design, CAD modeling, 
              and engineering innovation. Their comprehensive approach to robot development and 
              professional-grade design work serves as an inspiration for FRC teams worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://www.instagram.com/frc6110/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Instagram @frc6110
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Contributions & Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://cad.onshape.com/documents/ed1224d6f13d01713c40709a/w/84f7ce944898053303749b6d/e/006cf9d539fc97ab414b0825"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Professional OnShape CAD Portfolio
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Advanced Mechanical Design Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Industry-Standard CAD Modeling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Engineering Documentation Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Design Process Innovation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>FRC Competition Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Engineering Design Awards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>CAD Design Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Professional Design Standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Community Design Resource Sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential resources and tools for FRC development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WPILib */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-purple-200 hover:border-purple-300">
              <div className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🛠️ Development Suite
                  </span>
                  <h3 className="text-2xl font-bold mb-2">WPILib Suite</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Official software suite for FRC robot programming
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The complete development environment for FRC robots, including VS Code, libraries, simulation tools, and deployment utilities.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Java/C++ Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Robot Simulation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Deployment Tools</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://wpilib.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download WPILib
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Developed by</p>
                    <span className="text-purple-600 font-semibold text-sm">WPI & FIRST</span>
                    <p className="text-xs text-gray-500">Official FRC development tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chief Delphi */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-orange-200 hover:border-orange-300">
              <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    💬 Community Forum
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Chief Delphi</h3>
                  <p className="text-orange-100 text-sm leading-relaxed">
                    Premier FRC community forum and knowledge base
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The largest and most active FRC community forum where teams share knowledge, strategies, and technical solutions.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Technical Discussions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Strategy Sharing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Expert Mentorship</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://www.chiefdelphi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Visit Chief Delphi
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Community Platform</p>
                    <span className="text-orange-600 font-semibold text-sm">FRC Community</span>
                    <p className="text-xs text-gray-500">Knowledge sharing hub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FRC Game Tools */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-green-200 hover:border-green-300 md:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🎮 Game Tools
                  </span>
                  <h3 className="text-2xl font-bold mb-2">FRC Game Tools</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Official competition software and field management
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Essential software package including Driver Station, Field Management System, and robot inspection tools for competition preparation.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Driver Station</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Field Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Robot Inspector</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://www.ni.com/en-us/support/downloads/drivers/download.frc-game-tools.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Game Tools
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Provided by</p>
                    <span className="text-green-600 font-semibold text-sm">National Instruments</span>
                    <p className="text-xs text-gray-500">Official competition software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Gallery</h2>
            <p className="text-xl text-gray-600">
              Latest updates and content from our FRC robotics journey
            </p>
          </div>
          
          {/* Instagram Post */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/p/DLzLsB3RISi/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="w-full h-full min-h-[400px]"
                  title="Instagram post from @robo_lift"
                ></iframe>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Latest updates from our FRC robotics team! Follow our journey in the ultimate 
                  high school robotics competition with industry-level engineering challenges.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">#FRC</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">#FIRST</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#Robotics</span>
                  <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-medium">#Engineering</span>
                </div>
                
                <a
                  href="https://www.instagram.com/p/DLzLsB3RISi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Follow Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Our Journey!</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest FRC robotics content and championship preparations.
              </p>
              <a
                href="https://www.instagram.com/robo_lift/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Follow @robo_lift
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your FRC Journey?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join our FRC program and access all these resources plus hands-on mentorship and competition opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join FRC Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrcRobotics;