'use client';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  return (
    <div className="pt-24">
      {/* Header */}
      <motion.div
        className="bg-gray-900 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-xl">Informations légales et réglementaires</p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site seru-presta.fr est édité par :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>SERU PRESTA</li>
              <li>Forme juridique : Entreprise individuelle</li>
              <li>Siège social : [Adresse à compléter]</li>
              <li>SIRET : [Numéro à compléter]</li>
              <li>Téléphone : 06.95.98.93.05</li>
              <li>Email : contact@seru-presta.fr</li>
            </ul>
            <p>
              Directeur de la publication : [Nom du responsable]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
            <p>
              Le site seru-presta.fr est hébergé par :
              [Informations de l&apos;hébergeur à compléter]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de SERU PRESTA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
            <p className="mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              SERU PRESTA ne peut être tenu responsable de tout dommage direct ou indirect résultant de l&apos;utilisation de ce site internet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Liens hypertextes</h2>
            <p className="mb-4">
              Les sites internet peuvent offrir des liens vers d&apos;autres sites internet ou d&apos;autres ressources disponibles sur Internet.
            </p>
            <p>
              SERU PRESTA ne dispose d&apos;aucun moyen pour contrôler les sites en connexion avec ses sites internet. Il ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Modification des mentions légales</h2>
            <p>
              SERU PRESTA se réserve le droit de modifier la présente notice à tout moment. L&apos;utilisateur s&apos;engage donc à la consulter régulièrement.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
