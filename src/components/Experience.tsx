import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Software Developer",
      company: "Adya",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading backend development of complex financial systems and scalable applications. Currently spearheading Vanij AI Platform - an enterprise-level AI creation ecosystem that enables no-code AI agent development and deployment at scale.",
      achievements: [
        "Leading Vanij AI Platform backend architecture - architected Agent Studio with 130+ plug-and-play components, App Studio for one-click agent-to-app conversion, and comprehensive enterprise AI ecosystem serving global clients",
        "Built Vanij's Cloud Studio infrastructure management across AWS, Azure, GCP with GPU provisioning, Model Studio for LLM training/fine-tuning, and AI Marketplace with monetization features for community-driven solutions",
        "Developed Vanij's Admin Control Center for enterprise user management, billing systems, audit trails, and comprehensive backend controls processing millions of AI operations daily",
        "Architected scalable backend systems for ONDC Reconciliation processing millions of transactions with real-time data processing using Kafka and WebSockets",
        "Optimized database performance and designed efficient data models for AI workload management and enterprise-scale operations"
      ],
      technologies: ["Go", "Node.js", "Python", "MongoDB", "Kafka", "Redis", "WebSockets", "AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      currentProject: {
        name: "Vanij AI Platform",
        description: "Enterprise-level AI creation ecosystem enabling no-code AI agent development and deployment",
        impact: "Serving global enterprises with scalable AI solutions"
      }
    },
    {
      title: "Software Development Intern",
      company: "Adya",
      location: "Remote",
      period: "2022 - 2023",
      type: "Internship",
      description: "Started my journey in backend development, focusing on API development and system integration.",
      achievements: [
        "Developed RESTful APIs for internal tools and client applications",
        "Worked on database design and optimization for better performance",
        "Integrated third-party APIs for payment processing and data synchronization",
        "Participated in code reviews and agile development processes",
        "Received recognition for technical contributions and rapid learning"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            My journey from intern to backend developer, building scalable systems and leading enterprise AI platform development at Adya
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line for mobile */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 md:hidden"></div>
              
              {/* Timeline dot for mobile */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-gray-800 z-10 md:hidden"></div>

              <div className="ml-16 md:ml-0">
                <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                          {exp.type === 'Internship' ? <TrendingUp className="w-5 h-5 text-white" /> : <Award className="w-5 h-5 text-white" />}
                        </div>
                        <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                        {exp.currentProject && (
                          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Leading {exp.currentProject.name}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-purple-400 font-semibold mb-4">{exp.company}</h4>

                      <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      {exp.currentProject && (
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-400/30 mb-6">
                          <h5 className="text-blue-300 font-semibold mb-2">🚀 Current Enterprise Project:</h5>
                          <p className="text-gray-300 text-sm mb-2">{exp.currentProject.description}</p>
                          <p className="text-green-300 text-sm font-medium">Impact: {exp.currentProject.impact}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;