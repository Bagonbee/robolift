import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Trophy, Clock, MapPin } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Programs: React.FC = () => {
  const programs = [
    {
      name: 'VEX Robotics',
      slug: 'vex',
      description: 'Elementary through high school competitive robotics using metal construction systems',
      longDescription: 'VEX Robotics Competition is a robotics program for elementary through high school students. Teams design, build, and program robots to compete in a game-based engineering challenge.',
      ageRange: '8-18 years',
      teamSize: '2-5 students',
      season: 'Year-round',
      highlights: [
        'Multiple competitive teams',
        'Mechanical design focus',
        'Programming with VEXcode',
        'Year-round competition opportunities'
      ],
      skills: ['Mechanical Design', 'Programming', 'Problem Solving', 'Teamwork'],
      commitment: '6-8 hours per week',
      nextMeeting: 'Every Tuesday & Thursday, 4:00 PM'
    },
    {
      name: 'FIRST Tech Challenge',
      slug: 'ftc',
      description: 'High school robotics combining engineering, programming, and business skills',
      longDescription: 'FIRST Tech Challenge students learn to think like engineers by designing, building, programming, and operating robots to compete in a head-to-head challenge in an alliance format.',
      ageRange: '12-18 years',
      teamSize: '10-15 students',
      season: 'September - April',
      highlights: [
        'Advanced programming and CAD design',
        'Business plan development',
        'Engineering notebook documentation',
        'Strategic alliance competitions'
      ],
      skills: ['Java Programming', 'CAD Design', 'Business Plan', 'Engineering Notebook'],
      commitment: '10-12 hours per week',
      nextMeeting: 'Monday, Wednesday, Friday 4:00 PM'
    },
    {
      name: 'FIRST Robotics Competition',
      slug: 'frc',
      description: 'The ultimate high school robotics experience with industry mentorship',
      longDescription: 'FIRST Robotics Competition combines the excitement of sport with the rigors of science and technology. Under strict rules and limited time, teams must raise funds, design team brands, and build industrial-size robots.',
      ageRange: '14-18 years',
      teamSize: '25-40 students',
      season: 'January - April',
      highlights: [
        'Industrial-level engineering',
        'Professional mentorship',
        'Intensive build season experience',
        'Large-scale robot construction'
      ],
      skills: ['Advanced Programming', 'Industrial Design', 'Project Management', 'Marketing'],
      commitment: '15-20 hours per week during season',
      nextMeeting: 'Daily during build season, 4:00-8:00 PM'
    },
    {
      name: 'MATE ROV',
      slug: 'mate-rov',
      description: 'Underwater robotics challenging students to explore marine environments',
      longDescription: 'MATE ROV competition challenges students to design and build underwater robots (ROVs) to tackle real-world problems related to underwater exploration and marine science.',
      ageRange: '13-18 years',
      teamSize: '4-6 students',
      season: 'October - June',
      highlights: [
        'Underwater engineering challenges',
        'Marine science integration',
        'Technical documentation focus',
        'Unique competition environment'
      ],
      skills: ['Underwater Engineering', 'Python Programming', 'Marine Science', 'Technical Writing'],
      commitment: '8-10 hours per week',
      nextMeeting: 'Saturdays 10:00 AM - 2:00 PM'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Robotics Programs</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Four distinct pathways for students to explore STEM through competitive robotics
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`rounded-xl p-8 shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800' :
                    index === 1 ? 'bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800' :
                    index === 2 ? 'bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900 dark:to-violet-800' :
                    'bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900 dark:to-red-800'
                  }`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-emerald-500 dark:bg-emerald-600' :
                        index === 1 ? 'bg-blue-500 dark:bg-blue-600' :
                        index === 2 ? 'bg-purple-500 dark:bg-purple-600' :
                        'bg-orange-500 dark:bg-orange-600'
                      }`}>
                        <div className={`w-12 h-12 rounded-lg ${
                          index === 0 ? 'bg-emerald-200 dark:bg-emerald-300' :
                          index === 1 ? 'bg-blue-200 dark:bg-blue-300' :
                          index === 2 ? 'bg-purple-200 dark:bg-purple-300' :
                          'bg-orange-200 dark:bg-orange-300'
                        }`}></div>
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        index === 0 ? 'text-emerald-900 dark:text-emerald-100' :
                        index === 1 ? 'text-blue-900 dark:text-blue-100' :
                        index === 2 ? 'text-purple-900 dark:text-purple-100' :
                        'text-orange-900 dark:text-orange-100'
                      }`}>{program.name}</h3>
                      <div className={`text-sm font-medium ${
                        index === 0 ? 'text-emerald-700 dark:text-emerald-300' :
                        index === 1 ? 'text-blue-700 dark:text-blue-300' :
                        index === 2 ? 'text-purple-700 dark:text-purple-300' :
                        'text-orange-700 dark:text-orange-300'
                      }`}>{program.ageRange}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {program.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {program.longDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2 text-blue-700" />
                        <span className="text-sm">{program.teamSize}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2 text-blue-700" />
                        <span className="text-sm">{program.ageRange}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Trophy className="h-5 w-5 mr-2 text-blue-700" />
                        <span className="text-sm">{program.season}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2 text-blue-700" />
                        <span className="text-sm">{program.commitment}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Skills Developed</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Highlights</h3>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/programs/${program.slug === 'vex' ? 'vex-robotics' : program.slug === 'mate-rov' ? 'mate-rov' : program.slug}`}
                      className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Learn More About {program.name}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Program
            </h2>
            <p className="text-xl text-gray-600">
              Compare our programs to find the best fit for your interests and experience level
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-center font-semibold">Age Range</th>
                  <th className="px-6 py-4 text-center font-semibold">Team Size</th>
                  <th className="px-6 py-4 text-center font-semibold">Season</th>
                  <th className="px-6 py-4 text-center font-semibold">Time Commitment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programs.map((program, index) => (
                  <tr key={program.slug} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{program.name}</div>
                      <div className="text-sm text-gray-600">{program.description}</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-900">{program.ageRange}</td>
                    <td className="px-6 py-4 text-center text-gray-900">{program.teamSize}</td>
                    <td className="px-6 py-4 text-center text-gray-900">{program.season}</td>
                    <td className="px-6 py-4 text-center text-gray-900">{program.commitment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join a Program?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you're a complete beginner or have some robotics experience, we have a program that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join Our Team
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;