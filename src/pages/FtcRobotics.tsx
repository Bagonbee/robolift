import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Download, Trophy, Play, BookOpen, MessageCircle, Users, Clock, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const FtcRobotics: React.FC = () => {
  const quickLinks = [
    { title: 'FIRST Tech Challenge', url: 'https://www.firstinspires.org/robotics/ftc', icon: ExternalLink },
    { title: 'FTC Events Portal', url: 'https://ftc-events.firstinspires.org/', icon: Trophy },
    { title: 'Android Studio', url: 'https://developer.android.com/studio', icon: Download },
    { title: 'OnShape CAD', url: 'https://www.onshape.com/', icon: FileText },
    { title: 'FTC Discord', url: 'https://discord.gg/first-tech-challenge', icon: MessageCircle },
    { title: 'Game Manual', url: 'https://www.firstinspires.org/resource-library/ftc/game-and-season-info', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/programs"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">FIRST Tech Challenge</h1>
                <p className="text-blue-100 text-lg">Engineering • Programming • Innovation</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Comprehensive resources and guides for FIRST Tech Challenge robotics. 
              From Java programming to CAD design and competition strategy.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Team Size</div>
                  <div className="font-semibold">10-15 students</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Age Range</div>
                  <div className="font-semibold">12-18 years</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Season</div>
                  <div className="font-semibold">September - April</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Commitment</div>
                  <div className="font-semibold">10-12 hours/week</div>
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
                className="flex flex-col items-center space-y-2 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group text-center"
              >
                <link.icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                <span className="font-medium text-gray-900 group-hover:text-blue-900 text-sm leading-tight">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach & Impact Awards */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outreach & Impact Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FTC emphasizes holistic excellence through robot performance, design innovation, and meaningful community impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inspire Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Inspire Award</h3>
                <p className="text-blue-600 font-semibold">Most Prestigious FTC Award</p>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Given to the team that best embodies the "challenge" of FTC, recognizing excellence in robot design, 
                programming, Gracious Professionalism, and significant community outreach.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Qualifies for FIRST Championship</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Holistic program evaluation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Community outreach emphasis</span>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.firstinspires.org/resource-library/ftc/awards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Inspire Award Guide
                </a>
              </div>
            </div>

            {/* Connect Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Connect Award</h3>
                <p className="text-indigo-600 font-semibold">Engineering Community</p>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Granted to the team that most effectively connects with their local engineering community 
                and actively shares their experiences and the mission of FIRST.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Engineering partnerships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Community engagement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">FIRST mission sharing</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.firstinspires.org/resource-library/ftc/awards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Connect Award Guide
                </a>
              </div>
            </div>

            {/* Motivate Award */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Motivate Award</h3>
                <p className="text-purple-600 font-semibold">Gracious Professionalism</p>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Celebrates the team that exemplifies the essence of FTC through Gracious Professionalism, 
                teamwork, and inspiring others to embrace STEM.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Gracious Professionalism</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Teamwork excellence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">STEM inspiration</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.firstinspires.org/resource-library/ftc/awards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Motivate Award Guide
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white max-w-2xl mx-auto">
              <Trophy className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Engineering Notebook & Portfolio</h3>
              <p className="text-blue-100">
                FTC emphasizes comprehensive documentation through Engineering Notebooks and judging interviews, 
                allowing teams to showcase their outreach efforts and technical journey throughout the season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Excellence - FTC Teams */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Excellence: FTC Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing outstanding achievement in FIRST Tech Challenge robotics and technical documentation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team 3188 Squiggleplatbang */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                3188 Squiggleplatbang
              </h3>
              <p className="text-gray-600 text-center mb-6 text-lg">
                An exemplary FTC team demonstrating excellence in programming, competition performance, 
                and comprehensive team documentation. Their innovative approach to robot design and 
                strategic gameplay serves as an inspiration for FTC teams worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a
                  href="https://www.ssbrobotics.org/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Team Website
                </a>
                <a
                  href="https://www.instagram.com/3188squigglesplatbang/?igsh=d2Nkbmt6czFjanRi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  @3188squigglesplatbang
                </a>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key Resources:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://github.com/3188SSB/3188-FTC-Into-The-Deep-Code/blob/main/main/java/org/firstinspires/ftc/teamcode/Teleop_Thang.java"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        Into The Deep Robot Code (GitHub)
                      </a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://ftc-events.firstinspires.org/team/3188"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        FTC Events Profile
                      </a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://ftcscout.org/teams/3188"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        FTC Scout Statistics
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>FTC Competition Excellence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Advanced Programming Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Comprehensive Team Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Open-Source Code Sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team 25209 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Team 25209
              </h3>
              <p className="text-gray-600 text-center mb-6 text-lg">
                An outstanding FTC team showcasing excellence in CAD design, technical documentation, 
                and engineering innovation. Their comprehensive approach to robot development and 
                detailed design process exemplifies FTC engineering standards.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key Resources:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://cad.onshape.com/documents/d66e428ea5bdfea5f78e1178/w/ea2c9af518345c418296094f/e/b2b467b7be8b145c6aa6992e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        OnShape CAD Design Portfolio
                      </a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://drive.google.com/file/d/1IEZ486fj18O0zMkkpikW71lnG0WWtNbk/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        Technical Documentation (Google Drive)
                      </a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://ftcscout.org/teams/25209"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        FTC Scout Statistics
                      </a>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <a 
                        href="https://ftc-events.firstinspires.org/team/25209"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        FTC Events Profile
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Professional CAD Design Excellence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Comprehensive Technical Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Engineering Process Innovation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Design Portfolio Sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Excellence - FTC Talon Team 3796 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Excellence: FTC Talon Team 3796</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing outstanding achievement in FIRST Tech Challenge robotics and creative team branding
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-green-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              FTC Talon Team 3796
            </h3>
            <p className="text-gray-600 text-center mb-6 text-lg">
              An exemplary FTC team demonstrating excellence in programming innovation, 
              creative team branding, and competitive performance. Their comprehensive approach 
              to robot development and engaging team presentation serves as an inspiration 
              for FTC teams worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Contributions & Resources:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://github.com/ftcpowerhawks1/3796-IntoTheDepression"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Into The Depression Robot Code (GitHub)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://www.canva.com/design/DAGSX016QSY/eDJkEMf1i9EMGzTCXnU5xw/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Team Branding & Design Portfolio (Canva)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://ftc-events.firstinspires.org/team/3796"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      FTC Events Profile
                    </a>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <a 
                      href="https://ftcscout.org/teams/3796"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      FTC Scout Statistics
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-inner">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Notable Achievements:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>FTC Competition Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Creative Programming Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Outstanding Team Branding & Presentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Open-Source Code Sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Innovative Design Solutions</span>
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
              Essential resources and tools for FTC development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Android Studio */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-green-200 hover:border-green-300">
              <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    💻 Development IDE
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Android Studio</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Official IDE for FTC robot programming with Java
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The official integrated development environment for FTC programming, featuring advanced debugging, code completion, and FTC SDK integration.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Java Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">FTC SDK Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Advanced Debugging</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://developer.android.com/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Android Studio
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Developed by</p>
                    <span className="text-green-600 font-semibold text-sm">Google</span>
                    <p className="text-xs text-gray-500">Official Android development platform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OnShape CAD */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-200 hover:border-blue-300">
              <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🎨 CAD Platform
                  </span>
                  <h3 className="text-2xl font-bold mb-2">OnShape CAD</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Cloud-based CAD platform for robot design and modeling
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Professional cloud-based CAD software used by FTC teams worldwide for robot design, part modeling, and assembly planning.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Cloud-Based Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Team Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Professional Tools</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://www.onshape.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access OnShape
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Platform by</p>
                    <span className="text-blue-600 font-semibold text-sm">PTC OnShape</span>
                    <p className="text-xs text-gray-500">Professional CAD software</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FTC SDK */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-orange-200 hover:border-orange-300 md:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    🛠️ Development Kit
                  </span>
                  <h3 className="text-2xl font-bold mb-2">FTC SDK</h3>
                  <p className="text-orange-100 text-sm leading-relaxed">
                    Official software development kit for FTC robots
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The official FTC Robot Controller SDK providing all necessary libraries, examples, and documentation for FTC robot programming.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Official Libraries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Code Examples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">Documentation</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://github.com/FIRST-Tech-Challenge/FtcRobotController"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Get FTC SDK
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Maintained by</p>
                    <span className="text-orange-600 font-semibold text-sm">FIRST</span>
                    <p className="text-xs text-gray-500">Official development resources</p>
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
              Latest updates and content from our FTC robotics journey
            </p>
          </div>
          
          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Post 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/p/DL7rnrPzXLX/embed"
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
                  FTC robotics updates and team progress from our engineering journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#FTC</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">#FIRST</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">#Robotics</span>
                </div>
                <a
                  href="https://www.instagram.com/p/DL7rnrPzXLX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/p/DLojzqjxHtS/embed"
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
                  Behind-the-scenes look at our FTC team development and engineering process.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#FTC</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">#Engineering</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">#TeamWork</span>
                </div>
                <a
                  href="https://www.instagram.com/p/DLojzqjxHtS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/p/DLjvke-RyCG/embed"
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
                  Latest achievements and milestones from our FTC robotics program.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">#Achievement</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#STEM</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">#Innovation</span>
                </div>
                <a
                  href="https://www.instagram.com/p/DLjvke-RyCG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Follow Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Our Journey!</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest FTC robotics content and achievements.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your FTC Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our FTC program and access all these resources plus hands-on mentorship and competition opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join FTC Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FtcRobotics;