'use client';
import { motion } from 'framer-motion';
import { FaCog, FaWarehouse, FaDoorOpen, FaIndustry, FaMobile, FaShieldAlt } from 'react-icons/fa';

const solutions = [
  {
    id: 'rideaux',
    icon: FaWarehouse,
    title: 'Rideaux Métalliques',
    description: 'Automatisation de rideaux métalliques pour commerces et industries',
    features: [
      'Motorisation silencieuse',
      'Commande à distance',
      'Système anti-effraction',
      'Maintenance préventive'
    ]
  },
  {
    id: 'portails',
    icon: FaCog,
    title: 'Portails Automatiques',
    description: 'Solutions d\'automatisation pour portails coulissants et battants',
    features: [
      'Motorisation puissante',
      'Télécommandes sécurisées',
      'Détection d\'obstacles',
      'Installation professionnelle'
    ]
  },
  {
    id: 'garage',
    icon: FaDoorOpen,
    title: 'Portes de Garage',
    description: 'Automatisation de portes de garage sectionnelles et basculantes',
    features: [
      'Ouverture silencieuse',
      'Éclairage LED intégré',
      'Système anti-intrusion',
      'Commande smartphone'
    ]
  },
  {
    id: 'sectionnelles',
    icon: FaIndustry,
    title: 'Portes Sectionnelles',
    description: 'Portes sectionnelles industrielles automatisées',
    features: [
      'Grande résistance',
      'Isolation thermique',
      'Sécurité renforcée',
      'Maintenance facile'
    ]
  }
];

const features = [
  {
    icon: FaMobile,
    title: 'Contrôle à Distance',
    description: 'Pilotez vos automatismes depuis votre smartphone'
  },
  {
    icon: FaShieldAlt,
    title: 'Sécurité Maximale',
    description: 'Systèmes de sécurité intégrés et certifiés'
  },
  {
    icon: FaCog,
    title: 'Installation Professionnelle',
    description: 'Montage et configuration par des experts'
  }
];

export default function Automatismes() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Automatismes & Motorisation
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Solutions d&apos;automatisation innovantes pour votre confort et votre sécurité
          </motion.p>
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <solution.icon className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">{solution.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Points Forts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Automatisez Votre Installation
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller sur la meilleure solution d&apos;automatisation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0695989305"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Appeler Maintenant
              </motion.a>
              <motion.a
                href="/devis"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Demander un Devis
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
