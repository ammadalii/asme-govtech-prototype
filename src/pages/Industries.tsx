
import React from 'react';
import { GraduationCap, Heart, Building2, Users, Shield, FileText, Database, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Government training programs, professional development, and citizen education platforms',
      expertise: [
        'Learning Management Systems',
        'Online Certification Programs',
        'Professional Development Platforms',
        'Public Education Initiatives',
        'Training Analytics & Reporting'
      ],
      caseStudies: [
        'OpenEdX platform deployments for government training',
        'Professional certification systems for 100K+ employees',
        'Online learning platforms with SCORM compliance'
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare & Public Health',
      description: 'Health information systems, telemedicine platforms, and public health data management',
      expertise: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'Health Data Analytics',
        'Public Health Monitoring',
        'HIPAA-Compliant Systems'
      ],
      caseStudies: [
        'Healthcare management systems for government health agencies',
        'Public health monitoring dashboards',
        'Telemedicine platforms for rural healthcare access'
      ]
    },
    {
      icon: Building2,
      title: 'Public Administration',
      description: 'Digital government services, workflow automation, and citizen engagement platforms',
      expertise: [
        'Citizen Services Portals',
        'Workflow Automation',
        'Document Management',
        'Digital Identity Management',
        'Inter-agency Integration'
      ],
      caseStudies: [
        'Citizen service portals serving 1M+ users',
        'Digital transformation of government workflows',
        'Inter-agency data sharing platforms'
      ]
    },
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'Secure systems for defense agencies, intelligence platforms, and cybersecurity solutions',
      expertise: [
        'Secure Communications',
        'Intelligence Analytics',
        'Cybersecurity Solutions',
        'Identity & Access Management',
        'Compliance Monitoring'
      ],
      caseStudies: [
        'Secure communication platforms for government agencies',
        'Identity management systems for 50K+ users',
        'Cybersecurity assessment and implementation'
      ]
    },
    {
      icon: Users,
      title: 'Social Services',
      description: 'Benefit management systems, case management platforms, and social program administration',
      expertise: [
        'Benefit Management Systems',
        'Case Management Platforms',
        'Eligibility Verification',
        'Program Analytics',
        'Multi-channel Service Delivery'
      ],
      caseStudies: [
        'Benefits administration systems',
        'Social services case management platforms',
        'Program effectiveness analytics dashboards'
      ]
    },
    {
      icon: FileText,
      title: 'Regulatory & Compliance',
      description: 'Regulatory management systems, compliance monitoring, and audit trail platforms',
      expertise: [
        'Regulatory Reporting Systems',
        'Compliance Monitoring',
        'Audit Trail Management',
        'Policy Management',
        'Risk Assessment Tools'
      ],
      caseStudies: [
        'Regulatory compliance platforms',
        'Audit management systems',
        'Policy compliance monitoring tools'
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Government data platforms, business intelligence, and predictive analytics systems',
      expertise: [
        'Data Warehousing',
        'Business Intelligence',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Governance'
      ],
      caseStudies: [
        'Analytics platforms processing 100TB+ of government data',
        'Real-time operational dashboards',
        'Predictive analytics for resource planning'
      ]
    },
    {
      icon: Globe,
      title: 'International Development',
      description: 'Cross-border collaboration platforms, development program management, and global initiatives',
      expertise: [
        'Multi-country Platforms',
        'Development Program Management',
        'Cross-border Data Sharing',
        'International Compliance',
        'Multi-language Support'
      ],
      caseStudies: [
        'World Bank collaboration on global education platforms',
        'International development program management',
        'Multi-country learning platforms'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Government Industry Expertise
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Deep domain knowledge across critical government sectors, backed by real-world implementations 
              and proven results in complex regulatory environments
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Domain Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experience spans critical government sectors, with deep understanding of regulatory requirements, 
              security standards, and operational challenges
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl border border-gray-200 p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <industry.icon className="text-purple-600" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Expertise:</h4>
                      <ul className="space-y-2">
                        {industry.expertise.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-purple-50 rounded-xl p-8 h-full">
                    <h4 className="font-bold text-purple-900 mb-4">Case Studies & Results:</h4>
                    <div className="space-y-4">
                      {industry.caseStudies.map((study, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg border border-purple-100">
                          <p className="text-purple-800 text-sm">{study}</p>
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

      {/* Notable Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notable Collaborations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations we've worked with through Arbisoft's proven track record
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'World Bank',
                sector: 'International Development',
                description: 'Global education platform development and implementation'
              },
              {
                name: 'OpenEdX Foundation',
                sector: 'Education Technology',
                description: 'Core platform development for Harvard, MIT, and 100+ institutions'
              },
              {
                name: 'edX',
                sector: 'Online Education',
                description: 'Massive Open Online Course platform serving millions'
              },
              {
                name: 'Government Agencies',
                sector: 'Public Sector',
                description: 'Custom solutions for various government departments'
              }
            ].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-purple-600 font-semibold text-sm mb-3">{client.sector}</p>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand and implement the regulatory requirements across all government sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'FISMA',
              'FedRAMP',
              'HIPAA',
              'SOC 2',
              'NIST',
              '508 Compliance',
              'ISO 27001',
              'GDPR',
              'FERPA',
              'CJIS',
              'ITAR',
              'FIPS 140-2'
            ].map((standard, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-sm font-medium text-gray-700">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Leverage Our Industry Expertise?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our deep domain knowledge can accelerate your government technology initiatives
          </p>
          <a 
            href="/contact" 
            className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors inline-block"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
