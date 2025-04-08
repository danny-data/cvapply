const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    period: "2023",
    link: "#"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates",
    technologies: ["Vue.js", "Firebase", "TypeScript", "Tailwind CSS"],
    period: "2022",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    period: "2023",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 flex items-center group">
          <span className="bg-gray-900 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">01</span>
          <span className="group-hover:text-gray-700 transition-colors duration-300">Projects</span>
        </h1>
        <p className="text-xl text-gray-600 ml-16 hover:text-gray-800 transition-colors duration-300">A collection of my technical projects and achievements</p>
      </div>
      
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1 group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{project.title}</h2>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{project.period}</p>
              </div>
              <a 
                href={project.link}
                className="mt-4 md:mt-0 inline-flex items-center text-gray-900 hover:text-gray-700 transition-all duration-300 hover:translate-x-1"
              >
                <span className="mr-2">View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 