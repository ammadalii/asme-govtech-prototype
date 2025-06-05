
import React from 'react';
import { GraduationCap, Heart, FileText, Users, Shield, BarChart3, Globe, Building } from 'lucide-react';
import Layout from '../components/Layout';

const Solutions = () => {
  const solutions = [
    {
      icon: GraduationCap,
      title: 'Learning Management Systems',
      description: 'Scalable educational platforms built on OpenEdX technology, serving millions of learners worldwide. Proven government training and certification systems.',
      features: [
        'OpenEdX-based platforms',
        'SCORM compliance',
        'Multi-tenant architecture',
        'Advanced analytics',
        'Mobile-responsive design'
      ],
      caseStudy: 'Delivered learning platforms for government training programs reaching 2M+ users'
    },
    {
      icon: Heart,
      title: 'Healthcare Information Systems',
      description: 'HIPAA-compliant healthcare platforms for patient management, telemedicine, and health data analytics. Secure solutions for government health agencies.',
      features: [
        'HIPAA compliance',
        'Electronic Health Records',
        'Telemedicine integration',
        'Real-time monitoring',
        'Interoperability standards'
      ],
      caseStudy: 'Built healthcare management systems for large-scale government health initiatives'
    },
    {
      icon: FileText,
      title: 'Document Management & Workflow',
      description: 'Enterprise document management and workflow automation systems. Streamline government processes with secure, compliant document handling.',
      features: [
        'Version control',
        'Workflow automation',
        'Digital signatures',
        'Audit trails',
        'Integration capabilities'
      ],
      caseStudy: 'Implemented document systems processing 500K+ documents monthly for government agencies'
    },
    {
      icon: Users,
      title: 'Citizen Services Portals',
      description: 'User-friendly portals for citizen engagement and service delivery. Self-service capabilities that reduce administrative burden and improve satisfaction.',
      features: [
        'Self-service capabilities',
        'Multi-language support',
        'Accessibility compliance',
        'Mobile optimization',
        'Integration with legacy systems'
      ],
      caseStudy: 'Citizen portals serving 1M+ users with 99.9% uptime'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Advanced analytics platforms for data-driven decision making. Real-time dashboards and reporting for government operations and performance monitoring.',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reporting',
        'Data visualization',
        'Performance metrics'
      ],
      caseStudy: 'Analytics platforms processing 100TB+ of government data with real-time insights'
    },
    {
      icon: Shield,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions for secure access control. Multi-factor authentication and role-based access for government security requirements.',
      features: [
        'Multi-factor authentication',
        'Single sign-on (SSO)',
        'Role-based access control',
        'Identity federation',
        'Compliance reporting'
      ],
      caseStudy: 'IAM systems securing access for 50K+ government employees across multiple agencies'
    },
    {
      icon: Globe,
      title: 'API Management Platforms',
      description: 'Enterprise API gateways and management platforms. Enable secure data sharing and system integration across government departments.',
      features: [
        'API gateway management',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'Monitoring & analytics',
        'Developer portal'
      ],
      caseStudy: 'API platforms handling 10M+ requests daily for inter-agency data exchange'
    },
    {
      icon: Building,
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions for government operations. Financial management, procurement, and resource planning with full audit capabilities.',
      features: [
        'Financial management',
        'Procurement automation',
        'Resource planning',
        'Audit trails',
        'Compliance reporting'
      ],
      caseStudy: 'ERP systems managing $1B+ in government procurement and financial operations'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Government Solutions
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Production-ready platforms and systems that scale for government operations, 
              backed by real-world implementations and proven results
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Battle-Tested Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution is built on proven technology stacks and has been successfully deployed 
              in high-scale government and enterprise environments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <solution.icon className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-1">Proven Results:</h4>
                    <p className="text-green-800 text-sm">{solution.caseStudy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on Proven Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions leverage enterprise-grade technologies that meet government security and compliance standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'AWS/Azure/GCP',
              'Kubernetes',
              'React/Angular',
              'Python/Java',
              'PostgreSQL',
              'Redis',
              'Docker',
              'Terraform',
              'OpenEdX',
              'Django',
              'Node.js',
              'MongoDB'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations that have successfully implemented our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'World Bank',
                project: 'Global Learning Platform',
                result: 'Delivered education technology reaching millions of learners worldwide'
              },
              {
                client: 'OpenEdX Foundation',
                project: 'Core Platform Development',
                result: 'Contributing to the open-source platform used by Harvard, MIT, and 100+ institutions'
              },
              {
                client: 'Enterprise Clients',
                project: 'Custom Government Solutions',
                result: 'Deployed secure, scalable solutions for multiple government agencies'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.client}</h3>
                <h4 className="text-green-600 font-semibold mb-3">{story.project}</h4>
                <p className="text-gray-600 text-sm">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Implement Proven Solutions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how these battle-tested solutions can be adapted for your specific government needs
          </p>
          <a 
            href="/contact" 
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
