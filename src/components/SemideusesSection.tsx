import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type DomusColor = 'celestial' | 'terreal' | 'abissal';

const colorText: Record<DomusColor, string> = {
  celestial: 'text-celestial',
  terreal: 'text-terreal',
  abissal: 'text-abissal',
};

const colorBorder: Record<DomusColor, string> = {
  celestial: 'border-celestial',
  terreal: 'border-terreal',
  abissal: 'border-abissal',
};

const sampleSemideuses: Array<{
  name: string;
  god: string;
  domus: string;
  color: DomusColor;
  skinGif: string;
}> = [
    {
      name: 'PlayerExample1',
      god: 'Zeus',
      domus: 'Celestial',
      color: 'celestial',
      skinGif: '/skins/player1.gif', // GIF da skin de Minecraft
    },
    {
      name: 'PlayerExample2',
      god: 'Poseidon',
      domus: 'Terreal',
      color: 'terreal',
      skinGif: '/skins/player2.gif',
    },
    {
      name: 'PlayerExample3',
      god: 'Hades',
      domus: 'Abissal',
      color: 'abissal',
      skinGif: '/skins/player3.gif',
    },
  ];

export function SemideusesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgb(15,15,25)] to-[rgb(10,10,15)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Semideuses</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça os heróis que caminham entre mortais e deuses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleSemideuses.map((semideus, index) => (
            <motion.div
              key={semideus.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-200"
            >
              {/* Minecraft Skin GIF */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                <ImageWithFallback
                  src={semideus.skinGif}
                  alt={`${semideus.name} Minecraft Skin`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-center mb-2">{semideus.name}</h4>
              <p className="text-center text-sm text-gray-400 mb-3">
                Filho de <span className={colorText[semideus.color]}>{semideus.god}</span>
              </p>
              <div
                className={`text-center text-xs px-3 py-1 rounded-full inline-block w-full ${colorText[semideus.color]} ${colorBorder[semideus.color]}`}
                style={{
                  backgroundColor: `rgba(${semideus.color === 'celestial' ? '255, 215, 0' : semideus.color === 'terreal' ? '34, 139, 34' : '139, 92, 246'}, 0.1)`,
                  borderColor: `rgba(${semideus.color === 'celestial' ? '255, 215, 0' : semideus.color === 'terreal' ? '34, 139, 34' : '139, 92, 246'}, 0.3)`,
                }}
              >
                {semideus.domus}
              </div>
            </motion.div>
          ))}

          {/* Add More Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="p-6 rounded-xl bg-white/5 border-2 border-dashed border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center min-h-[280px]"
          >
            <Plus className="w-12 h-12 text-gray-500 mb-3" />
            <h4 className="text-gray-400 text-center">Mais semideuses em breve</h4>
            <p className="text-sm text-gray-500 text-center mt-2">
              Entre no servidor e torne-se uma lenda
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
