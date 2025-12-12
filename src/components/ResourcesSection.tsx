import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const moirasImage = '/resources/moiras.png';

const colorText: Record<'celestial' | 'terreal' | 'abissal', string> = {
  celestial: 'text-celestial',
  terreal: 'text-terreal',
  abissal: 'text-abissal',
};

const colorTextHover: Record<'celestial' | 'terreal' | 'abissal', string> = {
  celestial: 'text-celestial group-hover:text-celestial',
  terreal: 'text-terreal group-hover:text-terreal',
  abissal: 'text-abissal group-hover:text-abissal',
};

const resources = [
  {
    date: 'Guia Completo',
    title: 'Auxílio Lore',
    description:
      'Guias completos para criar a história do seu semideus, com orientações específicas para cada divindade e exemplos de lore.',
    color: 'celestial' as const,
  },
  {
    date: 'Dúvidas',
    title: 'FAQ',
    description:
      'Perguntas frequentes sobre o servidor, regras, mecânicas e como participar das competições entre Domus.',
    color: 'terreal' as const,
  },
  {
    date: 'História',
    title: 'Lore do Mundo',
    description: 'Descubra a história de Drathos, a origem dos três Domus e os conflitos entre as divindades gregas.',
    color: 'abissal' as const,
  },
];

export function ResourcesSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[rgb(15,15,25)] to-[rgb(10,10,15)]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -right-32 bottom-0 h-[90vh] w-auto flex items-end justify-end z-0"
      >
        <img src={moirasImage} alt="As Moiras" className="h-full w-auto object-contain object-bottom" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Recursos e Guias</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tudo o que você precisa para começar sua jornada.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl space-y-4"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              whileHover={{ x: 15, transition: { duration: 0.2 } }}
              className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>

                  <h4 className={`mb-2 transition-colors duration-300 ${colorTextHover[resource.color]}`}>
                    {resource.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">{resource.description}</p>
                </div>

                <div className="flex items-center flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`text-4xl leading-none ${colorText[resource.color]}`}>&gt;</div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl"
                style={{
                  background: `radial-gradient(circle at left, rgb(var(--color-${resource.color})) 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
