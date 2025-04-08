import { cvData } from "./data/cvData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section with Tech Background */}
      <div className="relative overflow-hidden rounded-xl mb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white transform hover:scale-[1.01] transition-all duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] animate-pulse"></div>
        </div>
        <div className="relative px-8 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">{cvData.name}</h1>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in-delay">Data Analyst & Data Scientist</p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${cvData.contact.email}`} className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Email Me
            </a>
            <a href={`https://linkedin.com/in/${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Career Profile with Modern Card */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center group">
          <span className="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">01</span>
          <span className="group-hover:text-gray-700 transition-colors duration-300">Career Profile</span>
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
          {cvData.careerProfile.map((point, index) => (
            <p key={index} className="text-gray-700 mb-4 flex items-start hover:translate-x-2 transition-transform duration-300">
              <span className="text-gray-900 font-medium mr-2">•</span>
              {point}
            </p>
          ))}
        </div>
      </div>

      {/* Quick Links with Modern Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link href="/experience" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">02</div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Experience</h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">View my professional journey and achievements</p>
        </Link>
        
        <Link href="/education" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">03</div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Education</h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Explore my academic background and qualifications</p>
        </Link>
        
        <Link href="/skills" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">04</div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Skills</h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Discover my technical expertise and tools</p>
        </Link>
      </div>

      {/* Projects Preview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center group">
          <span className="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">05</span>
          <span className="group-hover:text-gray-700 transition-colors duration-300">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1 group">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">E-commerce Platform</h3>
            <p className="text-gray-600 mb-4">A full-stack e-commerce platform built with React, Node.js, and MongoDB</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">React</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">Node.js</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">MongoDB</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1 group">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">Task Management System</h3>
            <p className="text-gray-600 mb-4">A collaborative task management system with real-time updates</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">Vue.js</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">Firebase</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-gray-200 transition-colors duration-300">TypeScript</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/projects" className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
