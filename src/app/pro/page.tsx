'use client';
import { motion } from 'framer-motion';
import { FaDoorOpen, FaGlassMartiniAlt, FaShieldAlt, FaCity, FaFireAlt, FaCertificate } from 'react-icons/fa';

const services = [
  {
    id: 'issues-secours',
    icon: FaDoorOpen,
    title: 'Portes Issues de Secours',
    description: 'Solutions de sécurité conformes aux normes ERP',
    features: [
      'Conformité aux normes',
      'Systèmes anti-panique',
      'Ferme-portes adaptés',
      'Maintenance préventive'
    ]
  },
  {
    id: 'portes-vitrees',
    icon: FaGlassMartiniAlt,
    title: 'Portes Vitrées',
    description: 'Portes vitrées professionnelles et sécurisées',
    features: [
      'Verre sécurit',
      'Systèmes automatiques',
      'Design personnalisé',
      'Installation certifiée'
    ]
  },
  {
    id: 'protections',
    icon: FaShieldAlt,
    title: 'Protections',
    description: 'Solutions de protection pour locaux professionnels',
    features: [
      'Rideaux métalliques',
      'Grilles de défense',
      'Systèmes anti-intrusion',
      'Contrôle d\'accès'
    ]
  },
  {
    id: 'mobilier-urbain',
    icon: FaCity,
    title: 'Mobilier Urbain',
    description: 'Équipements urbains et collectifs',
    features: [
      'Barrières de ville',
      'Bornes escamotables',
      'Potelets fixes/amovibles',
      'Solutions sur mesure'
    ]
  },
  {
    id: 'coupe-feu',
    icon: FaFireAlt,
    title: 'Portes Coupe-feu',
    description: 'Solutions coupe-feu certifiées',
    features: [
      'Certification EI30/60/90',
      'Ferme-portes adaptés',
      'Joints intumescents',
      'Maintenance régulière'
    ]
  }
];

const certifications = [
  {
    title: 'APSAD',
    description: 'Certification des installations de sécurité'
  },
  {
    title: 'NF',
    description: 'Conformité aux normes françaises'
  },
  {
    title: 'CE',
    description: 'Conformité européenne'
  },
  {
    title: 'ISO 9001',
    description: 'Management de la qualité'
  }
];

export default function Pro() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 to-blue-800 text-white py-20"
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
            Solutions Professionnelles
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Équipements et services pour professionnels, collectivités et industries
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
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

      {/* Certifications Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCertificate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi Choisir Nos Services Pro ?
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise reconnue au service des professionnels
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise Technique',
                description: 'Plus de 20 ans d\'expérience dans le secteur'
              },
              {
                title: 'Réactivité',
                description: 'Intervention rapide et service d\'urgence 24/7'
              },
              {
                title: 'Sur Mesure',
                description: 'Solutions adaptées à vos besoins spécifiques'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-600 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Un Projet Professionnel ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont à votre disposition pour étudier votre projet
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
