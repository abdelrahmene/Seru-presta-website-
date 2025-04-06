'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const services = [
  'Serrurerie',
  'Dépannage',
  'Rénovation',
  'Pose',
  'Protection de l\'habitat',
  'Métallerie',
  'Automatismes',
  'Vitrerie',
  'Services professionnels'
];

export default function Devis() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
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
            Demande de Devis Gratuit
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé
          </motion.p>
        </div>
      </motion.div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.form
          className="bg-white rounded-xl shadow-lg p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Informations personnelles */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Vos Informations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Type de service */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Type de Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-600"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description du projet */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Description du Projet</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Détaillez votre besoin
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Décrivez votre projet en détail..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <FaCheck className="mr-2" />
                  Envoyé !
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Envoyer la demande
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Contact Direct Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d&apos;une Réponse Immédiate ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Appelez-nous directement pour un devis rapide
          </p>
          <motion.a
            href="tel:0695989305"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            06.95.98.93.05
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
