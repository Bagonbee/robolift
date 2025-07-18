import React from 'react';
import { Users, Target, Award, Heart, Lightbulb } from 'lucide-react';
import { LocalizedNumber } from '../components/LocalizedContent';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Gracious Professionalism',
      description: 'We compete with honor, respect our opponents, and celebrate achievements together.'
    },
    {
      icon: Users,
      title: 'Coopertition',
      description: 'Fierce on the field, friends off the field. We compete and cooperate simultaneously.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative problem-solving and thinking outside the box.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Every member contributes unique skills to our collective success.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'We use our skills and passion to make a positive difference in our community.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for continuous improvement in everything we do.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      event: 'Formation of TeamXDVEX',
      description: 'January 2024: Created TeamXDVEX Instagram page, which became the largest VEX meme page in Vietnam with over 1K followers, connecting teams nationwide'
    },
    {
      year: '2024',
      event: 'Page Deletion & Pivot',
      description: 'February 2024: Instagram page got deleted, leading to a strategic pivot toward building a more permanent platform'
    },
    {
      year: '2024',
      event: 'Website Development',
      description: 'March-June 2024: Intensive website development phase with guideline checks and platform architecture for the Robolift initiative'
    },
    {
      year: '2025',
      event: 'Global Network Vision',
      description: 'Establishing the foundation for connecting robotics teams worldwide through the Robolift platform'
    }
  ];

  const founder = {
    name: 'Hoàng Quân',
    role: 'Initiative Head & Founder',
    background: 'Site Creator, Lead Web Developer, Program Networker, VEX & FIRST Alumni',
    image: '/Okarun%27s_initial_hairstyle.webp',
    achievements: [
      'Founded Robolift global robotics initiative',
      'Created and maintains robolift.org platform',
      'Lead web developer for all digital infrastructure',
      'Program networker connecting teams worldwide',
      'VEX Robotics Competition alumni',
      'FIRST Robotics Competition alumni',
      'Passionate advocate for accessible STEM education'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Robolift</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering students through hands-on STEM education and competitive robotics since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To inspire and prepare the next generation of STEM leaders through engaging, hands-on robotics programs 
                that foster innovation, teamwork, and problem-solving skills while building character and community connections.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every student, regardless of background or prior experience, has the potential to become 
                a confident innovator and leader in science, technology, engineering, and mathematics.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the premier youth robotics organization globally, recognized for developing well-rounded 
                students who are not only technically skilled but also compassionate leaders committed to making a 
                positive impact in their communities and the world.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where our alumni are driving innovation in every field, from aerospace to healthcare, 
                always guided by the values of gracious professionalism and coopertition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from competition strategy to community outreach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From meme page to global robotics platform</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-700 rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-700 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Growing Global Network</h3>
              <p className="text-blue-800">
                Over 30+ teams worldwide already in discussion to join the Robolift platform, 
                expanding our reach across multiple countries and robotics programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Contributor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Contributor</h2>
            <p className="text-xl text-gray-600">
              Just an average kid who wants to help others
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-h-full">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <div className="text-xl text-blue-700 font-semibold mb-4">{founder.role}</div>
                  <p className="text-lg text-gray-600 mb-6">{founder.background}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Contributions:</h4>
                    <ul className="space-y-3">
                      {founder.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-blue-100">
              Measuring our success through student growth and global community engagement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                <LocalizedNumber number={150} />+
              </div>
              <div className="text-blue-100">Potential Members Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">In Development</div>
              <div className="text-blue-100">Competition Wins</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                <LocalizedNumber number={30} />+
              </div>
              <div className="text-blue-100">Teams in Discussion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">In Development</div>
              <div className="text-blue-100">Scholarships Earned</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;