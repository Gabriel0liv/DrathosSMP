export interface God {
    id: string;
    name: string;
    title: string;
    description: string;
    domains: string; // Used for content block 1 or specific domain if extracting
    personality: string;
    manifestations: string;
    symbol: string;
    banner: string;
    color: string;
    bgGradient: string;
    characterImage?: string;
}

export const godsData: God[] = [
    {
        id: 'poseidon',
        name: 'Poseidon',
        title: 'Deus dos Mares e Tempestades',
        description:
            'Poseidon é deus dos mares, tempestades, terramotos e cavalos. Vê o mar como força que tanto acolhe quanto destrói, guardando segredos e naufrágios nas profundezas. Para ele, criar e arrasar são movimentos da mesma maré, e o preço do poder é, muitas vezes, a solidão.',
        domains:
            'Observador e julgador, tem humor instável e orgulho sensível. Costuma ser reservado, mas emocionalmente intenso: quando se irrita, o oceano responde em ondas e tormentas. Exige lealdade absoluta dos seus e protege com ferocidade quem coloca sob a sua guarda.',
        personality:
            'Manifesta-se nas marés, nas ondas violentas e até nas lágrimas salgadas. Tubarões e cavalos-marinhos representam a sua força e lealdade, conchas guardam a sua voz distante e o tridente marca a autoridade que não precisa gritar para ser obedecida.',
        manifestations: '',
        symbol: '/symbols/gods/poseidon.png',
        banner: '/backgrounds/gods/poseidon-banner.png',
        color: 'text-cyan-400',
        bgGradient: 'from-cyan-900/50 via-blue-900/50 to-black/80',
        characterImage: '/resources/gods/poseidon.png',
    },
    {
        id: 'athena',
        name: 'Athena',
        title: 'Deusa da Sabedoria e Guerra Estratégica',
        description:
            'Athena é deusa da sabedoria, da estratégia e das artes. Protege cidades, arquitectos e artesãos, vendo a guerra como último recurso, que só faz sentido quando guiada por justiça e propósito. Representa a busca constante por conhecimento e por decisões ponderadas.',
        domains:
            'Serena e focada, observa tudo com lógica e distanciamento. Procura soluções equilibradas mesmo em cenários de conflito, mas é firme quando a injustiça prevalece. Costuma erguer muralhas emocionais, baixando-as apenas com quem conquista a sua confiança.',
        personality:
            'Athena manifesta-se em corujas, na oliveira e na figura de mentores e professores. Pode também surgir em detalhes arquitectónicos e blocos trabalhados, como pedras iluminadas, símbolo da razão que guia no meio da escuridão.',
        manifestations: '',
        symbol: '/symbols/gods/athena.png',
        banner: '/backgrounds/gods/athena-banner.png',
        color: 'text-yellow-400',
        bgGradient: 'from-yellow-900/50 via-amber-900/50 to-black/80',
        characterImage: '/resources/gods/athena.png',
    },
    {
        id: 'afrodite',
        name: 'Afrodite',
        title: 'Deusa do Amor e Beleza',
        description:
            '♡ Afrodite é deusa do amor, da beleza, do prazer e do desejo. Preside à atracção, à paixão e à alegria de viver, lembrando que o amor é força criadora que sustenta e complica a vida em igual medida.',
        domains:
            '♡ Prega todas as formas de amor — romântico, familiar e próprio — livres de amarras e preconceitos. Acredita numa vida leve, com menos tempo gasto em ódio e mais em celebrar os vínculos com quem realmente importa.',
        personality:
            '♡ Animada e carismática, adora atenção, luxo e elogios. Usa a lábia para conseguir o que quer e é extremamente vaidosa, mas também sabe reconhecer beleza em lugares improváveis. Quando é desrespeitada, pode ser vingativa e implacável.',
        manifestations:
            '♡ Manifesta-se em pombas, cisnes e golfinhos, símbolos de beleza e prazer. Espelhos, maçãs, conchas, pérolas e doces refinados marcam a sua presença, chamando à tentação, ao encanto e ao autoconhecimento.',
        symbol: '/symbols/gods/afrodite.png',
        banner: '/backgrounds/gods/afrodite-banner.png',
        color: 'text-pink-400',
        bgGradient: 'from-pink-900/50 via-rose-900/50 to-black/80',
        characterImage: '/resources/gods/afrodite.png',
    },
    {
        id: 'hefesto',
        name: 'Hefesto',
        title: 'Deus do Fogo e das Forjas',
        description:
            'Hefesto é deus do fogo e das forjas, patrono de artesãos, inventores e construtores. Representa esforço, reconstrução e transformação: o que era dor torna-se metal moldado. Nas suas mãos, o fogo não consome, lapida.',
        domains:
            'Ensina que nada nasce perfeito; tudo pode ser refinado com tempo e trabalho. É paciente, concentrado e discreto, valorizando o silêncio das oficinas e a persistência de quem continua a bater no metal mesmo cansado.',
        personality:
            'Manifesta-se nas chamas das forjas, nas faíscas que saltam do metal e no ferro incandescente pronto a ganhar forma. Pássaros de fogo e figuras lembrando uma fénix simbolizam o renascimento após quedas difíceis.',
        manifestations: '',
        symbol: '/symbols/gods/hefesto.png',
        banner: '/backgrounds/gods/hefesto-banner.png',
        color: 'text-orange-500',
        bgGradient: 'from-orange-900/50 via-red-900/50 to-black/80',
        characterImage: '/resources/gods/hefesto.png',
    },
    {
        id: 'demeter',
        name: 'Deméter',
        title: 'Deusa da Terra Fértil e das Colheitas',
        description:
            '⸙ Deméter é deusa da terra fértil, das colheitas e dos ciclos. Representa nutrição, sustento e o equilíbrio entre nascer, crescer e morrer. Ensina que tudo o que a terra recebe, de algum modo, devolve.',
        domains:
            '⸙ Materna e empática, compreende a fragilidade humana e valoriza dedicação e sacrifício. É paciente e acolhedora, mas torna-se implacável quando a ordem natural é violada ou quando inocentes sofrem sem necessidade.',
        personality:
            '⸙ Manifesta-se em espigas de trigo, tochas que iluminam a busca, papoulas ligadas ao repouso e à fertilidade, e serpentes que simbolizam a regeneração que dorme sob o solo.',
        manifestations: '',
        symbol: '/symbols/gods/demeter.png',
        banner: '/backgrounds/gods/demeter-banner.png',
        color: 'text-green-400',
        bgGradient: 'from-green-900/50 via-emerald-900/50 to-black/80',
        characterImage: '/resources/gods/demeter.png',
    },
    {
        id: 'hermes',
        name: 'Hermes',
        title: 'Mensageiro dos Deuses',
        description:
            '✉ Hermes é mensageiro dos deuses e deus do comércio, da sorte, dos viajantes e dos ladrões. Leva recados entre os mundos, redige pactos, guia almas ao Submundo e representa comunicação rápida, criatividade e astúcia.',
        domains:
            '✉ Falador e bem-humorado, adora partidas e desafios. Confiante nas próprias capacidades, valoriza coragem e espírito aventureiro. Gosta de ajudar quem se arrisca, mas detesta pedidos fáceis: sorte, para ele, acompanha quem se mexe.',
        personality:
            '✉ Manifesta-se em lebres velozes, falcões obstinados e serpentes enroladas no caduceu, símbolos das várias linguagens, negociações e mensagens que atravessam fronteiras.',
        manifestations: '',
        symbol: '/symbols/gods/hermes.png',
        banner: '/backgrounds/gods/hermes-banner.png',
        color: 'text-amber-400',
        bgGradient: 'from-amber-900/50 via-yellow-900/50 to-black/80',
        characterImage: '/resources/gods/hermes.png',
    },
    {
        id: 'apollo',
        name: 'Apollo',
        title: 'Deus do Sol, Música e Profecia',
        description:
            '☀️ Apollo é deus da luz, da profecia, dos oráculos e das artes — música, poesia e cura. Representa o sol que ilumina, a harmonia, a beleza e a busca pela verdade, guiando pelos lemas “nada em excesso” e “conhece-te a ti mesmo”.',
        domains:
            '☀️ De temperamento intenso, oscila entre acolhedor e destrutivo. Pode curar, inspirar e proteger, mas também lançar pragas e desgraças quando se sente traído. Ama justiça, ordem e expressão artística, reagindo mal a falsidade e desrespeito.',
        personality:
            '☀️ Manifesta-se na luz física ou simbólica, na música harmónica e na lira, em arcos e flechas que representam foco, em coroas de louros, cisnes, corvos e em tudo o que se deixa banhar pelo sol da verdade.',
        manifestations: '',
        symbol: '/symbols/gods/apollo.png',
        banner: '/backgrounds/gods/apollo-banner.png',
        color: 'text-yellow-500',
        bgGradient: 'from-yellow-800/50 via-orange-800/50 to-black/80',
        characterImage: '/resources/gods/apollo.png',
    },
    {
        id: 'dionisio',
        name: 'Dionísio',
        title: 'Deus do Vinho e da Metamorfose',
        description:
            '✧ Dionísio é deus do vinho, do êxtase, da fertilidade e da metamorfose. Une o sagrado ao mundano, o caos à ordem, celebrando a força vital que rompe limites e transforma dor em celebração.',
        domains:
            '✧ Defende a liberdade dos instintos, a queda das máscaras sociais e a reconciliação com o próprio desejo. Acredita que rituais, música, dança e vinho podem abrir caminho para cura, criatividade e renascimento.',
        personality:
            '✧ Fluido e ambíguo, tanto acolhe com alegria quanto conduz à loucura e ao excesso. É generoso com quem o honra, mas reage com dureza a quem zomba dos seus ritos, trazendo punições que raramente deixam alguém igual.',
        manifestations:
            '✧ Manifesta-se como pantera ou leopardo, touro ou serpente, símbolos do seu lado selvagem e instintivo. Videiras, o tirso e máscaras teatrais marcam a sua presença e a promessa de transformação.',
        symbol: '/symbols/gods/dionisio.png',
        banner: '/backgrounds/gods/dionisio-banner.png',
        color: 'text-purple-500',
        bgGradient: 'from-purple-900/50 via-fuchsia-900/50 to-black/80',
        characterImage: '/resources/gods/dionisio.png',
    },
    {
        id: 'zeus',
        name: 'Zeus',
        title: 'Rei dos Deuses e Senhor dos Céus',
        description:
            '⚡︎ Zeus é deus dos céus, do trovão e dos relâmpagos, rei dos deuses e senhor do Olimpo. Representa autoridade suprema, justiça severa e o poder que mantém o frágil equilíbrio entre divinos e mortais.',
        domains:
            '⚡︎ Imponente e impulsivo, costuma ser justo, mas raramente brando. Vê cada escolha como um trovão que ecoa em consequência. Gosta de barganhas e promessas: é possível negociar com ele, mas o preço nunca é totalmente limpo.',
        personality:
            '⚡︎ Alterna entre céu calmo e tempestade devastadora. Detesta ser desafiado ou desrespeitado nas decisões, respondendo com castigos exemplares quando sente a sua autoridade posta à prova.',
        manifestations:
            '⚡︎ Manifesta-se em raios repentinos, águias vigilantes, nuvens carregadas e no brilho do ouro, sinal da sua presença grandiosa e da riqueza de quem recebe — ou teme — o seu favor.',
        symbol: '/symbols/gods/zeus.png',
        banner: '/backgrounds/gods/zeus-banner.png',
        color: 'text-yellow-200',
        bgGradient: 'from-yellow-700/50 via-amber-700/50 to-black/80',
        characterImage: '/resources/gods/zeus.png',
    },
    {
        id: 'hera',
        name: 'Hera',
        title: 'Rainha dos Deuses e do Casamento',
        description:
            'Hera é deusa do casamento, protectora das mulheres e senhora das estrelas que vigiam o firmamento. Representa o pacto sagrado entre aqueles que partilham a vida e a defesa feroz daquilo que deveria ser inquebrável.',
        domains:
            'Não busca vingança por vaidade, mas reage à dor de ver votos quebrados repetidamente. A sua ira nasce da injustiça e da traição, e quando pune, não ataca o amor em si — protege a sua dignidade.',
        personality:
            'É soberania, cuidado e exigência de respeito. Manifesta-se em quem mantém a casa de pé, honra compromissos e não aceita ser tratada como menos do que merece, seja em laços íntimos, seja em cargos de liderança.',
        manifestations: '',
        symbol: '/symbols/gods/hera.png',
        banner: '/backgrounds/gods/hera-banner.png',
        color: 'text-teal-400',
        bgGradient: 'from-teal-900/50 via-cyan-900/50 to-black/80',
        characterImage: '/resources/gods/hera.png',
    },
    {
        id: 'artemis',
        name: 'Artemis',
        title: 'Deusa da Caça e Vida Selvagem',
        description:
            'Ártemis é deusa da caça, da vida selvagem, da castidade e do parto, protectora das mulheres e crianças. Representa independência, equilíbrio natural e o direito de tudo o que nasceu livre permanecer assim.',
        domains:
            'Reservada e observadora, mantém distância por cautela, não por frieza. É leal aos seus, detesta injustiças contra vulneráveis e vê a natureza como mestra de beleza e crueldade em igual medida.',
        personality:
            'Manifesta-se em cervos, cães de caça, ursos, leões e javalis, criaturas que espelham a sua força, a sua vigilância e o respeito que exige nas florestas e fronteiras selvagens.',
        manifestations: '',
        symbol: '/symbols/gods/artemis.png',
        banner: '/backgrounds/gods/artemis-banner.png',
        color: 'text-emerald-400',
        bgGradient: 'from-emerald-900/50 via-green-900/50 to-black/80',
        characterImage: '/resources/gods/artemis.png',
    },
    {
        id: 'persefone',
        name: 'Perséfone',
        title: 'Rainha do Submundo e da Primavera',
        description:
            '❀ Perséfone é rainha do Submundo e deusa da primavera, das flores e dos frutos. Representa a dualidade entre vida e morte, luz e sombra, inocência e poder, regendo o ciclo de partida e regresso.',
        domains:
            '❀ Ensina que crescer é atravessar escuridões sem abandonar o próprio coração. Doce e compassiva, mantém uma serenidade distante de quem já viu o que existe para lá do véu da vida.',
        personality:
            '❀ Manifesta-se em cervos graciosos, cordeiros mansos, rosas com espinhos e folhas vermelhas de outono, símbolos de pureza, sacrifício e transformação inevitável.',
        manifestations: '',
        symbol: '/symbols/gods/persefone.png',
        banner: '/backgrounds/gods/persefone-banner.png',
        color: 'text-fuchsia-400',
        bgGradient: 'from-fuchsia-900/50 via-pink-900/50 to-black/80',
        characterImage: '/resources/gods/persefone.png',
    },
    {
        id: 'hades',
        name: 'Hades',
        title: 'Senhor do Submundo',
        description:
            '☬ Hades é senhor do Submundo, deus dos mortos e das riquezas ocultas. Representa a inevitabilidade da morte, o silêncio após o fim e a certeza de que nada se perde: apenas muda de lugar.',
        domains:
            '☬ Reservado e rigoroso, não pune por capricho, mas é inflexível quando leis e pactos são quebrados. Valoriza lealdade, palavra dada e respeito aos mortos, tratando culpas e segredos como fardos que podem aprisionar ou ser guardados.',
        personality:
            '☬ Manifesta-se em corvos e lobos, em sombras densas, ciprestes e veios de sculk que devoram ecos e vibrações. Cada sensor é como um ouvido do Submundo; cada catalisador, um coração que guarda memórias que não regressam.',
        manifestations: '',
        symbol: '/symbols/gods/hades.png',
        banner: '/backgrounds/gods/hades-banner.png',
        color: 'text-gray-300',
        bgGradient: 'from-gray-900/50 via-slate-900/50 to-black/80',
        characterImage: '/resources/gods/hades.png',
    },
    {
        id: 'ares',
        name: 'Ares',
        title: 'Deus da Guerra',
        description:
            'Ares é deus da guerra, da brutalidade e da coragem crua. Representa o lado caótico dos combates, onde sangue e medo se misturam e só quem permanece de pé entende a beleza brutal do conflito.',
        domains:
            'Age por impulso, atacando antes de pensar e lidando depois com as consequências. A intensidade das suas escolhas faz com que seja visto como íman de desastre, mas também como força imparável em batalha.',
        personality:
            'Manifesta-se como abutre sobre campos de guerra, como cão feroz ou javali selvagem, símbolos da fome de luta, da agressividade e da recusa em recuar.',
        manifestations: '',
        symbol: '/symbols/gods/ares.png',
        banner: '/backgrounds/gods/ares-banner.png',
        color: 'text-red-600',
        bgGradient: 'from-red-900/50 via-rose-900/50 to-black/80',
        characterImage: '/resources/gods/ares.png',
    },
];
