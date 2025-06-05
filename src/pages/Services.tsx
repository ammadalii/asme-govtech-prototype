
import React from 'react';
import { Cloud, Code, Shield, Database, Smartphone, Settings, Brain, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud migration, infrastructure automation, and DevOps implementation for government agencies. We help modernize legacy systems with secure, scalable cloud solutions.',
      features: ['AWS/Azure/GCP Migration', 'Infrastructure as Code', 'CI/CD Pipelines', 'Container Orchestration']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end software development services tailored for government operations. From web applications to enterprise systems, we build secure, compliant solutions.',
      features: ['Web Applications', 'Enterprise Software', 'API Development', 'Legacy System Modernization']
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Transform your data into actionable insights with modern data engineering practices. We build robust data pipelines and analytics platforms for government decision-making.',
      features: ['Data Pipeline Design', 'Business Intelligence', 'Data Warehousing', 'Real-time Analytics']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions that meet government security standards. Enhance citizen engagement and employee productivity with custom mobile apps.',
      features: ['iOS/Android Development', 'Cross-platform Solutions', 'Secure Authentication', 'Offline Capabilities']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes and gain insights. Our AI solutions are designed with government compliance and ethical considerations in mind.',
      features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security assessment and implementation services. We ensure your systems meet federal security standards and protect against evolving threats.',
      features: ['Security Audits', 'Compliance Implementation', 'Threat Assessment', 'Incident Response']
    },
    {
      icon: Settings,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategy and implementation. We help government agencies modernize operations and improve citizen services.',
      features: ['Strategy Development', 'Process Optimization', 'Change Management', 'Training & Support']
    },
    {
      icon: Globe,
      title: 'Integration Services',
      description: 'Seamless integration of disparate systems and third-party services. Connect your government systems for improved efficiency and data flow.',
      features: ['System Integration', 'API Management', 'Data Migration', 'Third-party Connectors']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Government-grade technology services backed by 18+ years of experience and 900+ engineers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering technology solutions that meet government standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'Deep dive into your requirements, existing systems, and compliance needs'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Develop comprehensive roadmap with security and compliance at the core'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Agile development with continuous security testing and quality assurance'
              },
              {
                step: '04',
                title: 'Support & Optimization',
                description: 'Ongoing maintenance, security updates, and performance optimization'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your government operations
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
