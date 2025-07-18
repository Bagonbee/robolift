import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Clock, Trophy, Calendar, MapPin, Star, Award, Target, ExternalLink } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const ProgramDetail: React.FC = () => {
  const { program } = useParams<{ program: string }>();

  const programData: Record<string, any> = {
    'vex': {
      name: 'VEX Robotics Competition',
      shortName: 'VEX',
      description: 'Elementary through high school competitive robotics using metal construction systems',
      ageRange: '8-18 years',
      teamSize: '2-5 students per team',
      season: 'Year-round competition',
      timeCommitment: '6-8 hours per week',
      meetingSchedule: 'Tuesday & Thursday, 4:00-7:00 PM',
      gameDescription: 'In the VEX Robotics Competition "Over Under," teams design and build robots to compete on a 12\'x12\' field. The primary objectives are to score "Triballs" (game objects) into designated goals, move Triballs into specific offensive zones on the field, and elevate robots to different tiers for bonus points at the end of the match. The game features a barrier that divides the field, adding strategic complexity as robots can drive both over and under various elements. This challenge truly tests a team\'s ability in robot design, programming for autonomous play, and strategic driver control during matches.',
      skills: [
        'Mechanical Engineering & Design',
        'Programming with VEXcode',
        'Problem-solving & Strategy',
        'Teamwork & Communication',
        'Engineering Documentation',
        'Competition Strategy'
      ],
      achievements: [
        'Teams interested in development'
      ],
      requirements: [
        'No prior experience required',
        'Commitment to attend practices regularly',
        'Willingness to learn and collaborate',
        'School enrollment (grades 3-12)'
      ],
      costs: 'Free to participate (scholarships cover all costs)',
      nextEvents: [
        { name: 'View All VEX Events', date: 'Ongoing', location: 'Various Locations', link: 'https://www.robotevents.com/' }
      ]
    },
    'ftc': {
      name: 'FIRST Tech Challenge',
      shortName: 'FTC',
      description: 'High school robotics combining engineering, programming, and business skills',
      ageRange: '12-18 years',
      teamSize: '10-15 students per team',
      season: 'September through April',
      timeCommitment: '10-12 hours per week',
      meetingSchedule: 'Monday, Wednesday, Friday 4:00-7:00 PM',
      gameDescription: 'Teams compete in "CENTERSTAGE" challenge, programming robots to navigate, manipulate game elements, and work in alliances.',
      skills: [
        'Java Programming with Android Studio',
        'CAD Design (Fusion 360/OnShape)',
        'Business Plan Development',
        'Engineering Notebook Documentation',
        'Strategic Thinking',
        'Public Speaking & Presentation'
      ],
      achievements: [
        'Teams interested in development'
      ],
      requirements: [
        'Grades 7-12 enrollment',
        'Commitment to full season participation',
        'Interest in programming or engineering',
        'Team collaboration skills'
      ],
      costs: 'Free to participate (scholarships cover all costs)',
      nextEvents: [
        { name: 'View All FTC Events', date: 'Ongoing', location: 'Various Locations', link: 'https://ftc-events.firstinspires.org/#allevents' }
      ]
    },
    'frc': {
      name: 'FIRST Robotics Competition',
      shortName: 'FRC',
      description: 'The ultimate high school robotics experience with industry mentorship',
      ageRange: '14-18 years',
      teamSize: '25-40 students',
      season: 'January through April (Build Season)',
      timeCommitment: '15-20 hours per week during season',
      meetingSchedule: 'Daily during build season, 4:00-8:00 PM',
      gameDescription: 'Teams have 6 weeks to design, build, and program 120-pound robots for high-intensity competition featuring strategic alliances.',
      skills: [
        'Advanced Programming (Java, Python, C++)',
        'Industrial Engineering & Manufacturing',
        'Project Management',
        'Marketing & Branding',
        'Business Operations',
        'Mentorship & Leadership'
      ],
      achievements: [
        'Teams interested in development'
      ],
      requirements: [
        'High school enrollment (grades 9-12)',
        'Commitment to intensive build season',
        'Leadership potential',
        'Diverse skill interests welcome'
      ],
      costs: 'Free to participate (scholarships cover all costs)',
      nextEvents: [
        { name: 'View All FRC Events', date: 'Ongoing', location: 'Various Locations', link: 'https://ftc-events.firstinspires.org/#allevents' }
      ]
    },
    'mate-rov': {
      name: 'MATE ROV Competition',
      shortName: 'MATE ROV',
      description: 'Underwater robotics challenging students to explore marine environments',
      ageRange: '13-18 years',
      teamSize: '4-6 students per team',
      season: 'October through June',
      timeCommitment: '8-10 hours per week',
      meetingSchedule: 'Saturdays 10:00 AM - 2:00 PM',
      gameDescription: 'Teams design and build underwater robots (ROVs) to complete missions inspired by real-world marine and underwater applications.',
      skills: [
        'Underwater Engineering',
        'Python Programming',
        'Marine Science & Research',
        'Technical Writing & Documentation',
        'Electrical Systems',
        'Fluid Dynamics'
      ],
      achievements: [
        'Teams interested in development'
      ],
      requirements: [
        'Grades 8-12 enrollment',
        'Interest in marine science or engineering',
        'Swimming ability recommended',
        'Technical documentation skills'
      ],
      costs: 'Free to participate (scholarships cover all costs)',
      nextEvents: [
        { name: 'View All MATE ROV Events', date: 'Ongoing', location: 'Various Locations', link: 'https://materovcompetition.org/events' }
      ]
    }
  };

  const currentProgram = programData[program || ''];

  if (!currentProgram) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-blue-700 hover:text-blue-800">Return to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/programs"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentProgram.name}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">{currentProgram.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Team Size</div>
                  <div className="font-semibold">{currentProgram.teamSize}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Age Range</div>
                  <div className="font-semibold">{currentProgram.ageRange}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Season</div>
                  <div className="font-semibold">{currentProgram.season}</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-orange-400" />
                <div>
                  <div className="text-sm text-blue-200">Commitment</div>
                  <div className="font-semibold">{currentProgram.timeCommitment}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {program === 'vex' ? 'This Season\'s Challenge: VEX Robotics Competition "Over Under"' : 'This Season\'s Challenge'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{currentProgram.gameDescription}</p>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Meeting Schedule</h3>
              <p className="text-blue-800">{currentProgram.meetingSchedule}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Learning */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills You'll Develop</h2>
              <div className="space-y-4">
                {currentProgram.skills.map((skill: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-700 rounded-full mr-4"></div>
                    <span className="text-lg text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Team Status</h2>
              <div className="space-y-4">
                {currentProgram.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <Trophy className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section - Contact message for all programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our {currentProgram.shortName} Teams</h2>
          
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">
              Contact us for further details about our teams and their current projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Team Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Competition Events</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {currentProgram.nextEvents.map((event: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                      <p className="text-gray-600">{event.date}</p>
                      <p className="text-gray-500 text-sm">{event.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 underline font-semibold"
                      >
                        {event.name}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Costs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements to Join</h2>
              <div className="space-y-4">
                {currentProgram.requirements.map((requirement: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <Target className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Investment</h2>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-lg font-semibold text-green-800">Program Fee</span>
                </div>
                <p className="text-2xl font-bold text-green-900 mb-2">{currentProgram.costs}</p>
                <p className="text-green-700 text-sm">
                  All students can participate regardless of financial situation. 
                  Our nonprofit organization ensures STEM education is accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join {currentProgram.shortName}?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step towards an incredible robotics journey. We welcome students of all experience levels!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Apply to Join {currentProgram.shortName}
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

export default ProgramDetail;