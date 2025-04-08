import { cvData } from "../data/cvData";

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Education</h1>
      
      <div className="space-y-8">
        {cvData.education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{edu.degree}</h2>
                <p className="text-lg text-gray-700">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-600">{edu.period}</span>
            </div>
            
            {edu.details && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Details:</h3>
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 