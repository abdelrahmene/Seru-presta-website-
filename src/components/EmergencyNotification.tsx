'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaTimesCircle } from 'react-icons/fa';

export default function EmergencyNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-sm"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-white rounded-full p-1"
            aria-label="Fermer la notification d'urgence"
            title="Fermer"
          >
            <FaTimesCircle className="text-red-600 w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              <FaPhone className="text-red-600 w-6 h-6 animate-pulse" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Urgence Serrurerie ?</h3>
              <p className="text-sm mb-2">
                Notre équipe intervient 24h/24, 7j/7
              </p>
              <a
                href="tel:0695989305"
                className="inline-block bg-white text-red-600 px-4 py-2 rounded font-semibold hover:bg-red-50 transition-colors"
                aria-label="Appeler le service d'urgence"
              >
                06.95.98.93.05
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
