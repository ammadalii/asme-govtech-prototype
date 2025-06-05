import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award, ChevronRight, Building, Code, Database, Star, Heart, GraduationCap, FileText, Brain, Cloud, Smartphone, Settings } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  const stats = [
    { label: 'Government Projects', value: '50+' },
    { label: 'Expert Engineers', value: '200+' },
    { label: 'Success Rate', value: '99%' },
    { label: 'Client Satisfaction', value: '100%' },
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

  const services = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud migration, infrastructure automation, and DevOps implementation for government agencies.'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end software development services tailored for government operations and enterprise systems.'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Transform your data into actionable insights with modern data engineering practices and analytics platforms.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes with government compliance and ethical considerations.'
    }
  ];

  const solutions = [
    {
      icon: GraduationCap,
      title: 'Learning Management Systems',
      description: 'Scalable educational platforms built on OpenEdX technology, serving millions of learners worldwide.'
    },
    {
      icon: Heart,
      title: 'Healthcare Information Systems',
      description: 'HIPAA-compliant healthcare platforms for patient management, telemedicine, and health data analytics.'
    },
    {
      icon: FileText,
      title: 'Document Management & Workflow',
      description: 'Enterprise document management and workflow automation systems for government processes.'
    },
    {
      icon: Shield,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions with multi-factor authentication for government security requirements.'
    }
  ];

  const caseStudies = [
    {
      client: 'Federal Agency',
      project: 'Digital Transformation Platform',
      description: 'Modernized legacy systems and implemented secure, scalable solutions for citizen services',
      impact: '500K+ citizens served',
      technology: 'Cloud-native, Microservices'
    },
    {
      client: 'Educational Institution',
      project: 'Learning Management System',
      description: 'Built comprehensive educational platform serving students and faculty nationwide',
      impact: '100K+ active users',
      technology: 'React, AWS, Python'
    },
    {
      client: 'Healthcare Organization',
      project: 'Patient Management System',
      description: 'Developed HIPAA-compliant platform for patient data management and telemedicine',
      impact: '50K+ patients',
      technology: 'Secure APIs, Database'
    }
  ];

  const recognitions = [
    {
      platform: 'Government Technology',
      achievement: 'Top Technology Partner',
      year: '2024'
    },
    {
      platform: 'Federal Times',
      achievement: 'Excellence in Government Solutions',
      year: '2024'
    },
    {
      platform: 'Public Sector Executive',
      achievement: 'Innovation Award',
      year: '2024'
    },
    {
      platform: 'GovTech Review',
      achievement: 'Trusted Partner Recognition',
      year: '2024'
    }
  ];

  const whyWorkWithUs = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Track record of delivering complex technology solutions for government agencies'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated engineers with government sector experience and security clearances'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Built systems that serve millions of users with enterprise-grade reliability'
    },
    {
      icon: Shield,
      title: 'Government-Grade Security',
      description: 'Comprehensive security practices with compliance across federal standards'
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
              AMSE is a technology firm helping U.S. government agencies 
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government-grade technology services backed by 18+ years of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/services" 
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              View All Services
              <ChevronRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven platforms and systems that scale for government operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <solution.icon className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/solutions" 
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center"
            >
              View All Solutions
              <ChevronRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations that demonstrate our capability to deliver at scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{study.client}</h3>
                  <h4 className="text-blue-600 font-semibold text-sm mb-3">{study.project}</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-xs">Impact:</span>
                    <span className="text-blue-700 font-semibold text-sm">{study.impact}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">Technology:</span>
                    <span className="text-gray-700 text-xs">{study.technology}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AMSE's excellence is recognized by leading industry platforms and government organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <Star className="text-yellow-500 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{recognition.platform}</h3>
                <p className="text-yellow-700 font-medium text-sm mb-1">{recognition.achievement}</p>
                <p className="text-gray-600 text-sm">{recognition.year}</p>
              </div>
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
