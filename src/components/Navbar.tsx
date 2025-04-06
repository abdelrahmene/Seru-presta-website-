'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaShieldAlt, FaIndustry, FaCogs, FaGlasses, FaBuilding, FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { name: 'Accueil', href: '/', icon: null },
  { name: 'Nos Services', href: '/services', icon: FaTools },
  { name: 'Protection Habitat', href: '/protection', icon: FaShieldAlt },
  { name: 'Métallerie', href: '/metallerie', icon: FaIndustry },
  { name: 'Automatismes', href: '/automatismes', icon: FaCogs },
  { name: 'Vitrerie', href: '/vitrerie', icon: FaGlasses },
  { name: 'Professionnelle', href: '/pro', icon: FaBuilding },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">SERU PRESTA</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="mr-2 h-5 w-5" />}
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Emergency Contact */}
      <div className="bg-blue-600 text-white py-2 text-center">
        <p className="text-sm">
          Dépannage 24/7 : <a href="tel:0695989305" className="font-bold">06.95.98.93.05</a>
        </p>
      </div>
    </nav>
  );
}
