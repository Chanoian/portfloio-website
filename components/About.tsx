import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl mx-auto border-8 border-white ring-2 ring-red-600/20">
                <img 
                  src="/images/profile.png" 
                  alt="Ara Chanoian" 
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <p className="text-sm font-medium text-center pointer-events-none select-none cursor-default">
                  10+ Years<br />of Innovation
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SectionTitle title="About Me" />
              <div className="prose lg:prose-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300">
              Greetings! Welcome to my website. I'm Ara, technologist/engineer driven by a passion for turning complex technical challenges into clean, scalable solutions. 
                I specialize in orchestrating containerized applications and fine-tuning cloud infrastructure
                , always with an eye on innovation and pushing the limits of what's possible.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                I’m a firm believer in the power of automation and thoughtful system design. 
                My journey in tech has taken me from hands-on work with IoT devices to leading
                cloud transformation projects for major financial institutions — always staying ahead of the curve in emerging technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <a href="#projects" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-105 transition-transform">30+</div>
                  <div className="text-gray-600 group-hover:text-red-600 transition-colors">Projects Delivered</div>
                </a>
                <a href="#certifications" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-105 transition-transform">13+</div>
                  <div className="text-gray-600 group-hover:text-red-600 transition-colors">Certifications</div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What I Work With</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group hover:bg-red-600 bg-gray-50 p-6 rounded-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-4 text-red-600 group-hover:text-white">Cloud & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Kubernetes', 'OpenShift', 'AWS', 'GCP', 'Azure', 'Docker'].map(skill => (
                    <span 
                      key={skill} 
                      className="bg-white group-hover:bg-red-500 px-3 py-1 rounded-full text-sm text-gray-700 group-hover:text-white border border-gray-200 group-hover:border-red-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group hover:bg-red-600 bg-gray-50 p-6 rounded-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-4 text-red-600 group-hover:text-white">DevOps & CI/CD</h4>
                <div className="flex flex-wrap gap-2">
                  {['Jenkins', 'ArgoCD', 'GitOps', 'Helm', 'Ansible', 'Terraform'].map(skill => (
                    <span 
                      key={skill} 
                      className="bg-white group-hover:bg-red-500 px-3 py-1 rounded-full text-sm text-gray-700 group-hover:text-white border border-gray-200 group-hover:border-red-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group hover:bg-red-600 bg-gray-50 p-6 rounded-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-4 text-red-600 group-hover:text-white">Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TypeScript', 'Go', 'React', 'Django', 'Node.js'].map(skill => (
                    <span 
                      key={skill} 
                      className="bg-white group-hover:bg-red-500 px-3 py-1 rounded-full text-sm text-gray-700 group-hover:text-white border border-gray-200 group-hover:border-red-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
