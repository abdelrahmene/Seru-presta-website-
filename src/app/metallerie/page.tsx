'use client';
import { motion } from 'framer-motion';
import { FaIndustry, FaWrench, FaHammer, FaHandshake } from 'react-icons/fa';

const services = [
  {
    id: 'fabrication',
    icon: FaIndustry,
    title: 'Fabrication sur Mesure',
    description: 'Création de structures métalliques personnalisées selon vos besoins',
  },
  {
    id: 'installation',
    icon: FaWrench,
    title: 'Installation Professionnelle',
    description: 'Mise en place experte de vos éléments métalliques',
  },
  {
    id: 'maintenance',
    icon: FaHammer,
    title: 'Maintenance et Réparation',
    description: 'Services de maintenance préventive et réparations',
  },
  {
    id: 'conseil',
    icon: FaHandshake,
    title: 'Conseil et Expertise',
    description: 'Accompagnement dans vos projets de métallerie',
  },
];

export default function Metallerie() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services de Métallerie
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Solutions complètes en métallerie pour vos projets
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.title}
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
