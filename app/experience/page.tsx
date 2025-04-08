import { cvData } from "../data/cvData";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Experience</h1>
      
      <div className="space-y-8">
        {cvData.experience.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{exp.title}</h2>
                <p className="text-lg text-gray-700">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{exp.location}</p>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Responsibilities:</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 