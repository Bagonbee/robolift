import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/514590198_2149813708821073_5531416528099146746_n.png" 
                alt="RoboLift Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">RoboLift</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Making robotics accessible to everyone. Join our global open-source community 
              connecting teams worldwide through VEX, FTC, FRC, and MATE ROV programs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/robo_lift/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/robolift" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="View our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://robolift.org" 
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="Visit our website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Our Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/outreach" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Community Impact</Link></li>
              <li><Link to="/sponsorship" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Support Us</Link></li>
              <li><Link to="/join" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">Global Community</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:beebagon@gmail.com" 
                  className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  beebagon@gmail.com
                </a>
              </div>
            </div>
            
            {/* Global Reach */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-200">Global Reach</h4>
              <div className="flex flex-wrap gap-1 text-lg">
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
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 RoboLift. All rights reserved. Built with passion for STEM education.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Open Source</span>
              <span>•</span>
              <span>Nonprofit</span>
              <span>•</span>
              <span>Global Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;