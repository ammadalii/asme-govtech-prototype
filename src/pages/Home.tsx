
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award, ChevronRight, Building, Code, Database } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  const stats = [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Engineers', value: '900+' },
    { label: 'Countries', value: '5' },
    { label: 'Government-Grade Projects', value: '50+' },
  ];

  const overviewSections = [
    {
      title: 'Services',
      description: 'Comprehensive technology services from cloud solutions to AI implementation',
      icon: Code,
      link: '/services',
      color: 'bg-blue-500'
    },
    {
      title: 'Solutions',
      description: 'Proven platforms and systems that scale for government operations',
      icon: Database,
      link: '/solutions',
      color: 'bg-green-500'
    },
    {
      title: 'Industries',
      description: 'Specialized expertise across education, healthcare, and public sector',
      icon: Building,
      link: '/industries',
      color: 'bg-purple-500'
    }
  ];

  const whyWorkWithUs = [
    {
      icon: Award,
      title: '18+ Years of Experience',
      description: 'Proven track record via Arbisoft in delivering complex technology solutions'
    },
    {
      icon: Users,
      title: '900+ Engineers',
      description: 'Scalable engineering capacity across 5 countries with strong security focus'
    },
    {
      icon: Globe,
      title: 'Proven Track Record',
      description: 'Worked with World Bank, OpenEdX, edX, Kayak, Indeed, and government agencies'
    },
    {
      icon: Shield,
      title: 'Government-Grade Security',
      description: 'Public-sector-grade platforms with compliance and security at the core'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Trusted Technology Partner for 
              <span className="text-blue-200 block">Government Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              ASME is a technology firm co-founded by Arbisoft to help U.S. government agencies 
              transform operations, enhance service delivery, and build secure digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/why-work-with-us" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Why Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for government operations and public sector requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewSections.map((section, index) => (
              <Link 
                key={index}
                to={section.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className={`${section.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Learn More <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by Arbisoft's proven expertise and government-grade security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/why-work-with-us" 
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              Learn More About Our Experience
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how ASME can help your agency achieve its technology goals with proven, secure solutions.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
