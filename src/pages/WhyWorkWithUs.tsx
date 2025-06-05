
import React from 'react';
import { Award, Users, Globe, Shield, TrendingUp, Clock, CheckCircle, Star } from 'lucide-react';
import Layout from '../components/Layout';

const WhyWorkWithUs = () => {
  const strengths = [
    {
      icon: Award,
      title: 'Proven Excellence in Government Sector',
      description: 'Extensive experience delivering complex technology solutions specifically for government and public sector organizations.',
      metrics: ['50+ government projects', 'Zero security incidents', '99.9% uptime average'],
      detail: 'AMSE has been delivering mission-critical technology solutions for government agencies, with a focus on security, compliance, and scalability.'
    },
    {
      icon: Users,
      title: 'Expert Engineering Team',
      description: 'Access to certified engineers and specialists with government sector experience and security clearances.',
      metrics: ['Security clearances available', 'Government compliance experts', '24/7 support coverage'],
      detail: 'Our team includes AWS/Azure certified architects, security specialists, and full-stack developers who understand government requirements and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Scalable Platform Experience',
      description: 'Built systems that serve millions of users with enterprise-grade reliability and government-level security.',
      metrics: ['1M+ end users served', 'Enterprise-scale systems', '$1B+ in transactions processed'],
      detail: 'We\'ve built platforms that handle massive scale, from educational systems to complex government operations serving hundreds of thousands of users daily.'
    },
    {
      icon: Shield,
      title: 'Government-Grade Security',
      description: 'Comprehensive security practices with compliance expertise across FISMA, FedRAMP, HIPAA, and other government standards.',
      metrics: ['Zero security incidents', 'SOC 2 Type II certified', 'Multi-level security clearances'],
      detail: 'Our security-first approach includes regular penetration testing, compliance audits, and adherence to NIST cybersecurity frameworks and federal security requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Scalability',
      description: 'Built systems that scale from thousands to millions of users, with architecture designed for government-scale operations.',
      metrics: ['1M+ concurrent users', '99.99% availability', 'Auto-scaling infrastructure'],
      detail: 'Our platforms handle massive scale, serving millions of users with government-grade reliability and performance requirements.'
    },
    {
      icon: Clock,
      title: 'Agile Delivery Excellence',
      description: 'Proven agile methodology with consistent on-time delivery and transparent project management tailored for government procurement cycles.',
      metrics: ['95% on-time delivery', '2-week sprint cycles', 'Real-time reporting'],
      detail: 'Our delivery methodology is specifically adapted for government timelines and requirements, with comprehensive documentation and regular stakeholder communication.'
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

  const clientLogos = [
    'Federal Agency',
    'State Government',
    'Educational Institution',
    'Healthcare System',
    'Defense Contractor',
    'Research Organization',
    'Public University',
    'Municipal Government'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Government Agencies Choose AMSE
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proven excellence in delivering government-grade technology solutions 
              with unmatched reliability and security
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Competitive Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six key strengths that make ASME the trusted choice for government technology initiatives
            </p>
          </div>

          <div className="space-y-16">
            {strengths.map((strength, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-lg mr-6">
                      <strength.icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{strength.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{strength.description}</p>
                  <p className="text-gray-700">{strength.detail}</p>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-blue-50 rounded-xl p-8">
                    <h4 className="font-bold text-blue-900 mb-6">Key Metrics:</h4>
                    <div className="space-y-4">
                      {strength.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="text-blue-600 mr-3" size={20} />
                          <span className="text-blue-800 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by World-Class Organizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our parent company Arbisoft has delivered solutions for these renowned institutions and enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <span className="text-lg font-semibold text-gray-700">{client}</span>
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
              Arbisoft's excellence is recognized by leading industry platforms and review sites
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

      {/* Delivery Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Government-Adapted Delivery Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology specifically tailored for government procurement cycles and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements & Compliance Analysis',
                description: 'Comprehensive review of technical, security, and regulatory requirements with compliance mapping'
              },
              {
                step: '02',
                title: 'Government-Approved Architecture',
                description: 'Security-first design with FedRAMP/FISMA compliance and scalability for government operations'
              },
              {
                step: '03',
                title: 'Agile Development with Transparency',
                description: '2-week sprints with regular demos, documentation, and stakeholder communication'
              },
              {
                step: '04',
                title: 'Deployment & Long-term Support',
                description: 'Secure deployment with ongoing maintenance, security updates, and performance optimization'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the ASME Advantage?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven expertise and government-grade capabilities can accelerate your technology initiatives
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default WhyWorkWithUs;
