import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Download, Trophy, Play, BookOpen, MessageCircle, Users, Clock, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const VexRobotics: React.FC = () => {
  const quickLinks = [
    { title: 'Official VEX Website', url: 'https://www.vexrobotics.com/', icon: ExternalLink },
    { title: 'VEX Competition Rules', url: 'https://www.robotevents.com/', icon: FileText },
    { title: 'VEXcode Download', url: 'https://www.vexrobotics.com/vexcode', icon: Download },
    { title: 'Robot Events Portal', url: 'https://www.robotevents.com/', icon: Trophy },
    { title: 'VEX CAD Library', url: 'https://github.com/VEX-CAD', icon: ExternalLink },
    { title: 'VEX Discord Community', url: 'https://discord.com/invite/EpRsvKwXkS', icon: MessageCircle },
    { title: 'Unofficial VEX Discord', url: 'https://discord.gg/pM7mXHaU', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/programs"
            className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">VEX Robotics</h1>
                <p className="text-emerald-100 text-lg">Competition • Innovation • Excellence</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl">
              Explore comprehensive guides, tutorials, and media content for VEX Robotics Competition. 
              From beginner basics to advanced techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <CountdownTimer />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors group text-center"
              >
                <link.icon className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700" />
                <span className="font-medium text-gray-900 group-hover:text-emerald-900 text-sm leading-tight">{link.title}</span>
              </a>
            ))}
          </div>
          
          {/* Credits for Discord servers */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Discord communities: Official VEX Discord & Unofficial VEX Community Discord
            </p>
          </div>
        </div>
      </section>

      {/* Outreach & Impact Awards */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outreach & Impact Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to VEX World Championship through excellence, outreach, and online challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Excellence Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Excellence Award</h3>
                  <p className="text-emerald-600 font-semibold">Highest VEX Award</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                The Excellence Award is the highest award presented in VEX Robotics Competition and VEX IQ Challenge. 
                It considers a team's overall program, including community outreach, Gracious Professionalism, 
                and a strong engineering notebook.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Qualifies for VEX Worlds at state/regional championships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Recognizes overall program excellence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Emphasizes community impact and outreach</span>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.roboticseducation.org/documents/2024/08/vrc-judged-awards-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Excellence Award Guide
                </a>
              </div>
            </div>

            {/* Online Challenges */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Online Challenges</h3>
                  <p className="text-teal-600 font-semibold">Direct Path to Worlds</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                The REC Foundation's Online Challenges provide a significant pathway to VEX World Championship, 
                allowing students to showcase work in CAD, animation, essays, STEM research, marketing, and community involvement.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 mt-1"></div>
                  <div>
                    <a 
                      href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-600 hover:text-teal-800 underline"
                    >
                      Community Challenge (Google):
                    </a>
                    <span className="text-gray-700"> Highlights local community STEM outreach impact</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 mt-1"></div>
                  <div>
                    <a 
                      href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-600 hover:text-teal-800 underline"
                    >
                      Girl Powered STEM Spotlight:
                    </a>
                    <span className="text-gray-700"> Promotes diversity and inclusion in STEM</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 mt-1"></div>
                  <div>
                    <a 
                      href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-600 hover:text-teal-800 underline"
                    >
                      STEM Advocacy Challenge:
                    </a>
                    <span className="text-gray-700"> Encourages advocacy for STEM education</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 mt-1"></div>
                  <div>
                    <a 
                      href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-600 hover:text-teal-800 underline"
                    >
                      Workforce Readiness:
                    </a>
                    <span className="text-gray-700"> Focuses on preparing students for future careers</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 mt-1"></div>
                  <div>
                    <a 
                      href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-600 hover:text-teal-800 underline"
                    >
                      VEXcode VR Virtual Skills:
                    </a>
                    <span className="text-gray-700"> Online coding platform challenge</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.roboticseducation.org/vex-robotics-world-championship/online-challenges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Online Challenges
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white max-w-2xl mx-auto">
              <Trophy className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multiple Paths to Success</h3>
              <p className="text-emerald-100">
                VEX offers diverse qualification pathways beyond robot performance, emphasizing community impact, 
                technical skills, and educational outreach to create well-rounded STEM leaders.
              </p>
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
              Essential resources and tools for VEX Robotics development
            </p>
          </div>

          {/* Featured Excellence - 3818C Cooking */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Excellence: 3818C Cooking</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Showcasing outstanding VEX robotics excellence through innovative programming, comprehensive documentation, and competitive achievement
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 max-w-6xl mx-auto border border-orange-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Team Info */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">3818C Cooking</h4>
                      <p className="text-orange-600 font-semibold">Elite VEX Robotics Team</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    An exemplary VEX robotics team demonstrating excellence in programming innovation, 
                    open-source contributions, and competitive performance. Their comprehensive approach 
                    to robot development and community sharing serves as an inspiration for VEX teams worldwide.
                  </p>

                  {/* Awards Section */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-gray-700 text-sm">Multiple regional competition wins</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-gray-700 text-sm">Excellence Award recipient</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-gray-700 text-sm">Programming Skills champion</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-gray-700 text-sm">Open-source community contributor</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.robotevents.com/teams/V5RC/3818C"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      RobotEvents Profile
                    </a>
                    <a
                      href="https://www.instagram.com/3818C_Cookin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      @3818C_Cookin
                    </a>
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h5 className="text-lg font-bold text-gray-900 mb-4">Educational Resources & Code:</h5>
                  <div className="space-y-3">
                    <a
                      href="https://docs.google.com/presentation/d/1t3Zt0kql4VzhTOhT3EYIFZ-rL2-u_YqM1vlatJOPHrA/mobilepresent?slide=id.g4dfce81f19_0_45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold text-gray-900 group-hover:text-orange-600">VEX Controls & PID Programming</h6>
                          <p className="text-sm text-gray-600">Comprehensive introduction to VEX robot control systems</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/the2nake/foundry-high-stakes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold text-gray-900 group-hover:text-orange-600">High Stakes Exemplar Code</h6>
                          <p className="text-sm text-gray-600">Complete robot code for VEX High Stakes season</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/the2nake/vrc-over-under"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold text-gray-900 group-hover:text-orange-600">Over Under Exemplar Code</h6>
                          <p className="text-sm text-gray-600">Championship-level code for VEX Over Under season</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/the2nake/pros"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold text-gray-900 group-hover:text-orange-600">PROS Kernel</h6>
                          <p className="text-sm text-gray-600">Advanced PROS development kernel and utilities</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/the2nake/vexide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-4 border border-orange-200 hover:border-orange-300 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold text-gray-900 group-hover:text-orange-600">VEXide - Rust Runtime</h6>
                          <p className="text-sm text-gray-600">Open-source Rust runtime for VEX V5 robots</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PROS */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-200 hover:border-blue-300">
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🚀 Development Platform
                  </span>
                  <h3 className="text-2xl font-bold mb-2">PROS</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Professional C/C++ development environment for VEX V5 robotics
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Advanced development platform offering powerful tools, libraries, and debugging capabilities for competitive VEX robotics programming.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">C/C++ Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Advanced Debugging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Professional Libraries</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://pros.cs.purdue.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit PROS Website
                  </a>
                  
                  <a
                    href="https://www.youtube.com/watch?v=4DwnphVdJZY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Tutorial Video
                  </a>
                  
                  <a
                    href="https://www.vexforum.com/t/pros-tutorials/82909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guides
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Developed by</p>
                    <a 
                      href="https://purduesigbots.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      Purdue SIGBots
                    </a>
                    <p className="text-xs text-gray-500">Video credit: Tutorial creators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EZ-Template */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-emerald-200 hover:border-emerald-300">
              <div className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    📝 Code Template
                  </span>
                  <h3 className="text-2xl font-bold mb-2">EZ-Template</h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    Simplified PROS template for VEX robotics programming
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  A streamlined PROS template that simplifies robot programming with easy-to-use functions, autonomous routines, and driver control systems.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">PROS Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Beginner Friendly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Easy Setup</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://ez-robotics.github.io/EZ-Template/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Get EZ-Template
                  </a>
                  
                  <a
                    href="https://www.youtube.com/watch?v=k6LFC0L4t-U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Tutorial Video
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Created by</p>
                    <span className="text-emerald-600 font-semibold text-sm">EZ-Robotics Team</span>
                    <p className="text-xs text-gray-500">Video credit: Tutorial creators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Purdue SIGBots */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-yellow-200 hover:border-yellow-300 md:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🏆 Elite Organization
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Purdue SIGBots</h3>
                  <p className="text-yellow-100 text-sm leading-relaxed">
                    Elite VEX robotics organization at Purdue University
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  One of the most successful VEX robotics organizations, known for developing PROS and achieving excellence in VEX competitions worldwide.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">World Champions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">PROS Developers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Innovation Leaders</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://purduesigbots.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit SIGBots
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Organization</p>
                    <span className="text-yellow-600 font-semibold text-sm">Purdue University</span>
                    <p className="text-xs text-gray-500">Student-led robotics excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PID Guide Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Programming Guides</h3>
            <div className="max-w-2xl mx-auto">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-indigo-200 hover:border-indigo-300">
                <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                      🎯 Control Systems
                    </span>
                    <h3 className="text-2xl font-bold mb-2">PID Controller Guide</h3>
                    <p className="text-indigo-100 text-sm leading-relaxed">
                      Comprehensive guide to implementing PID controllers in VEX robotics
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Learn how to implement Proportional-Integral-Derivative (PID) controllers for precise robot movement, 
                    including theory, practical examples, and tuning techniques specifically for VEX robotics.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-sm">Control Theory Basics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-sm">Implementation Examples</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-sm">Tuning Techniques</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href="https://compendium.readthedocs.io/en/latest/robotcode/components/pid/pidcontroller2.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read PID Guide
                    </a>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">Resource by</p>
                      <span className="text-indigo-600 font-semibold text-sm">VEX Compendium</span>
                      <p className="text-xs text-gray-500">Community-driven documentation</p>
                    </div>
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
              Latest updates and content from our VEX robotics journey
            </p>
          </div>
          
          {/* Instagram Post */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/p/DLh0SJGz0JO/embed"
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
                <p className="text-gray-700 text-sm leading-relaxed">
                  Latest updates from our VEX robotics team! Follow us for more behind-the-scenes content, 
                  competition highlights, and robotics insights.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">#VEXRobotics</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#STEM</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">#Robotics</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">#Innovation</span>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <a
                  href="https://www.instagram.com/p/DLh0SJGz0JO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* More Content Coming */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">More Content Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                We're continuously adding new videos, photos, and documentation from our VEX robotics journey.
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your VEX Journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join our VEX Robotics program and access all these resources plus hands-on mentorship and competition opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join VEX Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VexRobotics;