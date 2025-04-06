'use client';
import { motion } from 'framer-motion';
import { FaGlasses, FaRuler, FaWindowMaximize, FaShieldAlt, FaTools, FaHandshake } from 'react-icons/fa';

const services = [
  {
    id: 'miroiterie',
    icon: FaGlasses,
    title: 'Miroiterie',
    description: 'Solutions sur mesure pour tous vos besoins en miroiterie',
    features: [
      'Miroirs sur mesure',
      'Verre décoratif',
      'Crédences en verre',
      'Installation professionnelle'
    ]
  },
  {
    id: 'vitrage',
    icon: FaRuler,
    title: 'Vitrage Sur Mesure',
    description: 'Fabrication et pose de vitrages adaptés à vos besoins',
    features: [
      'Double vitrage',
      'Vitrage sécurité',
      'Vitrage isolant',
      'Vitrage acoustique'
    ]
  },
  {
    id: 'menuiserie',
    icon: FaWindowMaximize,
    title: 'Menuiserie Aluminium',
    description: 'Solutions complètes en menuiserie aluminium',
    features: [
      'Fenêtres aluminium',
      'Portes-fenêtres',
      'Baies vitrées',
      'Vérandas'
    ]
  },
  {
    id: 'garde-corps',
    icon: FaShieldAlt,
    title: 'Garde-Corps Vitrés',
    description: 'Garde-corps design et sécurisés pour l\'extérieur',
    features: [
      'Verre trempé',
      'Design moderne',
      'Normes de sécurité',
      'Installation certifiée'
    ]
  }
];

export default function Vitrerie() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20"
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
            Vitrerie & Miroiterie
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Excellence et précision dans le travail du verre
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
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
              <div className="flex items-center mb-6">
                <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
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

      {/* Process Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre Processus d&apos;Intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaHandshake,
                title: 'Consultation',
                description: 'Évaluation de vos besoins et conseils personnalisés'
              },
              {
                icon: FaRuler,
                title: 'Mesures Précises',
                description: 'Prise de mesures et devis détaillé'
              },
              {
                icon: FaTools,
                title: 'Installation',
                description: 'Pose professionnelle et finitions soignées'
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

      {/* Quality Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Notre Engagement Qualité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons uniquement des matériaux de première qualité et respectons scrupuleusement les normes en vigueur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Matériaux certifiés',
              'Normes de sécurité',
              'Garantie décennale',
              'SAV réactif'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-6 h-6 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-800">{item}</p>
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
            Un Projet de Vitrerie ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont à votre écoute pour vous conseiller
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
