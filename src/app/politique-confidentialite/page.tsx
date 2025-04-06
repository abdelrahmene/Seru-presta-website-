'use client';
import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
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
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-xl">Protection de vos données personnelles</p>
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
            <h2 className="text-2xl font-bold mb-4">1. Collecte des données personnelles</h2>
            <p className="mb-4">
              Les données personnelles collectées sur ce site sont les suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale (si nécessaire pour l&apos;intervention)</li>
            </ul>
            <p>
              Ces données sont collectées lorsque vous :
            </p>
            <ul className="list-disc pl-6">
              <li>Remplissez le formulaire de contact</li>
              <li>Demandez un devis</li>
              <li>Prenez rendez-vous pour une intervention</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Utilisation des données</h2>
            <p className="mb-4">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6">
              <li>Répondre à vos demandes de contact</li>
              <li>Établir des devis personnalisés</li>
              <li>Planifier les interventions</li>
              <li>Assurer le suivi de nos prestations</li>
              <li>Vous informer sur nos services (avec votre accord)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Protection des données</h2>
            <p className="mb-4">
              SERU PRESTA s&apos;engage à protéger vos données personnelles et à respecter la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p>
              Vos données sont conservées de manière sécurisée et ne sont en aucun cas vendues ou transmises à des tiers sans votre consentement explicite.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pendant une durée n&apos;excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées et traitées.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Vos droits</h2>
            <p className="mb-4">
              Conformément à la réglementation en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver ces cookies dans les paramètres de votre navigateur.
            </p>
            <p>
              Les cookies utilisés sont essentiellement techniques et ne collectent pas de données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6">
              <li>Par email : contact@seru-presta.fr</li>
              <li>Par téléphone : 06.95.98.93.05</li>
              <li>Par courrier : [Adresse à compléter]</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
