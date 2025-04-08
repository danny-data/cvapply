const activities = [
  {
    title: "Tech Conference Speaker",
    organization: "Vietnam Web Summit",
    period: "2023",
    description: "Presented on 'Modern Web Development Practices' to an audience of 200+ developers",
    location: "Ho Chi Minh City, Vietnam"
  },
  {
    title: "Open Source Contributor",
    organization: "React Community",
    period: "2022 - Present",
    description: "Regular contributor to React documentation and community projects",
    location: "Remote"
  },
  {
    title: "Mentor",
    organization: "Code Camp Vietnam",
    period: "2022",
    description: "Mentored 5 junior developers in web development fundamentals",
    location: "Hanoi, Vietnam"
  }
];

export default function Activities() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 flex items-center group">
          <span className="bg-gray-900 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">01</span>
          <span className="group-hover:text-gray-700 transition-colors duration-300">Activities</span>
        </h1>
        <p className="text-xl text-gray-600 ml-16 hover:text-gray-800 transition-colors duration-300">Professional activities and community involvement</p>
      </div>
      
      <div className="space-y-10">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1 group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{activity.title}</h2>
                <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{activity.organization}</p>
              </div>
              <span className="mt-2 md:mt-0 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-all duration-300 hover:scale-105">{activity.period}</span>
            </div>
            
            <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300">{activity.description}</p>
            <p className="text-gray-600 text-sm flex items-center group-hover:text-gray-800 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {activity.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 