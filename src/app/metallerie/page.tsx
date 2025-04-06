'use client';
import { motion } from 'framer-motion';
import { FaIndustry, FaRuler, FaWrench, FaHammer, FaRulerCombined, FaHandshake } from 'react-icons/fa';

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
    description: 'Travail de précision sur tous types de métaux',
    examples: [
      'Tôlerie fine',
      'Pliage sur mesure',
      'Façonnage métallique',
      'Finitions soignées'
    ]
  },
  {
    id: 'soudure',
    icon: FaWrench,
    title: 'Soudure Professionnelle',
    description: 'Assemblage et soudure de qualité industrielle',
    examples: [
      'Soudure TIG/MIG',
      'Assemblage précis',
      'Soudure aluminium',
      'Soudure acier inox'
    ]
  },
  {
    id: 'ajustage',
    icon: FaHammer,
    title: 'Ajustage',
    description: 'Finition et ajustement de précision',
    examples: [
      'Assemblage mécanique',
      'Ajustement précis',
      'Finition soignée',
      'Contrôle qualité'
    ]
  }
];

const projects = [
  {
    title: 'Escalier Design',
    description: 'Escalier hélicoïdal en acier et verre',
    image: '/images/escalier.jpg'
  },
  {
    title: 'Garde-Corps Moderne',
    description: 'Garde-corps en inox et verre trempé',
    image: '/images/garde-corps.jpg'
  },
  {
    title: 'Portail Sur Mesure',
    description: 'Portail coulissant en aluminium',
    image: '/images/portail.jpg'
  }
];

export default function Metallerie() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20"
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
            Métallerie Professionnelle
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Expertise et savoir-faire dans la transformation du métal
          </motion.p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
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
            {[
              {
                icon: FaHandshake,
                title: 'Consultation',
                description: 'Étude de vos besoins et conseils personnalisés'
              },
              {
                icon: FaRuler,
                title: 'Conception',
                description: 'Design et planification détaillée du projet'
              },
              {
                icon: FaWrench,
                title: 'Réalisation',
                description: 'Fabrication et installation professionnelle'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <step.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
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
      </motion.section>
    </div>
  );
}
