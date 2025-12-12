import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const colorText: Record<'celestial' | 'terreal' | 'abissal', string> = {
  celestial: 'text-celestial',
  terreal: 'text-terreal',
  abissal: 'text-abissal',
};

const colorBorder: Record<'celestial' | 'terreal' | 'abissal', string> = {
  celestial: 'border-celestial',
  terreal: 'border-terreal',
  abissal: 'border-abissal',
};

const colorRgb: Record<'celestial' | 'terreal' | 'abissal', string> = {
  celestial: '255, 215, 0',
  terreal: '34, 139, 34',
  abissal: '139, 92, 246',
};

const newsItems = [
  {
    date: '9 Dez 2024',
    title: 'Grande Competição dos Domus Anunciada',
    description: 'Prepare-se para a batalha épica entre Celestial, Terreal e Abissal. Prêmios exclusivos para os vencedores!',
    symbolPath: '/symbols/trophy.png',
    color: 'celestial' as const,
  },
  {
    date: '5 Dez 2024',
    title: 'Novos Semideuses Chegaram',
    description: '12 novos jogadores foram abençoados pelos deuses e se juntaram aos Domus. Dê boas-vindas aos novatos!',
    symbolPath: '/symbols/users.png',
    color: 'terreal' as const,
  },
  {
    date: '1 Dez 2024',
    title: 'Capítulo 2 da Lore Liberado',
    description: 'A história de Drathos continua. Descubra os segredos da divisão dos reinos e o que motivou os deuses.',
    symbolPath: '/symbols/lightning.png',
    color: 'abissal' as const,
  },
];

export function NewsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Novidades</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Fique por dentro das últimas atualizações e eventos.</p>
        </motion.div>

        <div className="space-y-6">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
              className="group relative p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div
                  className={`p-4 rounded-xl w-20 h-20 flex items-center justify-center flex-shrink-0 ${colorBorder[news.color]}`}
                  style={{
                    backgroundColor: `rgba(${colorRgb[news.color]}, 0.1)`,
                    borderColor: `rgba(${colorRgb[news.color]}, 0.3)`,
                  }}
                >
                  <ImageWithFallback src={news.symbolPath} alt={news.title} className="w-12 h-12 object-contain" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>

                  <h4 className={`mb-2 transition-colors ${colorText[news.color]}`}>{news.title}</h4>
                  <p className="text-gray-400">{news.description}</p>
                </div>

                <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-2xl text-celestial">→</div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                style={{
                  background: `radial-gradient(circle at left, rgb(var(--color-${news.color})) 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-celestial/5 via-terreal/5 to-abissal/5 border border-white/20 text-center"
        >
          <h3 className="mb-4">Não perca nenhuma novidade</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Entre no nosso Discord para receber notificações de eventos, atualizações e competições em tempo real.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="px-8 py-3 rounded-lg bg-celestial/20 border border-celestial/50 text-celestial hover:bg-celestial/30 transition-all duration-200"
          >
            Entrar no Discord
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
