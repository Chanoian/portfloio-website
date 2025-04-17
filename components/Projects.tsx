import SectionTitle from './SectionTitle';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Homelab',
    description: 'This GitHub repository is the heart of my homelab automation. It contains all the scripts and configurations required to deploy a fully functional OpenShift cluster, complete with GitOps integration. Using GitOps, the cluster automatically provisions essential operators and deploys a set of example applications across multiple languages—including Python, PHP, JavaScript, Java, and Go. Whether you’re exploring modern DevOps practices, testing cloud-native development workflows, or experimenting with multi-language deployments.',
    technologies: ['ArgoCD', 'OpenShift', 'Ansible'],
    github: 'https://github.com/Chanoian/homelab',
    image: '/images/projects/gitops-pipeline.jpg'
  },
  {
    title: "Google Home Chess Bot",
    description: "A cloud-native chess bot that you can play with using Google Home. Built with Python/Django backend, the application leverages various GCP services including Dialogflow for natural language processing, Cloud Run for containerized deployment, and CloudSQL for database management.",
    technologies: ["Python", "Django", "Google Cloud", "Dialogflow", "Cloud Run", "CloudSQL"],
    image: "/images/projects/chess-bot.png",
    github: "https://github.com/Chanoian/chess_bot"
  },
  {
    title: "OpenShift Service Mesh Implementation",
    description: "Architected and implemented a service mesh solution for a major financial institution, enabling advanced traffic management, security, and observability across their microservices architecture.",
    technologies: ["OpenShift", "Istio", "Kubernetes", "GitOps", "ArgoCD"],
    image: "/images/projects/service-mesh.jpg"
  },
  {
    title: "Firmware Upgrade Automation",
    description: "Created an automated firmware upgrade tool using Python and SOAP API, streamlining the upgrade process for IoT devices and reducing manual intervention.",
    technologies: ["Python", "SOAP API", "IoT", "Automation"],
    image: "/images/projects/firmware-update.png"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-video md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-gray-100">
                {project.image ? (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90 group-hover:opacity-100" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-4xl text-gray-400">{project.title[0]}</div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white"> 
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full flex items-center transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full flex items-center transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
