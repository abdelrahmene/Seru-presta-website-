'use client';
import { motion } from 'framer-motion';
import { FaTools, FaHome, FaWrench, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    name: 'Dépannage Urgent',
    description: 'Service disponible 24/7 pour vos urgences',
    icon: FaWrench,
  },
  {
    name: 'Installation',
    description: 'Installation professionnelle de serrures et systèmes de sécurité',
    icon: FaTools,
  },
  {
    name: 'Maintenance',
    description: 'Entretien régulier de vos équipements',
    icon: FaClipboardCheck,
  },
  {
    name: 'Conseil',
    description: 'Expertise et recommandations personnalisées',
    icon: FaHome,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Des solutions complètes pour votre sécurité
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
