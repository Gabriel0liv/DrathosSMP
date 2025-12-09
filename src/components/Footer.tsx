import { Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const drathosLogo = '/symbols/logo-sword.png';

// Discord Icon Component
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 127.14 96.36" className={className} fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

// X (Twitter) Icon Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// TikTok Icon Component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg-darker))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={drathosLogo} alt="Drathos Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 max-w-md">
              Um servidor de Minecraft SMP inspirado na mitologia grega. Escolha seu Domus, honre os deuses e
              torne-se uma lenda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-celestial transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-400 hover:text-celestial transition-colors">Deuses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-celestial transition-colors">Domus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-celestial transition-colors">Como Jogar</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Comunidade</h4>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-celestial/50 transition-colors"
              >
                <DiscordIcon className="w-5 h-5 text-gray-400 hover:text-celestial" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-celestial/50 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-celestial" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-celestial/50 transition-colors"
              >
                <XIcon className="w-5 h-5 text-gray-400 hover:text-celestial" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-celestial/50 transition-colors"
              >
                <TikTokIcon className="w-5 h-5 text-gray-400 hover:text-celestial" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Drathos SMP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
