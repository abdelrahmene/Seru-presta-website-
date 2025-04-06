'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { FaShieldAlt, FaClock, FaTools, FaStar, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

const slides = [
  {
    image: '/images/slide1.jpg',
    title: 'Expert en Serrurerie',
    subtitle: 'Service professionnel disponible 24h/24 et 7j/7'
  },
  {
    image: '/images/slide2.jpg',
    title: 'Protection de l\'Habitat',
    subtitle: 'Solutions de sécurité sur mesure'
  },
  {
    image: '/images/slide3.jpg',
    title: 'Métallerie & Automatismes',
    subtitle: 'Fabrication et installation professionnelle'
  }
];

const services = [
  {
    icon: FaTools,
    title: 'Serrurerie',
    description: 'Installation et dépannage de serrures',
    link: '/services'
  },
  {
    icon: FaShieldAlt,
    title: 'Sécurité',
    description: 'Protection complète de votre habitat',
    link: '/protection'
  },
  {
    icon: FaTools,
    title: 'Métallerie',
    description: 'Fabrication sur mesure',
    link: '/metallerie'
  }
];

const testimonials = [
  {
    name: 'Jean D.',
    role: 'Particulier',
    content: 'Intervention rapide et professionnelle. Je recommande vivement !',
    rating: 5
  },
  {
    name: 'Marie L.',
    role: 'Entreprise',
    content: 'Excellent service, équipe très compétente.',
    rating: 5
  },
  {
    name: 'Pierre M.',
    role: 'Syndic',
    content: 'Travail de qualité et respect des délais.',
    rating: 5
  }
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
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
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions professionnelles pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <service.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link}>
                  <span className="text-blue-600 font-semibold hover:text-blue-700">
                    En savoir plus →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl opacity-90">
              Une expertise reconnue au service de votre sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Sécurité Garantie",
                description: "Solutions de sécurité adaptées"
              },
              {
                icon: FaClock,
                title: "24/7 Disponible",
                description: "Intervention rapide"
              },
              {
                icon: FaTools,
                title: "Expertise Technique",
                description: "Professionnels qualifiés"
              },
              {
                icon: FaStar,
                title: "Service Premium",
                description: "Satisfaction garantie"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avis Clients
            </h2>
            <p className="text-xl text-gray-600">
              Ce que nos clients disent de nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-bold">Téléphone</p>
                    <a href="tel:0695989305" className="text-blue-600 hover:text-blue-700">
                      06.95.98.93.05
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-bold">Zone d&apos;intervention</p>
                    <p>France entière</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-gray-100 rounded-xl p-8"
              data-aos="fade-left"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    aria-label="Votre nom complet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    aria-label="Votre adresse email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    aria-label="Votre message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                  type="submit"
                  aria-label="Envoyer le message"
                >
                  Envoyer
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
