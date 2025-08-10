import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Backend Excellence",
      description: "Specialized in building robust, scalable backend systems using Go, Node.js, and Python with modern architectures."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "System Architecture",
      description: "Experience designing microservices, real-time systems, and distributed architectures for high-performance applications."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-400" />,
      title: "Innovation Focus",
      description: "Constantly exploring new technologies and methodologies to solve complex backend challenges efficiently."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Performance Driven",
      description: "Focused on delivering high-performance, scalable solutions with optimal resource utilization and system reliability."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI and technology visualization representing modern backend development"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Robust Backend Systems, One API at a Time
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With 3+ years of experience in backend development, I've evolved from an intern in 2022 
              to a skilled backend developer at Adya. My journey has been focused on building scalable, 
              high-performance systems that power critical business operations.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in backend technologies including Go, Node.js, and Python, with expertise in 
              building microservices, real-time systems, and distributed architectures. My experience 
              includes working with modern tools like Kafka, Redis, WebSockets, and various databases 
              to create efficient and reliable backend solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new backend technologies, contributing to open-source 
              projects, and building personal projects like PawBoard App. I believe in writing clean, 
              maintainable code and following best practices for system design and architecture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{highlight.title}</h4>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;