'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaClock, FaTools, FaStar } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Serrurerie professionnelle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert en Serrurerie & Métallerie
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Service professionnel disponible 24h/24 et 7j/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:0695989305">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Appeler Maintenant
              </motion.button>
            </Link>
            <Link href="/devis">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Devis Gratuit
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir SERU PRESTA ?
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise reconnue au service de votre sécurité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Sécurité Garantie",
                description: "Solutions de sécurité adaptées à vos besoins"
              },
              {
                icon: FaClock,
                title: "24/7 Disponible",
                description: "Intervention rapide à toute heure"
              },
              {
                icon: FaTools,
                title: "Expertise Technique",
                description: "Professionnels qualifiés et expérimentés"
              },
              {
                icon: FaStar,
                title: "Service Premium",
                description: "Satisfaction client garantie"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;une Intervention Rapide ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts sont disponibles 24/7 pour répondre à vos besoins
          </p>
          <Link href="tel:0695989305">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              06.95.98.93.05
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
