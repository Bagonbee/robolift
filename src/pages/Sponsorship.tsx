import React, { useState } from 'react';
import { Users, Heart, Lightbulb, Award, Mail, Star, Trophy } from 'lucide-react';
import { LocalizedNumber, LocalizedCurrency } from '../components/LocalizedContent';

const Sponsorship: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    supportType: ''
  });

  const supportTypes = [
    {
      title: 'Volunteer Mentorship',
      description: 'Share your professional expertise by mentoring our students in engineering, programming, or business skills.',
      icon: Users,
      examples: ['Technical mentoring', 'Career guidance', 'Workshop instruction', 'Competition coaching']
    },
    {
      title: 'In-Kind Donations',
      description: 'Donate materials, tools, workspace, or services that directly support our robotics programs.',
      icon: Lightbulb,
      examples: ['Robot parts and materials', 'Tools and equipment', 'Workshop space', 'Transportation']
    },
    {
      title: 'Event Hosting',
      description: 'Host team demonstrations, provide competition venues, or sponsor community outreach events.',
      icon: Heart,
      examples: ['Venue hosting', 'Demo opportunities', 'Community events', 'Educational workshops']
    },
    {
      title: 'Professional Services',
      description: 'Provide professional services that help our organization operate more effectively.',
      icon: Award,
      examples: ['Legal services', 'Accounting support', 'Marketing assistance', 'Website development']
    }
  ];

  const impactMetrics = [
    { metric: 'Potential Members', value: 150, description: 'In discussion worldwide', type: 'number' as const },
    { metric: 'Countries Reached', value: 10, description: 'Vietnam, Taiwan, Singapore, Indonesia, Philippines, America, Turkey, UK, Germany & more', type: 'number' as const },
    { metric: 'Teams Interested', value: 'In Development', description: 'International network', type: 'text' as const },
    { metric: 'Global Impact', value: 'Continuous', description: 'Building tomorrow\'s innovators', type: 'text' as const }
  ];

  const reasons = [
    {
      title: 'Workforce Development',
      description: 'Support the next generation of engineers, programmers, and innovators who will drive economic growth.',
      icon: Users
    },
    {
      title: 'Community Impact',
      description: 'Demonstrate corporate responsibility while making a tangible difference in STEM education.',
      icon: Heart
    },
    {
      title: 'Student Mentorship',
      description: 'Provide meaningful volunteer opportunities that develop both students and mentors.',
      icon: Star
    },
    {
      title: 'Educational Excellence',
      description: 'Help us maintain high-quality programs that prepare students for STEM careers.',
      icon: Trophy
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      supportType: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Robolift</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Help us build tomorrow's innovators through volunteer support and community partnerships across the globe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support-options"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Ways to Help
              </a>
              <a
                href="#contact-form"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Support Robolift?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support creates lasting impact for students, communities, and the future of STEM education worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Impact</h2>
            <p className="text-xl text-gray-600">
              Your support directly contributes to these meaningful outcomes across multiple countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
                  {metric.type === 'number' ? (
                    <>
                      <LocalizedNumber number={metric.value as number} />
                      {metric.metric.includes('Countries') && '+'}
                      {metric.metric.includes('Members') && '+'}
                    </>
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Network</h2>
            <p className="text-xl text-gray-600 mb-8">
              Robolift teams and students span across multiple countries, creating a truly international STEM community
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇻🇳</div>
                <div className="text-sm font-semibold text-gray-900">Vietnam</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇹🇼</div>
                <div className="text-sm font-semibold text-gray-900">Taiwan</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇸🇬</div>
                <div className="text-sm font-semibold text-gray-900">Singapore</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇮🇩</div>
                <div className="text-sm font-semibold text-gray-900">Indonesia</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇵🇭</div>
                <div className="text-sm font-semibold text-gray-900">Philippines</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇺🇸</div>
                <div className="text-sm font-semibold text-gray-900">America</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇹🇷</div>
                <div className="text-sm font-semibold text-gray-900">Turkey</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇬🇧</div>
                <div className="text-sm font-semibold text-gray-900">United Kingdom</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🇩🇪</div>
                <div className="text-sm font-semibold text-gray-900">Germany</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-700">🌍</div>
                <div className="text-sm font-semibold text-gray-900">& More</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section id="support-options" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to Support Our Mission</h2>
            <p className="text-xl text-gray-600">
              There are many meaningful ways to help our students succeed in STEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nonprofit Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Nonprofit Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              As a nonprofit organization, Robolift is committed to making STEM education accessible to all students, 
              regardless of their financial background. We believe that every student deserves the opportunity to explore 
              science, technology, engineering, and mathematics through hands-on robotics experiences.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Programs for All Students</h3>
              <p className="text-lg text-gray-600 mb-6">
                All of our robotics programs are completely free to participants. We cover competition fees, 
                materials, travel expenses, and provide all necessary equipment so that financial barriers 
                never prevent a student from pursuing their passion for STEM.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">
                    <LocalizedCurrency amount={0} />
                  </div>
                  <div className="text-gray-600">Cost to Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">
                    <LocalizedNumber number={100} />%
                  </div>
                  <div className="text-gray-600">Scholarship Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About Supporting Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us directly to discuss how you can support our students and mission.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:beebagon@gmail.com"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email beebagon@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;