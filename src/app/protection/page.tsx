'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaBell, FaVideo, FaFingerprint, FaMobileAlt } from 'react-icons/fa';

const solutions = [
  {
    id: 'clotures',
    icon: FaShieldAlt,
    title: 'Clôtures de Sécurité',
    description: 'Protection périmétrique robuste pour votre propriété',
    features: [
      'Clôtures haute sécurité',
      'Portails automatisés',
      'Barrières anti-intrusion',
      'Installation professionnelle'
    ]
  },
  {
    id: 'controle-acces',
    icon: FaFingerprint,
    title: 'Contrôle d\'Accès',
    description: 'Systèmes de contrôle d\'accès modernes et sécurisés',
    features: [
      'Lecteurs biométriques',
      'Badges et codes d\'accès',
      'Interphones vidéo',
      'Gestion des accès à distance'
    ]
  },
  {
    id: 'alarmes',
    icon: FaBell,
    title: 'Systèmes d\'Alarme',
    description: 'Protection active contre les intrusions',
    features: [
      'Détection de mouvement',
      'Surveillance 24/7',
      'Alertes en temps réel',
      'Installation sur mesure'
    ]
  },
  {
    id: 'videosurveillance',
    icon: FaVideo,
    title: 'Vidéosurveillance',
    description: 'Surveillance vidéo haute définition',
    features: [
      'Caméras HD/4K',
      'Vision nocturne',
      'Accès à distance',
      'Enregistrement cloud'
    ]
  },
  {
    id: 'serrures',
    icon: FaLock,
    title: 'Serrures Connectées',
    description: 'Solutions de verrouillage intelligentes',
    features: [
      'Serrures connectées',
      'Contrôle via smartphone',
      'Historique des accès',
      'Gestion multi-utilisateurs'
    ]
  },
  {
    id: 'domotique',
    icon: FaMobileAlt,
    title: 'Domotique Sécurité',
    description: 'Automatisation et contrôle intelligent',
    features: [
      'Intégration smart home',
      'Scénarios automatisés',
      'Contrôle vocal',
      'Application mobile dédiée'
    ]
  }
];

export default function Protection() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
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
            Protection de l&apos;Habitat
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Des solutions complètes pour sécuriser votre maison et protéger ce qui compte le plus
          </motion.p>
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-10 h-10 text-blue-600 mr-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protégez Votre Habitat Dès Maintenant
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller sur les meilleures solutions de sécurité adaptées à vos besoins
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
