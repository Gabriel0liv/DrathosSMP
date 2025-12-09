import { Home, ScrollText, Sparkles, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/sections/BackgroundGif04.gif"
          alt="Minecraft Greek Temple Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--bg-dark))]/50 to-[rgb(var(--bg-dark))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-celestial/10 border border-celestial/30 mb-8"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 215, 0, 0.2)',
                '0 0 40px rgba(255, 215, 0, 0.4)',
                '0 0 20px rgba(255, 215, 0, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 h-5 bg-celestial/30 rounded flex items-center justify-center text-xs text-celestial">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-sm text-celestial">SMP de Mitologia Grega</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-celestial via-white to-celestial bg-clip-text text-transparent">
            DRATHOS
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Adentre o reino dos deuses e semideuses. Escolha seu Domus, forje sua lenda e participe de competições épicas no servidor de Minecraft mais mitológico do Brasil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgb(var(--color-celestial))' }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-celestial/20 rounded-lg flex items-center justify-center">
                  <Crown className="w-8 h-8 text-celestial" />
                </div>
                <h4 className="text-celestial">14 Deuses</h4>
              </div>
              <p className="text-sm text-gray-400">Entidades poderosas aguardam</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgb(var(--color-terreal))' }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-terreal/20 rounded-lg flex items-center justify-center">
                  <Home className="w-8 h-8 text-terreal" />
                </div>
                <h4 className="text-terreal">3 Domus</h4>
              </div>
              <p className="text-sm text-gray-400">Celestial, Terreal e Abissal</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgb(var(--color-abissal))' }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 bg-abissal/20 rounded-lg flex items-center justify-center">
                  <ScrollText className="w-8 h-8 text-abissal" />
                </div>
                <h4 className="text-abissal">Lore épica</h4>
              </div>
              <p className="text-sm text-gray-400">Descubra os segredos de Drathos</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
