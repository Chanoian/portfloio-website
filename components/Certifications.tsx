import React from 'react';
import SectionTitle from './SectionTitle';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  link?: string;
  badgeColor: string;
}

const certifications: Certification[] = [
  {
    title: 'Red Hat Certified Architect (RHCA)',
    issuer: 'Red Hat',
    date: 'May - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/71edcf85-9333-4a07-803d-f768d98de9c5/linked_in_profile',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
    date: 'January - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/a88fc5fb-27ff-437c-ba9e-b34f5cebf5f4/linked_in_profile',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in OpenShift AI',
    issuer: 'Red Hat',
    date: 'August - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/98198228-448f-4462-98f1-ea7312111c3d/linked_in_profile',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in MultiCluster Management',
    issuer: 'Red Hat',
    date: 'August - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/f2ff437a-a804-4205-88d6-c1a4d955aba7/linked_in_profile',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in Building Resilient Microservices',
    issuer: 'Red Hat',
    date: 'May - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/a40a146f-dd9a-40ad-9455-e4d391b6ac0f',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in OpenShift Virtualization',
    issuer: 'Red Hat',
    date: 'April - 2024',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/0740d511-d62f-4bab-a513-13d09055eb4c/linked_in_profile',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    date: 'April - 2023',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/7b168bd9-94a7-421e-9290-2cf5d5665671/public_url',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'March - 2023',
    logo: '/images/certs/azure.svg',
    link: 'https://www.credly.com/badges/c7716549-dc1a-4d41-bfbd-89f452e77c64',
    badgeColor: 'bg-blue-700'
  },
  {
    title: 'Red Hat Certified Specialist in OpenShift Administration',
    issuer: 'Red Hat',
    date: 'April - 2022',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/0e929506-e9c1-436a-895f-21c8ee8043e3',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in OpenShift App. Development',
    issuer: 'Red Hat',
    date: 'Feb - 2022',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/c1651918-dd8b-4b68-97e3-f01cff8fe92b',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'Red Hat Certified Specialist in Containers and Kubernetes',
    issuer: 'Red Hat',
    date: 'January - 2025',
    logo: '/images/certs/redhat.svg',
    link: 'https://www.credly.com/badges/e5ce0773-c15f-41a5-a36a-2312c02b30ec',
    badgeColor: 'bg-red-600'
  },
  {
    title: 'ACE - Associate Google Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2021',
    logo: '/images/certs/gcp.svg',
    link: 'https://www.credential.net/cbd58c0d-de69-485e-8ba2-935f7cb86ed1',
    badgeColor: 'bg-blue-500'
  },
  {
    title: 'CKA - Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation',
    date: 'November - 2020',
    logo: '/images/certs/k8s.svg',
    link: 'https://www.youracclaim.com/badges/a47db2b6-2f2b-4cdf-bfdb-410c46dee93e',
    badgeColor: 'bg-blue-600'
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="certifications">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            cert.link ? (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden block focus:outline-none focus:ring-2 focus:ring-red-500"
                tabIndex={0}
                aria-label={`Verify ${cert.title}`}
              >
                <div className={`h-2 ${cert.badgeColor}`} />
                <div className="p-6 h-full flex flex-col">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.issuer}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 ${cert.badgeColor}`} />
                <div className="p-6 h-full flex flex-col">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.issuer}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
