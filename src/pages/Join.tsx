import React, { useState } from 'react';
import { Check, Users, Clock, Star, ArrowRight, Calendar, MapPin, Mail, Instagram } from 'lucide-react';
import { LocalizedDate } from '../components/LocalizedContent';

const Join: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    grade: '',
    school: '',
    experience: '',
    interests: [],
    parentName: '',
    parentEmail: '',
    questions: ''
  });

  const programs = [
    {
      id: 'vex',
      name: 'VEX Robotics',
      ageRange: '8-18 years',
      timeCommitment: '6-8 hours/week',
      description: 'Perfect for beginners and experienced builders alike',
      benefits: [
        'Learn mechanical design and construction',
        'Programming with VEXcode',
        'Multiple competition opportunities',
        'Small team environment (2-5 students)'
      ]
    },
    {
      id: 'ftc',
      name: 'FIRST Tech Challenge',
      ageRange: '12-18 years',
      timeCommitment: '10-12 hours/week',
      description: 'Ideal for students interested in programming and engineering',
      benefits: [
        'Advanced Java programming',
        'CAD design and 3D modeling',
        'Business plan development',
        'Engineering notebook documentation'
      ]
    },
    {
      id: 'frc',
      name: 'FIRST Robotics Competition',
      ageRange: '14-18 years',
      timeCommitment: '15-20 hours/week',
      description: 'The ultimate high school robotics experience',
      benefits: [
        'Industry-level engineering challenges',
        'Professional mentor guidance',
        'Leadership development opportunities',
        'College and career preparation'
      ]
    },
    {
      id: 'mate-rov',
      name: 'MATE ROV',
      ageRange: '13-18 years',
      timeCommitment: '8-10 hours/week',
      description: 'Explore underwater robotics and marine science',
      benefits: [
        'Underwater engineering challenges',
        'Marine science integration',
        'Technical documentation skills',
        'Unique competition environment'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior robotics experience to join?',
      answer: 'Not at all! We welcome students of all experience levels. Our mentors and experienced team members will help you learn everything you need to know.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'Time commitment varies by program, ranging from 6-20 hours per week. We understand students have other commitments and work with you to find a balance.'
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'All programs are completely free! As a nonprofit organization, we ensure that financial barriers never prevent students from participating in STEM education.'
    },
    {
      question: 'When can I join?',
      answer: 'We accept new members throughout the year, though the best time to join is at the beginning of each season (typically August-September). Contact us anytime to discuss current opportunities.'
    },
    {
      question: 'What should I expect at my first meeting?',
      answer: 'Your first meeting will include a team tour, introduction to current projects, safety training, and pairing with a mentor. We\'ll make sure you feel welcome and know how to get started.'
    },
    {
      question: 'Can I participate in multiple programs?',
      answer: 'While possible, we generally recommend focusing on one program to ensure you can fully commit and get the most out of the experience. Talk to our mentors about what might work best for you.'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Open House & Team Tour',
      date: new Date('2025-02-08'),
      time: '2:00 PM - 4:00 PM',
      description: 'Visit our workshop, meet the teams, and see robots in action'
    },
    {
      title: 'New Member Orientation',
      date: new Date('2025-02-15'),
      time: '10:00 AM - 12:00 PM',
      description: 'Safety training, program overview, and team assignments'
    },
    {
      title: 'Parent Information Session',
      date: new Date('2025-02-22'),
      time: '7:00 PM - 8:30 PM',
      description: 'Learn about our programs, expectations, and how parents can support'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedProgram });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Robolift</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Start your journey in STEM and become part of our innovative robotics community
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Robolift?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of our award-winning robotics program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Learn programming, engineering, design, and problem-solving skills that will benefit you for life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teamwork</h3>
              <p className="text-gray-600">
                Collaborate with like-minded peers and learn the value of working together toward common goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competition</h3>
              <p className="text-gray-600">
                Experience the thrill of competition while learning gracious professionalism and sportsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future Ready</h3>
              <p className="text-gray-600">
                Prepare for STEM careers and college with hands-on experience and mentorship from professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600">
              Select the robotics program that best matches your interests and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'ring-4 ring-blue-500 shadow-xl'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedProgram === program.id
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedProgram === program.id && (
                      <Check className="h-4 w-4 text-white m-0.5" />
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{program.ageRange}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{program.timeCommitment}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {program.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Instructions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-xl text-gray-600">
              Follow these steps to submit your complete application
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {/* Application Steps */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit your completed application by following these steps:</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Fill out ALL required fields in the application form</h4>
                      <p className="text-gray-600">Complete every section of the application thoroughly and accurately.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Attach all supporting documentation as specified</h4>
                      <p className="text-gray-600">Include any required documents, transcripts, or additional materials.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Double-check your application for accuracy and completeness</h4>
                      <p className="text-gray-600">Review all information before submitting to ensure everything is correct.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Email the complete package to beebagon@gmail.com</h4>
                      <p className="text-gray-600">Send all materials in a single email submission.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Submission */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-green-800">Submit Your Application</h3>
                </div>
                <p className="text-green-700 mb-4">
                  Email your complete application package to:
                </p>
                <a
                  href="mailto:beebagon@gmail.com?subject=Robolift Team Application"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  beebagon@gmail.com
                </a>
              </div>

              {/* Important Notes */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-800 mb-4">Important Notes:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    You will receive an automatic confirmation email once your submission is received.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Incomplete applications will delay processing. Please ensure all materials are included in a single submission.
                  </li>
                </ul>
              </div>

              {/* Stay Updated */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-purple-800 mb-4">Stay Updated</h3>
                <p className="text-purple-700 mb-4">
                  For the latest updates and news, follow us on Instagram:
                </p>
                <a
                  href="https://www.instagram.com/robo_lift/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  @robo_lift
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about joining our team
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            We're here to help! Contact us with any questions about our programs or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:beebagon@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;