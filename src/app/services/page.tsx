'use client';
import { motion } from 'framer-motion';
import { FaKey, FaTools, FaHome, FaWrench, FaClipboardCheck, FaPhone, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    id: 'depannage',
    icon: FaKey,
    title: 'Dépannage d\'Urgence',
    description: 'Service disponible 24h/24 et 7j/7',
    features: [
      'Ouverture de porte',
      'Changement de serrure',
      'Réparation après effraction',
      'Intervention rapide'
    ]
  },
  {
    id: 'installation',
    icon: FaTools,
    title: 'Installation',
    description: 'Solutions de sécurité sur mesure',
    features: [
      'Serrures haute sécurité',
      'Blindage de porte',
      'Portes blindées',
      'Coffres-forts'
    ]
  },
  {
    id: 'maintenance',
    icon: FaWrench,
    title: 'Maintenance',
    description: 'Entretien préventif et correctif',
    features: [
      'Contrats de maintenance',
      'Vérification périodique',
      'Réparation',
      'Mise aux normes'
    ]
  },
  {
    id: 'securite',
    icon: FaHome,
    title: 'Sécurité',
    description: 'Protection complète de votre habitat',
    features: [
      'Audit de sécurité',
      'Systèmes d\'alarme',
      'Vidéosurveillance',
      'Installation de contrôle d\'accès'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Des solutions professionnelles pour votre sécurité
          </motion.p>
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
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                <div className="text-4xl text-blue-600 mb-6">
                  <service.icon />
                </div>
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
        className="bg-blue-600 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d&apos;une Intervention ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe est disponible 24h/24 et 7j/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0695989305"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              <FaPhone className="mr-2" />
              Appeler Maintenant
            </motion.a>
            <motion.a
              href="/devis"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              <FaFileAlt className="mr-2" />
              Devis Gratuit
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
