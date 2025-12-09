import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const godsData = [
  { name: 'Zeus', symbolPath: '/symbols/gods/zeus.png', domus: 'celestial', title: 'Rei dos Deuses' },
  { name: 'Hermes', symbolPath: '/symbols/gods/hermes.png', domus: 'celestial', title: 'Mensageiro dos Deuses' },
  { name: 'Hera', symbolPath: '/symbols/gods/hera.png', domus: 'celestial', title: 'Rainha do Olimpo' },
  { name: 'Dionísio', symbolPath: '/symbols/gods/dionisio.png', domus: 'celestial', title: 'Deus do Vinho' },
  { name: 'Apollo', symbolPath: '/symbols/gods/apollo.png', domus: 'celestial', title: 'Deus do Sol' },
  
  { name: 'Poseidon', symbolPath: '/symbols/gods/poseidon.png', domus: 'terreal', title: 'Senhor dos Mares' },
  { name: 'Athena', symbolPath: '/symbols/gods/athena.png', domus: 'terreal', title: 'Deusa da Sabedoria' },
  { name: 'Demeter', symbolPath: '/symbols/gods/demeter.png', domus: 'terreal', title: 'Deusa da Colheita' },
  { name: 'Hefesto', symbolPath: '/symbols/gods/hefesto.png', domus: 'terreal', title: 'Deus da Forja' },
  { name: 'Afrodite', symbolPath: '/symbols/gods/afrodite.png', domus: 'terreal', title: 'Deusa do Amor' },
  
  { name: 'Hades', symbolPath: '/symbols/gods/hades.png', domus: 'abissal', title: 'Senhor do Submundo' },
  { name: 'Perséfone', symbolPath: '/symbols/gods/persefone.png', domus: 'abissal', title: 'Rainha do Submundo' },
  { name: 'Ártemis', symbolPath: '/symbols/gods/artemis.png', domus: 'abissal', title: 'Deusa da Caça' },
  { name: 'Ares', symbolPath: '/symbols/gods/ares.png', domus: 'abissal', title: 'Deus da Guerra' },
];

const domusColors = {
  celestial: 'text-celestial border-celestial bg-celestial/5 hover:bg-celestial/10',
  terreal: 'text-terreal border-terreal bg-terreal/5 hover:bg-terreal/10',
  abissal: 'text-abissal border-abissal bg-abissal/5 hover:bg-abissal/10',
};

export function GodsSection() {
  const celestialGods = godsData.filter(g => g.domus === 'celestial');
  const terrealGods = godsData.filter(g => g.domus === 'terreal');
  const abissalGods = godsData.filter(g => g.domus === 'abissal');

  const renderGodCard = (god: typeof godsData[0], index: number) => (
    <motion.div
      key={god.name}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl border-2 backdrop-blur-sm transition-all cursor-pointer ${domusColors[god.domus as keyof typeof domusColors]}`}
    >
      {/* PNG Symbol for each god */}
      <div className="w-16 h-16 mb-3 mx-auto flex items-center justify-center">
        <ImageWithFallback 
          src={god.symbolPath}
          alt={`${god.name} Symbol`}
          className="w-full h-full object-contain"
        />
      </div>
      <h4 className="mb-1">{god.name}</h4>
      <p className="text-sm text-gray-400">{god.title}</p>
    </motion.div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgb(10,10,15)] to-[rgb(15,15,25)]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Os 14 Deuses de Drathos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça as divindades que governam os três reinos
          </p>
        </motion.div>

        {/* Celestial Gods */}
        <div className="mb-16">
          <h3 className="text-celestial mb-6 text-center">Domus Celestial</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {celestialGods.map((god, index) => renderGodCard(god, index))}
          </div>
        </div>

        {/* Terreal Gods */}
        <div className="mb-16">
          <h3 className="text-terreal mb-6 text-center">Domus Terreal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {terrealGods.map((god, index) => renderGodCard(god, index))}
          </div>
        </div>

        {/* Abissal Gods */}
        <div>
          <h3 className="text-abissal mb-6 text-center">Domus Abissal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {abissalGods.map((god, index) => renderGodCard(god, index))}
          </div>
        </div>
      </div>
    </section>
  );
}