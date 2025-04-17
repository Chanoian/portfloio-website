interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Red Hat",
    role: "Senior Consultant",
    duration: "Dec 2021 - Present",
    location: "Toronto, Ontario, Canada",
    description: [
      "Bridging the gap between technical expertise and business acumen to engineer scalable solutions",
      "Architecting modern solutions harnessing cutting-edge technologies such as Service Mesh, Micro Services, and GitOps",
      "Building robust Continuous Integration/Continuous Deployment (CI/CD) pipelines to expedite application deployment",
      "Acting as a trusted advisor at customer sites, providing valuable insights and innovative ideas to enhance project outcomes"
    ]
  },
  {
    company: "The Co-operators",
    role: "Senior DevOps Consultant",
    duration: "April 2021 - Dec 2021",
    location: "Toronto, Canada",
    description: [
      "Established robust CI/CD pipeline leveraging expertise in Jenkins and Python",
      "Developed Jenkins pipelines and libraries using Pipeline as Code methodology",
      "Automated Salesforce Deployment process utilizing Python libraries instead of UI approach"
    ]
  },
  {
    company: "BMO Bank Of Montreal",
    role: "Automation Deployment Developer",
    duration: "April 2019 - April 2021",
    location: "Toronto, Canada",
    description: [
      "Enhanced the on-boarding process by automating existing processes using Python custom modules and Roles",
      "Implemented custom Ansible modules utilizing Python-Ansible Library for additional functionalities",
      "Provided OpenShift tool support and defined quotas and limits for development teams",
      "Implemented Docker Images pipeline for automatic updates to minimize vulnerabilities",
      "Created sanity applications for various image types"
    ]
  },
  {
    company: "Johnson Controls International",
    role: "Software DevOps Developer",
    duration: "March 2016 - April 2019",
    location: "Toronto, Canada",
    description: [
      "Managed software build packages from code check-in through release",
      "Implemented and maintained systematic Regression Testing integrated with Jenkins",
      "Developed C++ based tool to test internal SDK",
      "Created automation tools using Robot Framework and Python",
      "Implemented Python libraries for key-driven test automation",
      "Developed firmware upgrade tool using Python and SOAP API",
      "Created and presented training materials for Robot Framework Automation Suite"
    ]
  }
];

import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <SectionTitle title="Professional Experience" />
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                <div className="text-lg text-red-600 font-semibold mb-2">{exp.company}</div>
                <div className="text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</div>
                <div className="text-gray-600 dark:text-gray-400 mb-4">{exp.location}</div>
              </div>
              {exp.description && (
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
