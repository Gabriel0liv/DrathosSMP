import { motion } from 'motion/react';
import { Crown } from 'lucide-react';

// Assets


export function DomusDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(10,10,15)] via-[rgb(15,15,25)] to-[rgb(10,10,15)]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-32">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Celestial orb */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-1/4 w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Terreal orb */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34,139,34,0.3) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />

          {/* Abissal orb */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.sin(i) * 80, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'rgb(255,215,0)' : i % 3 === 1 ? 'rgb(34,139,34)' : 'rgb(139,92,246)',
                boxShadow: `0 0 8px ${i % 3 === 0 ? 'rgb(255,215,0)' : i % 3 === 1 ? 'rgb(34,139,34)' : 'rgb(139,92,246)'}`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <Crown className="w-4 h-4 text-celestial" />
              <span className="text-sm text-gray-300 uppercase tracking-wider">Escolha Seu Destino</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 bg-gradient-to-r from-celestial via-white to-abissal bg-clip-text text-transparent"
            >
              Os Três Domus
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Em Drathos, cada semideus pertence a uma das três casas divinas. Cada Domus carrega o poder e as bênçãos de seus deuses patronos, moldando o destino de seus membros.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DOMUS CELESTIAL */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/backgrounds/domus/fundoCelestial.gif"
            alt="Celestial Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(10,10,15)] via-blue-950/30 via-40% to-[rgb(10,10,15)]" />
        </div>

        {/* Floating clouds effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              animate={{
                x: [-100, 1000],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                delay: i * 5,
                ease: "linear",
              }}
              className="absolute w-64 h-64 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.img
                src="/symbols/domus/DomusCelestial.png"
                alt="Domus Celestial"
                className="w-32 h-32 object-contain"
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="text-center">
                <h2 className="text-celestial mb-2">𝓓omus 𝓒elestial</h2>
                <p className="text-gray-400 text-lg">
                  Deuses representantes: Zeus, Hera, Apolo, Hermes e Dionísio.
                </p>
              </div>
              <motion.img
                src="/symbols/domus/DomusCelestial.png"
                alt="Domus Celestial"
                className="w-32 h-32 object-contain"
                initial={{ rotate: 10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* A Mansão */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-celestial/30"
              >
                <h3 className="text-celestial mb-4">✦ A Mansão</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  O Domus Celestial ergue-se onde o vento repousa e a luz encontra refúgio. Uma morada tecida pelas próprias mãos dos deuses que governam o céu, sob o estrondo distante de Zeus, cada parede carrega o pressentimento da tempestade e a promessa da proteção divina. Hera, com sua presença altiva, dita o ritmo da ordem e da dignidade que permeiam cada salão, como se o ar ali soubesse que deve se portar com nobreza. Nos jardins suspensos, Dionísio deixa marcas de seu êxtase indomável: vinhas que dançam ao menor sopro, risos que ecoam entre nuvens, cores que jamais se repetem. Apolo, em sua clareza dourada, ilumina o Domus com uma luz que não cega, apenas revela. É ele quem afasta sombras internas e desperta a arte adormecida em cada morador. E por fim, Hermes, sempre em movimento, faz as portas sussurrarem segredos antigos, conduzindo mensagens, caminhos e acasos com sua leveza encantada.
                </p>
              </motion.div>

              {/* O que Significa */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-celestial/10 to-blue-500/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-celestial/20"
              >
                <h3 className="text-celestial mb-4">✦ O que Significa?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Habitar o Domus Celestial é aprender a caminhar entre brisas sagradas: força que nunca oprime, beleza que nunca foge, e liberdade que, em vez de dispersar, guia. É o lugar onde o céu se faz lar, e onde cada semideus que ali reside, descobre que até o vento pode carregar um propósito.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOMUS TERREAL */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/backgrounds/domus/fundoTerreal.gif"
            alt="Terreal Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(10,10,15)] via-green-950/30 via-50% to-[rgb(10,10,15)]" />
        </div>

        {/* Falling leaves effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              animate={{
                y: [-100, 1000],
                x: [0, Math.sin(i) * 100],
                rotate: [0, 360],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              className="absolute w-3 h-3 rounded-full bg-terreal/40"
              style={{
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.img
                src="/symbols/domus/DomusTerreal.png"
                alt="Domus Terreal"
                className="w-32 h-32 object-contain"
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="text-center">
                <h2 className="text-terreal mb-2">O Domus Terreal</h2>
                <p className="text-gray-400 text-lg">
                  Deuses representantes: Poseidon, Athena, Hefesto, Deméter e Afrodite.
                </p>
              </div>
              <motion.img
                src="/symbols/domus/DomusTerreal.png"
                alt="Domus Terreal"
                className="w-32 h-32 object-contain"
                initial={{ rotate: 10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* A Mansão */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-terreal/30"
              >
                <h3 className="text-terreal mb-4">✦ A Mansão</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  O Domus Terreal existe onde a terra é estável e o mundo segue seu ritmo natural. É o lar daqueles que valorizam o que nasce do esforço, da continuidade e do que se constrói com o tempo. Poseidon está presente nas águas que correm pelo recinto, lembrando que a terra também depende do mar para se manter viva e equilibrada. Deméter aparece nos campos cultivados, nos grãos e folhas que crescem dia após dia, trazendo segurança, rotina e a certeza de que cada ciclo tem seu resultado. Atena se manifesta na organização do espaço e na forma como as tarefas se estruturam, ensinando que agir com clareza e saber o próximo passo também é uma forma de proteção. Afrodite está na convivência, nos vínculos e na atenção aos sentimentos, mostrando que bem-estar, cuidado e relações saudáveis sustentam qualquer lar. Hefesto completa o Domus com o trabalho constante, a prática diária e o desenvolvimento que surge quando alguém se dedica a melhorar um pouco a cada dia.
                </p>
              </motion.div>

              {/* O que Significa */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-terreal/10 to-green-500/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-terreal/20"
              >
                <h3 className="text-terreal mb-4">✦ O que Significa?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Habitar o Domus Terreal é aprender a caminhar junto da força que nasce da própria vida: concreta, firme, constante. É o lugar onde cada semideus descobre que permanecer também é uma forma de crescer.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOMUS ABISSAL */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/backgrounds/domus/fundoAbissal.gif"
            alt="Abissal Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(10,10,15)] via-purple-950/30 via-50% to-[rgb(10,10,15)]/90" />
        </div>

        {/* Shadow wisps effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`shadow-${i}`}
              animate={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.5, 1],
                x: [0, Math.sin(i) * 50, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${80 + Math.random() * 120}px`,
                height: `${80 + Math.random() * 120}px`,
                background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <motion.img
                src="/symbols/domus/DomusAbissal.png"
                alt="Domus Abissal"
                className="w-32 h-32 object-contain"
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="text-center">
                <h2 className="text-abissal mb-2">𝓓omus Abissal</h2>
                <p className="text-gray-400 text-lg">
                  Deuses representantes: Hades, Perséfone, Ares e Ártemis.
                </p>
              </div>
              <motion.img
                src="/symbols/domus/DomusAbissal.png"
                alt="Domus Abissal"
                className="w-32 h-32 object-contain"
                initial={{ rotate: 10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* A Mansão */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-abissal/30"
              >
                <h3 className="text-abissal mb-4">✦ A Mansão</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  O Domus Abissal ergue-se onde a terra silencia e o mundo começa a escutar. Uma morada erguida pelas mãos daqueles percebidos como duros, fruto de uma vida que exige resistência acima de tudo. Hades mantém cada estrutura firme com seu olhar atento, preservando a ordem e a quietude que dão forma ao subterrâneo. Ali, tudo carrega a serenidade dura de quem entende que nada se perde, apenas se transforma, Perséfone suaviza esse ambiente. Entre rochas e corredores frios, ela cultiva pequenos jardins discretos, plantas resistentes que quebram a monotonia do abismo. Sua presença traz equilíbrio: nem vida exuberante, nem morte absoluta, apenas a coexistência das duas, como um lembrete constante de que ambas caminham lado a lado a floresta que envolve o Domus Abissal funciona como um escudo natural, e é ali que Artémis deixa sua marca. Ela oferece animais para proteger e acompanhar os moradores, não como servos, mas como sinal de sua lealdade ao Domus e aos que ali vivem. Seu domínio não é fantasia é a garantia silenciosa de que a selvageria também sabe guardar e cuidar, Ares chega com armas, escudos e disciplina. Suas salas são pensadas para treinar, fortalecer e preparar, trazendo ao Domus a segurança que nasce do esforço e da prática. Ele estabelece áreas de treinamento e armarias que servem tanto para defesa quanto para aperfeiçoamento pessoal.
                </p>
              </motion.div>

              {/* O que Significa */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-abissal/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-abissal/20"
              >
                <h3 className="text-abissal mb-4">✦ O que Significa?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Habitar o Domus Abissal é compreender que a convivência com forças firmes e silenciosas é inevitável. É aprender a caminhar onde o silêncio orienta: onde a vida persiste mesmo nas condições mais duras; onde a natureza impõe respeito e forma caráter. É um lar que respira de maneira discreta, e que ensina a cada semideus que vida e morte coexistem, não como mitos, mas como realidades que se definem mutuamente.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Qual Será Sua Escolha?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Junte-se ao servidor e descubra qual Domus está destinado para você. Honre os deuses, complete missões épicas e torne-se uma lenda.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-celestial/90 via-terreal/90 to-abissal/90 text-black uppercase tracking-wide transition-all duration-200 shadow-2xl hover:shadow-celestial/50"
            >
              Comece Sua Jornada
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
