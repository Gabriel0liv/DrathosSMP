import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cloud, Zap, Sparkles, Droplets, Leaf, Flame, Moon, Flower2, Shield, Swords } from 'lucide-react';

const celestialCrest = '/symbols/domus/DomusCelestial.png';
const terrealCrest = '/symbols/domus/DomusTerreal.png';
const abissalCrest = '/symbols/domus/DomusAbissal.png';
const celestialBg = '/backgrounds/domus/fundoCelestial.gif';
const terrealBg = '/backgrounds/domus/fundoTerreal.gif';
const abissalBg = '/backgrounds/domus/fundoAbissal.gif';

const domusData = [
  {
    name: 'Domus Celestial',
    crestImage: celestialCrest,
    backgroundImage: celestialBg,
    colorRgb: '255 215 0',
    borderColor: 'border-[rgb(255,215,0)]',
    textColor: 'text-[rgb(255,215,0)]',
    bgGradient: 'bg-gradient-to-br from-blue-500/10 to-blue-300/5',
    gods: ['Zeus', 'Hermes', 'Hera', 'Dionísio', 'Apollo'],
    description: 'O reino dos céus, onde trovões ecoam e a luz divina ilumina os escolhidos.',
  },
  {
    name: 'Domus Terreal',
    crestImage: terrealCrest,
    backgroundImage: terrealBg,
    colorRgb: '34 139 34',
    borderColor: 'border-[rgb(34,139,34)]',
    textColor: 'text-[rgb(34,139,34)]',
    bgGradient: 'bg-gradient-to-br from-green-500/10 to-green-400/5',
    gods: ['Poseidon', 'Athena', 'Demeter', 'Hefesto', 'Afrodite'],
    description: 'Entre mares e terras, onde a sabedoria e o trabalho forjam heróis.',
  },
  {
    name: 'Domus Abissal',
    crestImage: abissalCrest,
    backgroundImage: abissalBg,
    colorRgb: '139 92 246',
    borderColor: 'border-[rgb(139,92,246)]',
    textColor: 'text-[rgb(139,92,246)]',
    bgGradient: 'bg-gradient-to-br from-purple-500/10 to-purple-300/5',
    gods: ['Hades', 'Perséfone', 'Ártemis', 'Ares'],
    description: 'Das profundezas emergem guerreiros e caçadores, onde as sombras reinam.',
  },
];

interface DomusCardProps {
  domus: typeof domusData[0];
  index: number;
}

function DomusCard({ domus, index }: DomusCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className={`relative rounded-2xl overflow-hidden border-2 ${domus.borderColor} ${domus.bgGradient} backdrop-blur-sm`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={domus.backgroundImage}
            alt={`${domus.name} Background`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(10,10,15)]/70 via-[rgb(10,10,15)]/80 to-[rgb(10,10,15)]/95 z-[1]" />

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
              <ImageWithFallback
                src={domus.crestImage}
                alt={`${domus.name} Symbol`}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className={`${domus.textColor}`}>{domus.name}</h3>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{domus.description}</p>

          {/* Deuses - Auto-scrolling carousel */}
          <div className="space-y-3 mt-auto">
            <h4 className="text-sm uppercase tracking-wider text-gray-400">Deuses</h4>
            <div
              className="relative overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              }}
            >
              <motion.div
                animate={{
                  x: [0, -100 * domus.gods.length],
                }}
                transition={{
                  x: {
                    duration: 20 + domus.gods.length * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex gap-2"
              >
                {/* Duplicate gods array for seamless infinite scroll */}
                {[...domus.gods, ...domus.gods, ...domus.gods].map((god, idx) => (
                  <span
                    key={`${god}-${idx}`}
                    className={`px-4 py-2 rounded-full text-sm bg-white/10 border ${domus.borderColor}/30 ${domus.textColor} backdrop-blur-sm whitespace-nowrap flex-shrink-0`}
                  >
                    {god}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-3xl"
          style={{
            background: `radial-gradient(circle at center, rgb(${domus.colorRgb}) 0%, transparent 70%)`,
          }}
        />

        {/* Domus-specific animated particles */}
        {/* CELESTIAL: Clouds, Lightning, Sparkles (Zeus, Hera, Apollo, Hermes, Dionísio) */}
        {domus.name === 'Domus Celestial' && (
          <>
            {/* Floating clouds */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`cloud-${i}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: [0, 100, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3,
                }}
                className="absolute top-[20%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ left: `${20 + i * 30}%` }}
              >
                <Cloud className="w-8 h-8 text-blue-300/30" />
              </motion.div>
            ))}

            {/* Lightning flashes (Zeus) */}
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="absolute top-[15%] right-[15%] z-0"
            >
              <Zap className="w-6 h-6 text-yellow-300/60" />
            </motion.div>

            {/* Golden sparkles (Apollo - luz dourada) */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, -60, -20],
                  x: [0, Math.random() * 40 - 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
                className="absolute bottom-[25%] z-0"
                style={{ left: `${15 + i * 10}%` }}
              >
                <Sparkles className="w-4 h-4 text-yellow-300/50" />
              </motion.div>
            ))}
          </>
        )}

        {/* TERREAL: Water drops, Leaves, Forge sparks (Poseidon, Deméter, Athena, Hefesto, Afrodite) */}
        {domus.name === 'Domus Terreal' && (
          <>
            {/* Falling leaves (Deméter - grãos e folhas) */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`leaf-${i}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, 400],
                  rotate: [0, 360],
                  x: [0, Math.sin(i) * 50, 0],
                }}
                transition={{
                  duration: 8 + i * 1.5,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "linear",
                }}
                className="absolute top-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ left: `${10 + i * 15}%` }}
              >
                <Leaf className="w-5 h-5 text-green-400/50" />
              </motion.div>
            ))}

            {/* Water droplets (Poseidon - águas correntes) */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`water-${i}`}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[20%] z-0"
                style={{ left: `${20 + i * 15}%` }}
              >
                <Droplets className="w-4 h-4 text-blue-400/50" />
              </motion.div>
            ))}

            {/* Forge sparks (Hefesto - trabalho constante) */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`spark-${i}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -30],
                  x: [0, Math.random() * 20 - 10],
                  scale: [0.5, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
                className="absolute bottom-[15%] right-[20%] z-0"
              >
                <Flame className="w-3 h-3 text-orange-400/60" />
              </motion.div>
            ))}
          </>
        )}

        {/* ABISSAL: Shadows, Flowers, Moon, Weapons (Hades, Perséfone, Ártemis, Ares) */}
        {domus.name === 'Domus Abissal' && (
          <>
            {/* Floating moon (representing the underworld's eternal night) */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[10%] right-[15%] z-0"
            >
              <Moon className="w-10 h-10 text-purple-300/40" />
            </motion.div>

            {/* Small flowers growing (Perséfone - pequenos jardins discretos) */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`flower-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0.6],
                  scale: [0, 1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: i * 1,
                  ease: "easeOut",
                }}
                className="absolute bottom-[10%] z-0"
                style={{ left: `${15 + i * 20}%` }}
              >
                <Flower2 className="w-5 h-5 text-pink-300/50" />
              </motion.div>
            ))}

            {/* Floating shields (Ares - defesa e treinamento) */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[30%] left-[15%] z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            >
              <Shield className="w-8 h-8 text-purple-400/40" />
            </motion.div>

            {/* Crossing swords (Ares - armas e disciplina) */}
            <motion.div
              animate={{
                rotate: [0, 360],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-[30%] right-[15%] z-0"
            >
              <Swords className="w-7 h-7 text-red-400/40" />
            </motion.div>

            {/* Shadow wisps (Hades - quietude e transformação) */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`shadow-${i}`}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeInOut",
                }}
                className="absolute z-0"
                style={{
                  top: `${30 + i * 10}%`,
                  left: `${10 + i * 15}%`,
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}

export function DomusSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[rgb(10,10,15)] to-[rgb(15,15,25)]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top left celestial symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-64 h-64"
        >
          <img
            src={celestialCrest}
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>

        {/* Bottom right abyssal symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-72 h-72"
        >
          <img
            src={abissalCrest}
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>

        {/* Center terreal symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
        >
          <img
            src={terrealCrest}
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'blur(2px)' }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgb(255,215,0)' : i % 3 === 1 ? 'rgb(34,139,34)' : 'rgb(139,92,246)',
              boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgb(255,215,0)' : i % 3 === 1 ? 'rgb(34,139,34)' : 'rgb(139,92,246)'}`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-1/4 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,139,34,0.3) 0%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Additional orbs */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/5 w-44 h-44 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.25) 0%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,139,34,0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* ZEUS - Lightning effects (Celestial leader) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0.6, 0.3, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 8 + i * 3,
              delay: i * 2,
            }}
            className="absolute top-0 w-1 bg-gradient-to-b from-yellow-200/60 via-yellow-400/40 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              height: '40%',
              filter: 'blur(2px)',
              boxShadow: '0 0 20px rgba(255,215,0,0.5)',
            }}
          />
        ))}

        {/* Additional lightning flashes */}
        <motion.div
          animate={{
            opacity: [0, 0, 0.4, 0, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 10,
          }}
          className="absolute top-10 right-1/4 w-2 h-1/3 bg-gradient-to-b from-yellow-300/50 via-yellow-200/30 to-transparent"
          style={{
            filter: 'blur(3px)',
            boxShadow: '0 0 30px rgba(255,215,0,0.6)',
          }}
        />

        {/* POSEIDON - Rain effects (Terreal leader) */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [0, 1000],
              opacity: [0, 0.2, 0.15, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
            className="absolute w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-300/40 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}

        {/* HADES - Shadow/Sculk effects (Abyssal leader) */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shadow-${i}`}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
              x: [0, Math.sin(i) * 30, 0],
              y: [0, Math.cos(i) * 20, 0],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(40,20,60,0.3) 40%, transparent 70%)',
              filter: 'blur(25px)',
            }}
          />
        ))}

        {/* Additional dark sculk wisps */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sculk-${i}`}
            animate={{
              opacity: [0, 0.1, 0],
              y: [0, -50, -100],
              x: [0, Math.sin(i * 0.5) * 20, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              bottom: `${Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(20,10,30,0.8) 0%, rgba(60,30,80,0.4) 50%, transparent 70%)',
              boxShadow: '0 0 15px rgba(60,30,80,0.3)',
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Os Três Domus</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha sua casa e junte-se aos deuses em competições épicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {domusData.map((domus, index) => (
            <DomusCard key={domus.name} domus={domus} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

