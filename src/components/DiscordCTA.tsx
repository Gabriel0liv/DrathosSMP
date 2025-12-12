import { motion } from 'motion/react';

const minecraftBg = '/backgrounds/sections/BackgroundGif02.gif';

// Discord Icon Component
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 127.14 96.36" className={className} fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

// Greek Border Pattern Component
function GreekBorder({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div className={`absolute ${position}-0 left-0 right-0 h-16 flex items-center justify-center overflow-hidden opacity-30`}>
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`greekPattern${position}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0,10 L10,10 L10,0 L20,0 L20,20 L30,20 L30,10 L40,10 L40,30 L30,30 L30,40 L10,40 L10,30 L0,30 Z"
              fill="none"
              stroke="rgb(var(--color-celestial))"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#greekPattern${position})`} />
      </svg>
    </div>
  );
}

export function DiscordCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image - Minecraft Greek Temple */}
      <div className="absolute inset-0 z-0">
        <img src={minecraftBg} alt="Minecraft Greek Temple Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <GreekBorder position="top" />
      <GreekBorder position="bottom" />

      <div className="max-w-3xl mx-auto relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 bg-gradient-to-r from-celestial via-amber-100 to-celestial bg-clip-text text-transparent"
          >
            Entre no nosso Discord
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Junte-se à comunidade de semideuses, participe de eventos épicos e receba suporte da nossa equipe divina.
          </motion.p>

          <motion.a
            href="https://discord.gg/drathos"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-xl bg-black/40 backdrop-blur-md border-2 border-celestial/40 hover:border-celestial/70 hover:bg-black/50 text-white transition-all duration-200 shadow-lg hover:shadow-celestial/30"
          >
            <DiscordIcon className="w-5 h-5 text-celestial" />
            <span className="text-lg uppercase tracking-wide">Entrar no Discord</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
