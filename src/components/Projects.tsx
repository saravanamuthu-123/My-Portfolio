import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Smartphone, Brain, Database, GraduationCap, Activity } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Precision for Medicine",
      category: "AI-Powered Healthcare Analytics",
      description: "An intelligent clinical trial data analyzer powered by Google Gemini AI. Streamlines the process of identifying discrepancies in lab results with AI-powered analysis and provides instant summary reports.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Vite", "Google Gemini API", "Tailwind CSS", "SheetJS"],
      features: [
        "🤖 AI-Powered Analysis: Smart data comparison using Google Gemini API for clinical trial data",
        "📊 Intuitive File Upload: Drag-and-drop support for Excel files with patient and reference data",
        "👥 Gender-Specific Analysis: Accurate reference range application based on patient gender",
        "📈 Instant Summary Reports: Categorized results (Matched, Discrepancies, Not Found, Errors)",
        "🔒 Privacy-First Design: Client-side processing with no data storage for patient confidentiality",
        "📥 Export Capabilities: Download annotated Excel reports with analysis results",
        "🎨 Modern UI: Clean, responsive interface built with React 19 and Tailwind CSS"
      ],
      liveUrl: "https://precision-for-medicine-data-analyse.vercel.app/",
      githubUrl: "#",
      status: "Production",
      icon: <Activity className="w-6 h-6 text-red-400" />
    },
    {
      title: "Vanij AI Platform",
      category: "AI Full-Stack Ecosystem",
      description: "Meet Vanij — a future-ready, full-stack AI creation ecosystem. A unified platform empowering developers, builders, and enterprises to create, deploy, and scale AI solutions like never before.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "Node.js", "Python", "AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      features: [
        "🎛️ Agent Studio: Design autonomous AI agents with 130+ plug-and-play components and powerful MCP connectors (Slack, Jira, Notion, HubSpot)",
        "💻 App Studio: Turn any agent into a front-end app with one click using no-code UI builder or custom Next.js/React code",
        "☁️ Cloud Studio: Provision VMs and clusters across AWS, Azure, GCP with full GPU config, monitoring, and alerting. BYOC support included",
        "🧬 Model Studio: Train and fine-tune open-source LLMs with custom datasets, track progress, evaluate performance, and deploy at scale",
        "🛒 AI Marketplace: Agents, apps, and models all in one place. Monetize creations or find ready-to-go solutions from the community",
        "👥 Admin Control Center: Manage users, billing, keys, audit trails, file uploads, and support from a single dashboard"
      ],
      liveUrl: "https://adya.ai/",
      githubUrl: "#",
      status: "Production",
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: "PawBoard App",
      category: "Full-Stack Mobile Application",
      description: "A comprehensive React Native + Node.js application designed for pet boarding businesses with role-based access, cage management, and automated systems.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Expo", "Node.js", "MongoDB Atlas", "Firebase", "PDFKit"],
      features: [
        "Role-based access control for owners and managers",
        "Comprehensive cage management system",
        "Pet check-in/check-out functionality with tracking",
        "Automated invoice generation with PDF export",
        "Firebase OTP authentication system",
        "Reminder systems for pet care schedules",
        "Planned features: Analytics, spa bookings, feedback system, payment gateway"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      devTool: "Cursor.dev",
      icon: <Smartphone className="w-6 h-6 text-blue-400" />
    },
    {
      title: "ONDC Reconciliation System",
      category: "FinTech Backend System",
      description: "A robust backend system for processing and reconciling millions of daily transactions with automated matching and discrepancy detection.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Go", "Node.js", "MongoDB", "Kafka", "Redis", "WebSockets"],
      features: [
        "High-throughput transaction processing system",
        "Real-time reconciliation with automated matching algorithms",
        "Scalable microservices architecture",
        "Event-driven processing with Kafka",
        "Redis caching for optimal performance",
        "WebSocket integration for real-time updates"
      ],
      liveUrl: "https://adya.ai/industries/retail-ecommerce",
      githubUrl: "#",
      status: "Production",
      icon: <Database className="w-6 h-6 text-green-400" />
    },
    {
      title: "ONEST EdTech Platform",
      category: "Education Technology",
      description: "Led the development of ONEST app connecting buyers and providers for jobs and courses. Coordinated with team for planning and collaborated with Google developer team to deliver a comprehensive EdTech solution.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Go", "Node.js", "MongoDB", "React", "Google APIs", "Microservices"],
      features: [
        "Buyer-Provider marketplace for jobs and courses",
        "Advanced matching algorithms for job seekers and course learners",
        "Integration with Google developer APIs and services",
        "Real-time communication between buyers and providers",
        "Comprehensive course and job management system",
        "Analytics and reporting dashboard for stakeholders",
        "Scalable microservices architecture for high availability"
      ],
      liveUrl: "https://adya.ai/industries/education-edtech",
      githubUrl: "#",
      status: "Production",
      leadership: "Led critical tasks and team coordination",
      collaboration: "Collaborated with Google developer team",
      icon: <GraduationCap className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Showcasing backend solutions and full-stack applications that demonstrate technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-400/20 text-green-300' 
                      : 'bg-blue-400/20 text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 font-medium text-sm">{project.category}</span>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <Eye size={20} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {project.leadership && (
                  <div className="mb-4">
                    <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      {project.leadership}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    {project.title === "PawBoard App" ? "Demo" : "Live"}
                  </a>
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {projects[selectedProject].title}
                  </h3>
                  <span className="text-green-400 font-medium">
                    {projects[selectedProject].category}
                  </span>
                  {projects[selectedProject].devTool && (
                    <div className="mt-2">
                      <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        Built with {projects[selectedProject].devTool}
                      </span>
                    </div>
                  )}
                  {projects[selectedProject].leadership && (
                    <div className="mt-2">
                      <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                        {projects[selectedProject].leadership}
                      </span>
                    </div>
                  )}
                  {projects[selectedProject].collaboration && (
                    <div className="mt-2">
                      <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {projects[selectedProject].collaboration}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[selectedProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  {projects[selectedProject].title === "PawBoard App" ? "View Demo" : "View Live Project"}
                </a>
                {projects[selectedProject].githubUrl !== "#" && (
                  <a
                    href={projects[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;