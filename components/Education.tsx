interface Education {
  school: string;
  degree: string;
  field: string;
  duration: string;
  details?: string[];
}

const education: Education[] = [
  {
    school: "University of Toronto",
    degree: "Postgraduate Certificate",
    field: "Machine Learning and Artificial Intelligence",
    duration: "2019 - 2021",
    details: [
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Neural Networks",
      "Regression, Classification, Clustering, and Anomaly Detection"
    ],
  },
  {
    school: "University of Aleppo",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    duration: "2008 - 2012",
    details: [
      "Distributed Systems",
      "Software Design Patterns and Best Practices",
      "Algorithms and Data Structures",
      "Systems Control",
      "Digital Logic"
    ]
  }
];

import SectionTitle from './SectionTitle';

const Education = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="education">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" />
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 border border-gray-100 dark:border-gray-700">
  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 shadow-md mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  </div>
  <div className="flex-1">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.school}</h3>
        <p className="text-md text-gray-700 dark:text-gray-300 font-medium">{edu.degree}</p>
        <p className="text-md text-gray-500 dark:text-gray-400">{edu.field}</p>
      </div>
      <span className="inline-block mt-2 md:mt-0 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold shadow-sm">{edu.duration}</span>
    </div>
    {edu.details && (
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mt-2">
        {edu.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
