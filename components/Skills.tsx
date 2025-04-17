const skillCategories = [
  {
    title: "Technologies",
    skills: ["Red Hat Linux", "OpenShift", "Kubernetes", "Ansible", "Docker", "Python"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Solution Architecture", "System Integration", "CI/CD", "Azure", "Google Cloud"]
  },
  {
    title: "Specializations",
    skills: ["Machine Learning", "Artificial Intelligence", "DevOps", "Automation"]
  },
  {
    title: "Languages",
    skills: ["Armenian (Native)", "English (Professional)", "Arabic (Native)"]
  }
];

import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-red-600 pb-2 border-b border-gray-200">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-red-500 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
