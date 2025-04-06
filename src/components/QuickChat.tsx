'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaPaperPlane, FaTimesCircle } from 'react-icons/fa';

export default function QuickChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le message
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Ouvrir le chat"
        title="Demander un devis"
      >
        <FaComments className="w-6 h-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl w-80"
          >
            <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-bold">Demande de Devis Rapide</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Fermer le chat"
                title="Fermer"
              >
                <FaTimesCircle className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label htmlFor="quickMessage" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="quickMessage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre besoin..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={4}
                  aria-label="Votre message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                aria-label="Envoyer le message"
              >
                <span>Envoyer</span>
                <FaPaperPlane className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
