'use client';
import { motion } from 'framer-motion';
import { FaKey, FaTools, FaHome, FaWrench, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    id: 'serrurerie',
    icon: FaKey,
    title: 'Serrurerie',
    description: 'Installation et réparation de serrures, cylindres et systèmes de sécurité.',
    features: [
      'Ouverture de porte',
      'Changement de serrure',
      'Installation de cylindre haute sécurité',
      'Reproduction de clés'
    ]
  },
  {
    id: 'depannage',
    icon: FaTools,
    title: 'Dépannage',
    description: 'Service d\'urgence disponible 24/7 pour tous vos besoins en serrurerie.',
    features: [
      'Intervention rapide',
      'Disponible jour et nuit',
      'Service d\'urgence',
      'Devis transparent'
    ]
  },
  {
    id: 'renovation',
    icon: FaHome,
    title: 'Rénovation',
    description: 'Modernisation et mise aux normes de vos installations.',
    features: [
      'Mise aux normes',
      'Modernisation',
      'Conseil personnalisé',
      'Solutions sur mesure'
    ]
  },
  {
    id: 'pose',
    icon: FaWrench,
    title: 'Pose',
    description: 'Installation professionnelle de tous types de systèmes de sécurité.',
    features: [
      'Installation de portes blindées',
      'Pose de serrures multipoints',
      'Montage de portes de garage',
      'Installation de contrôle d\'accès'
    ]
  }
];

const _fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <motion.div
        className="bg-blue-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Des solutions professionnelles adaptées à tous vos besoins en serrurerie et sécurité
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="p-8">
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaClipboardCheck className="w-5 h-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d&apos;un Service ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour un devis gratuit ou une intervention rapide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0695989305"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Appeler Maintenant
            </motion.a>
            <motion.a
              href="/devis"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Demander un Devis
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
