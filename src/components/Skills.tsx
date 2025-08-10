import React from 'react';
import { Code, Database, Cloud, Settings, Smartphone, Server, Brain, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: "Go (Golang)", level: 95 },
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "C/C++", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-8 h-8 text-green-400" />,
      skills: [
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "Gorilla Mux", level: 88 },
        { name: "System Architecture", level: 90 },
        { name: "API Integration", level: 92 }
      ]
    },
    {
      title: "Databases & Data",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "MongoDB", level: 92 },
        { name: "SQL & NoSQL", level: 90 },
        { name: "Redis", level: 88 },
        { name: "Data Processing", level: 85 },
        { name: "Database Design", level: 88 },
        { name: "MongoDB Atlas", level: 90 }
      ]
    },
    {
      title: "AI & Multi-Agent Systems",
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      skills: [
        { name: "Super Agent Development", level: 90 },
        { name: "Multi-Agentic Network", level: 88 },
        { name: "Agent Orchestration", level: 85 },
        { name: "AI Integration", level: 92 },
        { name: "AI Workflows", level: 85 }
      ]
    },
    {
      title: "Real-time & Messaging",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      skills: [
        { name: "WebSockets", level: 90 },
        { name: "Kafka", level: 88 },
        { name: "Event Streaming", level: 85 },
        { name: "Real-time Processing", level: 92 },
        { name: "Message Queuing", level: 85 },
        { name: "Live Data Streaming", level: 88 }
      ]
    },
    {
      title: "Frontend (AI-Assisted)",
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 70 },
        { name: "Tailwind CSS", level: 75 },
        { name: "AI-Assisted Development", level: 90 },
        { name: "Frontend Integration", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS/GCP/Azure", level: 80 },
        { name: "Vercel", level: 88 },
        { name: "CI/CD", level: 85 },
        { name: "Linux", level: 88 },
        { name: "Cloud Deployment", level: 85 }
      ]
    },
    {
      title: "Protocols & Standards",
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      skills: [
        { name: "ONDC Protocol", level: 92 },
        { name: "E-commerce Standards", level: 90 },
        { name: "Payment Integration", level: 88 },
        { name: "Protocol Development", level: 85 },
        { name: "Standards Compliance", level: 88 },
        { name: "Interoperability", level: 85 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Backend-focused expertise with modern technologies for building scalable applications. Strong in AI integration and system architecture with ability to build full-stack solutions using AI assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  {category.title === "Frontend (AI-Assisted)" && (
                    <p className="text-xs text-cyan-400 mt-1">Built with AI assistance</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Highlights</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-300">Transactions Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;