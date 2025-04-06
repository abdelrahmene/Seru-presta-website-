'use client';
import { motion } from 'framer-motion';
import { FaIndustry, FaRuler, FaWrench, FaHammer, FaRulerCombined, FaHandshake, FaPhone, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    id: 'fabrication',
    icon: FaIndustry,
    title: 'Fabrications Sur Mesure',
    description: 'Création de structures métalliques personnalisées',
    examples: [
      'Escaliers métalliques',
      'Garde-corps design',
      'Mains courantes',
      'Structures extérieures'
    ]
  },
  {
    id: 'pliage',
    icon: FaRuler,
    title: 'Pliage de Précision',
    description: 'Services de pliage et formage de métaux',
    examples: [
      'Tôles sur mesure',
      'Profilés métalliques',
      'Pièces complexes',
      'Petites et grandes séries'
    ]
  },
  {
    id: 'soudure',
    icon: FaWrench,
    title: 'Soudure Professionnelle',
    description: 'Assemblage et soudure de qualité',
    examples: [
      'Soudure TIG/MIG',
      'Assemblage précis',
      'Finitions soignées',
      'Contrôle qualité'
    ]
  }
];

const processSteps = [
  {
    icon: FaHandshake,
    title: 'Consultation',
    description: 'Étude approfondie de vos besoins'
  },
  {
    icon: FaRuler,
    title: 'Conception',
    description: 'Design et plans détaillés'
  },
  {
    icon: FaHammer,
    title: 'Fabrication',
    description: 'Réalisation professionnelle'
  }
];

const MetalleriePage = () => {
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
            Métallerie Professionnelle
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Expertise et savoir-faire dans la transformation du métal
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {service.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaRulerCombined className="w-5 h-5 text-blue-600 mr-3" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-5xl text-blue-600 mx-auto mb-4">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-600 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Un Projet de Métallerie ?
          </h2>
          <p className="text-xl mb-8">
            Contactez nos experts pour un devis personnalisé
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

export default MetalleriePage;
