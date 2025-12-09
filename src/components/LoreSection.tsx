import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const loreChapters = [
  {
    title: 'O Despertar de Drathos',
    status: 'revealed',
    preview: 'No princípio, quando o mundo era apenas caos, três forças primordiais emergiram...',
  },
  {
    title: 'A Divisão dos Reinos',
    status: 'revealed',
    preview: 'Os deuses dividiram Drathos em três domínios: céus dourados, terras férteis e profundezas sombrias...',
  },
  {
    title: 'O Chamado dos Semideuses',
    status: 'revealed',
    preview: 'Mortais especiais surgiram, abençoados com sangue divino e destinados a grandes feitos...',
  },
  {
    title: 'A Primeira Competição',
    status: 'locked',
    preview: 'Conteúdo bloqueado - participe do servidor para desbloquear.',
  },
  {
    title: 'O Enigma Ancestral',
    status: 'locked',
    preview: 'Conteúdo bloqueado - resolva os enigmas para revelar.',
  },
];

export function LoreSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgb(15,15,25)] to-[rgb(10,10,15)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">A Lore de Drathos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Descubra os segredos e a história que moldou este mundo.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loreChapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-xl border-2 backdrop-blur-sm transition-all ${
                chapter.status === 'locked'
                  ? 'border-white/10 bg-white/5 opacity-60'
                  : 'border-white/20 bg-white/5 hover:border-celestial/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    chapter.status === 'locked' ? 'bg-white/5' : 'bg-celestial/10 group-hover:bg-celestial/20'
                  } transition-colors flex items-center justify-center w-16 h-16`}
                >
                  <ImageWithFallback
                    src={chapter.status === 'locked' ? '/symbols/lock.png' : '/symbols/scroll-open.png'}
                    alt={chapter.status === 'locked' ? 'Locked' : 'Scroll'}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h4 className={`mb-3 ${chapter.status === 'locked' ? 'text-gray-500' : ''}`}>{chapter.title}</h4>
                  <p className={chapter.status === 'locked' ? 'text-gray-600 italic' : 'text-gray-400'}>{chapter.preview}</p>

                  {chapter.status === 'revealed' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex items-center gap-2 text-sm text-celestial hover:text-celestial/80 transition-colors"
                    >
                      <div className="w-4 h-4">
                        <ImageWithFallback src="/symbols/book-open.png" alt="Read" className="w-full h-full object-contain" />
                      </div>
                      Ler capítulo completo
                    </motion.button>
                  )}
                </div>
              </div>

              {chapter.status === 'revealed' && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-abissal/10 via-celestial/10 to-terreal/10 border border-white/20"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12">
                <ImageWithFallback src="/symbols/puzzle.png" alt="Puzzle" className="w-full h-full object-contain" />
              </div>
              <h3>Enigmas Ancestrais</h3>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Desvende os mistérios deixados pelos deuses antigos. Cada enigma revelará mais sobre a história de Drathos e desbloqueará recompensas
              únicas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/30 hover:border-celestial/50 hover:bg-celestial/10 transition-all"
            >
              Ver Enigmas Ativos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
