'use client';
import Link from 'next/link';
import { FaPhone, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:0695989305" className="hover:text-blue-400 transition-colors">
                  06.95.98.93.05
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>24h/24 - 7j/7</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>France</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:contact@seru-presta.fr" className="hover:text-blue-400 transition-colors">
                  contact@seru-presta.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#serrurerie" className="hover:text-blue-400 transition-colors">
                  Serrurerie
                </Link>
              </li>
              <li>
                <Link href="/services#depannage" className="hover:text-blue-400 transition-colors">
                  Dépannage
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="hover:text-blue-400 transition-colors">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/services#pose" className="hover:text-blue-400 transition-colors">
                  Pose
                </Link>
              </li>
            </ul>
          </div>

          {/* Protection */}
          <div>
            <h3 className="text-xl font-bold mb-4">Protection</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/protection#clotures" className="hover:text-blue-400 transition-colors">
                  Clôtures
                </Link>
              </li>
              <li>
                <Link href="/protection#controle-acces" className="hover:text-blue-400 transition-colors">
                  Contrôle d&apos;accès
                </Link>
              </li>
              <li>
                <Link href="/protection#alarmes" className="hover:text-blue-400 transition-colors">
                  Alarmes
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional */}
          <div>
            <h3 className="text-xl font-bold mb-4">Professionnel</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pro#issues-secours" className="hover:text-blue-400 transition-colors">
                  Issues de secours
                </Link>
              </li>
              <li>
                <Link href="/pro#portes-vitrees" className="hover:text-blue-400 transition-colors">
                  Portes vitrées
                </Link>
              </li>
              <li>
                <Link href="/pro#coupe-feu" className="hover:text-blue-400 transition-colors">
                  Portes coupe-feu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SERU PRESTA. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Mentions légales
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link href="/politique-confidentialite" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
