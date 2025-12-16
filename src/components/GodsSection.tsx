import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const godsData = [
  { name: 'Zeus', symbolPath: '/resources/gods/symbols/zeusSymbol.PNG', domus: 'celestial', title: 'Rei dos Deuses' },
  { name: 'Hermes', symbolPath: '/resources/gods/symbols/hermesSymbol.PNG', domus: 'celestial', title: 'Mensageiro dos Deuses' },
  { name: 'Hera', symbolPath: '/resources/gods/symbols/heraSymbol.PNG', domus: 'celestial', title: 'Rainha do Olimpo' },
  { name: 'Dionísio', symbolPath: '/resources/gods/symbols/dionisioSymbol.PNG', domus: 'celestial', title: 'Deus do Vinho' },
  { name: 'Apollo', symbolPath: '/resources/gods/symbols/apoloSymbol.PNG', domus: 'celestial', title: 'Deus do Sol' },

  { name: 'Poseidon', symbolPath: '/resources/gods/symbols/poseidonSymbol.PNG', domus: 'terreal', title: 'Senhor dos Mares' },
  { name: 'Athena', symbolPath: '/resources/gods/symbols/athenaSymbol.PNG', domus: 'terreal', title: 'Deusa da Sabedoria' },
  { name: 'Demeter', symbolPath: '/resources/gods/symbols/demeterSymbol.PNG', domus: 'terreal', title: 'Deusa da Colheita' },
  { name: 'Hefesto', symbolPath: '/resources/gods/symbols/hefestoSymbol.PNG', domus: 'terreal', title: 'Deus da Forja' },
  { name: 'Afrodite', symbolPath: '/resources/gods/symbols/afroditeSymbol.PNG', domus: 'terreal', title: 'Deusa do Amor' },

  { name: 'Hades', symbolPath: '/resources/gods/symbols/hadesSymbol.PNG', domus: 'abissal', title: 'Senhor do Submundo' },
  { name: 'Perséfone', symbolPath: '/resources/gods/symbols/persefoneSymbol.PNG', domus: 'abissal', title: 'Rainha do Submundo' },
  { name: 'Ártemis', symbolPath: '/resources/gods/symbols/artemisSymbol.PNG', domus: 'abissal', title: 'Deusa da Caça' },
  { name: 'Ares', symbolPath: '/resources/gods/symbols/aresSymbol.PNG', domus: 'abissal', title: 'Deus da Guerra' },
];

const domusColors = {
  celestial: 'text-celestial border-celestial bg-celestial/5 hover:bg-celestial/10',
  terreal: 'text-terreal border-terreal bg-terreal/5 hover:bg-terreal/10',
  abissal: 'text-abissal border-abissal bg-abissal/5 hover:bg-abissal/10',
};

interface GodsSectionProps {
  setActiveSection: (section: string) => void;
}

export function GodsSection({ setActiveSection }: GodsSectionProps) {
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
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`flex flex-col items-center text-center px-6 py-3 rounded-xl border-2 backdrop-blur-sm transition-all duration-200 cursor-pointer ${domusColors[god.domus as keyof typeof domusColors]}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection(`deuses/${god.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`);
      }}
    >
      {/* PNG Symbol for each god */}
      <div className="w-24 h-24 mb-1 mx-auto flex items-center justify-center">
        <ImageWithFallback
          src={god.symbolPath}
          alt={`${god.name} Symbol`}
          className={`w-full h-full object-contain ${['Hades', 'Ares', 'Ártemis'].includes(god.name) ? 'scale-125' : ''}`}
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