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
        description: 'Poseidon é o Deus dos mares, das tempestades, dos terremotos e dos cavalos. Representando o equilíbrio entre a calmaria e destruição, a melancolia das profundezas ocêanicas onde a luz raramente chega e o vazio frio do oceano fundo que observa sem ser visto. Olhar para elu é como encarar todos os pecados que o mar guarda, mantendo dentro de si todas as tempestades que o mundo não suportaria. Sua dualidade é violenta, é emocional, é instável. Prega pela lealdade, pelo poder e a soberania diante os mares, pela vingança daqueles que merecem, pela proteção dos que atravessam os mares e a solidão como preço do poder. Para ela, criar e destruir não são opostos, são apenas duas formas do mesmo movimento da maré.',
        domains: 'É um Deus que apesar de observador e julgador, carrega um humor extremamente instável e explosivo. Age de forma impulsiva se seu orgulho for ferido, graças a personalidade levemente egocêntrica. É reservado, porém emocionalmente profunda e de natureza temperamental, se o seu humor oscila o oceano responde com ondas agressivas e tempestades súbitas. Dono de um humor irônico e sutil, se comunica com falas suaves com um toque hostil, uma fala que não precisa se elevar para impor autoridade, elu simplesmente impõe. Embora mantenha distância, é protetora daqueles a quem chama de seus, principalmente quando o mal vem do alheio, dos fracos diante de si. Para Poseidon, o mar não é apenas uma arma, é a sua companhia eterna.',
        personality: 'O Poseidon se manifesta atráves da água__ em todas e suas formas, principalmente nas mares, nas ondas e até nas lágrimas salgadas, nos tubarões, representando seu poder, temperamento instável e sua ira silenciosa, as conchas, que falam sobre sua voz e os chamados reservados escondendo profundidades perigosas, os cavalos-marinhos, símbolo da lealdade, paternidade e proteção, e o tridente, sinal de sua autoridade natural, firme e inquestionável.',
        manifestations: 'O Poseidon se manifesta atráves da água em todas e suas formas, principalmente nas mares, nas ondas e até nas lágrimas salgadas, nos tubarões, representando seu poder, temperamento instável e sua ira silenciosa.', // Kept a summary here if needed or reused full text 
        // Wait, reusing full text in 'personality' field above as per mapping plan. 
        // Re-mapped: description=Block1, domains=Block1 (or empty?), personality=Block2, manifestations=Block3.
        // I will use domains/personality/manifestations fields to hold the 3 blocks of text respectively.

        // Proper Mapping for UI display:
        // Description -> Block 1
        // Personality -> Block 2
        // Manifestations -> Block 3
        // Domains -> Extracted short list for quick reference if possible, otherwise use full text.
        // I will set:
        // description = Block 1
        // personality = Block 2
        // manifestations = Block 3
        // domains = "Mares, Tempestades, Terremotos, Cavalos" (Manual extraction or just empty string if not needed, but UI uses it)

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
        description: 'Athena é a deusa grega da sabedoria, da inspiração e da coragem, da guerra estratégica e do artesanato. Representa o conhecimento em sua forma mais pura e honesta, representa a sede por saber, o empenho em ensinar ou até mesmo a vontade de preparar para todas e nenhuma situação. Elu preza pela justiça de todos e é considerade a defensora das cidades, dos arquitetos, dos tecelões e dos ourives, acreditando que tudo teria de ter um sentido, até mesmo as guerras e violência.',
        domains: 'Um deus mais calmo, serena e focade, tenta o máximo olhar as situações com equilibro e justiça, tornando elas o mais condizente a todos, exceto quando não é possível. Possui uma sede por entender e conhecer que parece nunca se sessar, mesmo sabendo de quase tudo, como se a cada passo o buraco parecesse mais fundo. Nada é perfeito, mas no mínimo, elas podem se tornar mais fáceis com a sabedoria correta. Tendo uma postura distante, por mais que não tenha as palavras para ser completamente indiferente, quase que como mecanismo de defesa ao invés de algo planejado, normalmente abaixando suas muralhas para aqueles mais próximos.',
        personality: 'Athena tende a se manifestar em corujas, na oliveira, as vezes como outras pessoas, principalmente mentores e professores, mas também em alguns blocos, como glowstones decoradas.',
        manifestations: 'Athena tende a se manifestar em corujas, na oliveira, as vezes como outras pessoas, principalmente mentores e professores, mas também em alguns blocos, como glowstones decoradas.',
        symbol: '/symbols/gods/athena.png',
        banner: '/backgrounds/gods/athena-banner.png',
        color: 'text-yellow-400',
        bgGradient: 'from-yellow-900/50 via-amber-900/50 to-black/80',
    },
    {
        id: 'afrodite',
        name: 'Afrodite',
        title: 'Deusa do Amor e Beleza',
        description: '♡ Afrodite é Deusa do amor, luxúria, paixão, prazer, beleza, sexualidade e desejo. Responsável pela perpetuação da vida, do prazer, alegria e propagação do amor.',
        domains: '♡ Afrodite prega pela proliferação de todo tipo de amor, seja ele ele familiar ou paixão. Acredita que o amor deva ser algo que tenha que ser livre, que não possa ser contido em uma pessoa só ou um grupo específico. Também pensa que a vida deva ser levada com leveza, não perdendo tempo odiando alguém e sim aproveitando os momentos com pessoas queridas.',
        personality: '♡ Sua personalidade é bem animada e positiva, conseguindo ver o lado bom na maioria das situações. Utiliza de sua lábia para conseguir o que quer, além de ser muito vaidosa e amar os holofotes. Costuma julgar bastante as coisas, mesmo que não fale tudo o que pensa. Apesar de prezar mais pela beleza estética, gosta de ver a beleza de formas diferentes, e costuma enxergar isso recorrentemente. Mesmo sendo a deusa do amor, pode ser extremamente vingativa, punindo aqueles que desrespeitarem aquilo que ela representa ou ousarem dizer serem melhores que ela naquilo que ela faz de melhor.',
        manifestations: '♡ Afrodite pode se manifestar em pombas, que são conhecidas por sua beleza e natureza gentil. Cisnes, que são associados à beleza e graça. E golfinhos, símbolo de prazer. Além de ter como símbolos o espelho, representando vaidade e auto reflexão, a maçã, um símbolo de tentação desejo e beleza, conchas e pérolas representando sua origem, e chocolate, uma comida apreciada pela deusa.',
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
        description: 'Hefesto é o deus do fogo e das forjas, patrono dos artesãos, inventores e criadores. Representa o esforço, a reconstrução e a transformação através do trabalho. Rejeitado ao nascer, encontrou na chama o caminho da superação, moldando em metal o que antes era dor. Em suas mãos, o fogo não destrói, mas cria. Valoriza o silêncio, a paciência e a força de quem continua, mesmo quando o mundo parece desabar.',
        domains: 'Seu ensinamento repousa na ideia de que nada nasce perfeito, mas tudo pode ser aprimorado. A beleza está no que foi forjado, não no que foi dado. Hefesto é paciente, concentrado e profundo, guiando-se pelo ritmo dos martelos e pelo brilho do metal aquecido. Sua presença é firme, sem necessidade de ostentação; é o poder que trabalha em silêncio e se revela apenas no resultado.',
        personality: 'Ele pode se manifestar nas labaredas, símbolo de criação e energia viva, nas forjas, onde o metal ganha forma sob o calor e o esforço, nas faíscas, sinais de sua presença e inspiração, no ferro incandescente, lembrando a força moldada pela dor, e como um pássaro de fogo, uma fênix, representando o renascimento e a persistência.',
        manifestations: 'Ele pode se manifestar nas labaredas, símbolo de criação e energia viva, nas forjas, onde o metal ganha forma sob o calor e o esforço, nas faíscas, sinais de sua presença e inspiração, no ferro incandescente, lembrando a força moldada pela dor, e como um pássaro de fogo, uma fênix, representando o renascimento e a persistência.',
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
        description: '⸙ Deméter é a deusa da Terra Fértil, das Colheitas e dos Ciclos. Representa a nutrição, o sustento e o equilíbrio entre o nascer, o crescer e o perecer. Seus princípios se baseiam na ordem natural, no respeito ao tempo, na renovação e na reciprocidade, tudo o que é dado à terra retorna de alguma forma.',
        domains: '⸙ É uma deusa materna, empática e protetora, profundamente ligada aos humanos e às suas dores. Diferente de muitos deuses, Deméter compreende a fragilidade mortal e sente compaixão por quem sofre, reconhecendo o valor da dedicação, da perda e da superação. Reage com calma e paciência diante do erro, mas pode se tornar implacável quando a harmonia natural é ameaçada ou quando vê os inocentes padecendo sem necessidade.',
        personality: '⸙ Deméter se manifesta através da espiga de trigo, símbolo do alimento e da colheita, da tocha, sinal de busca e proteção, da papoula, flor do repouso e da fertilidade, e da cobra, emblema da regeneração e da força que dorme sob a terra.',
        manifestations: '⸙ Deméter se manifesta através da espiga de trigo, símbolo do alimento e da colheita, da tocha, sinal de busca e proteção, da papoula, flor do repouso e da fertilidade, e da cobra, emblema da regeneração e da força que dorme sob a terra.',
        symbol: '/symbols/gods/demeter.png',
        banner: '/backgrounds/gods/demeter-banner.png',
        color: 'text-green-400',
        bgGradient: 'from-green-900/50 via-emerald-900/50 to-black/80',
    },
    {
        id: 'hermes',
        name: 'Hermes',
        title: 'Mensageiro dos Deuses',
        description: '✉ Hermes é o mensageiro dos deuses e deus do comércio, da riqueza, da sorte, da velocidade, dos viajantes, dos ladrões e da diplomacia. Sua principal função é ser quem transporta informações, cartas e novidades entre os deuses, além de ser responsável por transcrever documentos e guiar almas até o submundo, Hermes costuma ver bastante todos os deuses e possui uma relação no mínimo profissional com quase todos. Ele representa a sorte, comunicação, criatividade e riqueza, sempre favorecendo aqueles que escolhem dirigir a ele suas preces, é alguém que valoriza muito a coragem e instinto aventureiro e sagacidade.',
        domains: '✉ Hermes é bem animado, fala muito e adora pregar peças e brincar com quem é próximo. Tende a ser alguém muito positivo e gosta de tomar riscos para si, é bem seguro de si e de suas capacidades, sabendo que sem ele tudo seria um pouco mais difícil, ele gosta bastante de suas responsabilidades como mensageiro. É alguém brincalhão que leva a vida de forma mais leviana, aceita de bom grado pessoas que buscam por grandes aventuras e tende a ajudar os outros de forma peculiar, nunca agindo conforme o esperado, é alguém que certamente garante boa sorte do jeitinho dele, mas não gosta quando querem coisas de mão beijada, pra ele todos podem ter oportunidades desde que estejam dispostos a lutar por elas.',
        personality: '✉ Hermes pode se manifestar através da lebre, devido à sua velocidade e astúcia, como um falcão, uma ave extremamente rápida e obstinada, ou serpentes em relação com seu caduceu, que representam a comunicação e linguagens.',
        manifestations: '✉ Hermes pode se manifestar através da lebre, devido à sua velocidade e astúcia, como um falcão, uma ave extremamente rápida e obstinada, ou serpentes em relação com seu caduceu, que representam a comunicação e linguagens.',
        symbol: '/symbols/gods/hermes.png',
        banner: '/backgrounds/gods/hermes-banner.png',
        color: 'text-amber-400',
        bgGradient: 'from-amber-900/50 via-yellow-900/50 to-black/80',
    },
    {
        id: 'apollo',
        name: 'Apollo',
        title: 'Deus do Sol, Música e Profecia',
        description: '☀️\n Apollo deus da profecia, dos oráculos, patrono da música e arte, da poesia, da medicina e da cura, do arco e flecha e protetor dos jovens, representa a luz solar e a harmonia. "hah pouca coisa, fazer oque, o preço de se tornar radiante é alto?" representando o mais puro Sol, do equilíbrio, deus de todo tipo de arte, seja música, poesia, esculturas, assim como da profecia sendo o mais famoso oráculo da Grécia, referência da beleza masculina e da verdade.\n☀️\n Acredita e pregava os valores da razão e da ordem sendo representante do equilíbrio "Nada em excesso", da justiça e da verdade por meio de suas profecias todas denominadas verdadeiras, da beleza e harmonia por meio das artes livres, expressão. "Conhece-te a ti mesmo."',
        domains: '☀️\n Alguém de personalidade intensa, emocional, apesar de seu caráter equilibrado e harmônico Apollo é controverso, em tempos pode proferir cura, fornecer apoio, aparecer carismático e extrovertido, em outros pode dar origem a desastres, pragas e desordem, em muitos casos alguém aberto a acolhimento e reciprocidade, porém em um piscar de olhos por extrema sensibilidade emocional, pode se tornar alguém volátil, enquanto a alguns promete o bem estar e lealdade, isso poderia se tornar facilmente em algumas das mais cruéis vinganças imagináveis caso desafiado ou desrespeitado a oque preza.',
        personality: '☀️\n Como formas de se manifestar vão desde: seja luz física ou simbólica, harmonia musical sendo seu principal símbolo a lira, autocontrole sendo representado pelo arco e flecha, caráter em que qualquer meio artístico harmoniza o indomável caos, seja em doenças, meios de cura, associado também a elementos naturais, como a coroa de louros, cisnes, corvos e grifos. "e não poderia faltar, o Sol... tudo oque se permite ser coberto por seu brilho, aceita ser iluminado pela verdade."',
        manifestations: '☀️\n Como formas de se manifestar vão desde: seja luz física ou simbólica, harmonia musical sendo seu principal símbolo a lira, autocontrole sendo representado pelo arco e flecha, caráter em que qualquer meio artístico harmoniza o indomável caos, seja em doenças, meios de cura, associado também a elementos naturais, como a coroa de louros, cisnes, corvos e grifos. "e não poderia faltar, o Sol... tudo oque se permite ser coberto por seu brilho, aceita ser iluminado pela verdade."',
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
        description: '✧ Dionísio é Deus do vinho, do êxtase e da metamorfose. Também é Deus da fertilidade, dos ciclos vitais e o patrono do teatro. Único entre os olímpicos por ser filho de uma mortal, é conhecido como o Duas Vezes Nascido e representa a força vital que rompe limites, desafiando convenções e unindo o sagrado ao mundano, o céu ao solo, o caos à ordem. Seus princípios giram em torno da libertação da alma, da transformação constante simbolizada no vinho e do impulso instintivo que abraça tanto o prazer quanto o sofrimento e a loucura divina.',
        domains: '✧ Dionísio acredita que a vida deve ser vivida em expansão, liberdade e celebração. Ele prega pela quebra das correntes sociais e pela reconciliação do ser com seus instintos mais profundos, guiando aqueles que o seguem ao êxtase, à criatividade e ao desprendimento das amarras racionais. Para ele, a alegria, o ritual, a música e o vinho são caminhos de transcendência, capazes de renovar a alma e dissolver barreiras.',
        personality: '✧ Sua personalidade é fluida, ambígua e envolta em mistério. Pode ser gentil, sedutor e jubiloso, espalhando a euforia festiva por onde passa, mas também é intenso e extremo, capaz de levar tanto à felicidade quanto à loucura. Trata com simpatia e generosidade aqueles que o honram, porém reage de maneira implacável quando é rejeitado ou desacreditado, podendo trazer insânia, punições severas ou transformações irreversíveis aos que o desafiam.',
        manifestations: '✧ Dionísio pode se manifestar sob diversas formas. Entre seus animais sagrados está a pantera ou o leopardo, que simbolizam as forças selvagens e frequentemente o acompanham, seja em peles que veste ou em carruagens puxadas por esses felinos. O touro também é um de seus animais mais associados, conhecido pelo título de deus com chifres de touro, aparecendo em rituais, sacrifícios e até em suas próprias metamorfoses. A serpente é outra de suas formas recorrentes, representando sua natureza instintiva, sinuosa e imprevisível. Entre seus símbolos estão o Tirso, a videira e a máscara teatral, e ele costuma aparecer cercado por seu cortejo festivo, sinal de sua energia transformadora e indomável.',
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
        description: '⚡︎ Zeus é o Deus dos Céus, do Trovão e dos Relâmpagos. Rei dos Deuses, governante do Olimpo, mantém o equilíbrio entre os deuses, a terra e os mortais. Representa a autoridade suprema, a justiça, o poder que decide o destino. Seus princípios se baseiam na liderança, na responsabilidade, na lei e na preservação da ordem divina.',
        domains: '⚡︎ É um Deus majestoso, imponente e Impetuoso. Costuma ser justo, embora severo se necessário, para Zeus, cada ação ecoa como um trovão, cada escolha tem um impacto e suas consequências, mas sua justiça para os outros pode ser vista tanto como "injusta" em certos casos. Entretanto Zeus é um Deus que gosta de barganhas, negociações, você pode barganhar pela sua vida ou pode tentar ganhar algo dele, mas tudo tem um preço, e Zeus sempre ganha um pouco mais.',
        personality: '⚡︎ Zeus reage de forma proporcional a situação: pode ser paciente como um céu claro, ou devastador como uma tempestade, algo que te irrita profundamente é ser contrariado de suas decisões ou ser desafiado, podendo resultar em punições.',
        manifestations: '⚡︎ Zeus se manifesta a partir do raio, grandioso e chamativo, pode se manifestar através da Águia, representante da visão soberana e vigilância constante e as nuvens carregadas, emblemas de presságios divinos e do poder que se acumula antes de revelar sua verdadeira intensidade, e por fim, blocos de ouro, com o brilho dourado que chega a irradiar a sua chegada.',
        symbol: '/symbols/gods/zeus.png',
        banner: '/backgrounds/gods/zeus-banner.png',
        color: 'text-yellow-200',
        bgGradient: 'from-yellow-700/50 via-amber-700/50 to-black/80',
    },
    {
        id: 'hera',
        name: 'Hera',
        title: 'Rainha dos Deuses e do Casamento',
        description: 'Deusa do casamento, protetora das mulheres e senhora das estrelas que vigiam o firmamento, Hera representa o pacto sagrado entre aqueles que dividem a vida. Mas também é a mão que pune quando esse pacto é quebrado. Sua graça é majestosa, e sua ira, antiga. E essa ira não é mero ciúme, como tantos tentaram retratar: é a reação de uma deusa que vê a estrutura do mundo, construída sobre fidelidade e compromisso, ser despedaçada por traições que ecoam como trovões.',
        domains: 'No mito, Hera não insiste na vingança por vaidade, e sim pela dor de ver aquilo que deveria ser inquebrável se romper repetidas vezes. Sua fúria nasce da injustiça, do desequilíbrio, da ruptura dos votos que ela protege com unhas e divindade. Quando Hera pune, ela não ataca o amor, ela defende a santidade dele.',
        personality: 'Ainda assim, ela é mais do que sua cólera. É soberania, é cuidado, é proteção feroz. Aquelas que lutam por suas famílias, que mantêm sua casa e seus princípios mesmo quando tudo ao redor ameaça ruir, refletem sua força. Em cada mulher que exige respeito, em cada líder que governa com firmeza e retidão, em cada pessoa que honra seus compromissos, Hera se manifesta.',
        manifestations: 'Ainda assim, ela é mais do que sua cólera. É soberania, é cuidado, é proteção feroz. Aquelas que lutam por suas famílias, que mantêm sua casa e seus princípios mesmo quando tudo ao redor ameaça ruir, refletem sua força. Em cada mulher que exige respeito, em cada líder que governa com firmeza e retidão, em cada pessoa que honra seus compromissos, Hera se manifesta.',
        symbol: '/symbols/gods/hera.png',
        banner: '/backgrounds/gods/hera-banner.png',
        color: 'text-teal-400',
        bgGradient: 'from-teal-900/50 via-cyan-900/50 to-black/80',
    },
    {
        id: 'artemis',
        name: 'Artemis',
        title: 'Deusa da Caça e Vida Selvagem',
        description: 'Ártemis é a deusa grega da caça, da vida selvagem, da castidade e do parto, sendo também conhecida como a protetora das mulheres e das crianças. Ela representa a independência e o equilíbrio natural. É defensora da pureza do mundo selvagem, do ciclo da vida e morte, e acredita que ninguém deve aprisionar aquilo que nasceu para correr livre sob o céu aberto.',
        domains: 'É uma deusa reservada, observadora e extremamente leal aos seus. Mantém certa distância das pessoas, mas não por frieza e sim por cautela. Enxerga o mundo com precisão e desconfiança, reconhecendo tanto a beleza quanto a crueldade da natureza. Não tolera injustiças, especialmente contra os vulneráveis ou contra aquilo que considera sagrado. Apesar de sua postura firme, possui um senso profundo de compaixão, que só entrega a quem realmente merece.',
        personality: 'Ártemis pode se manifestar em cervos, cães de caça, ursos, leões e até javalis, criaturas que simbolizam sua força, seu domínio sobre a vida selvagem e sua autoridade.',
        manifestations: 'Ártemis pode se manifestar em cervos, cães de caça, ursos, leões e até javalis, criaturas que simbolizam sua força, seu domínio sobre a vida selvagem e sua autoridade.',
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
        description: '❀ Perséfone é a Rainha do Submundo e deusa da dualidade entre a vida e a morte, da primavera, das flores e frutos e dos equinócios, representando o ciclo da vida e da morte, a luz e a escuridão, a inocência e o poder. Seus princípios giram em torno do equilíbrio, aceitação das transformações inevitáveis, renovação.',
        domains: '❀ Ela ensina que crescer é atravessar sombras sem perder a própria essência. É uma deusa doce e compassiva, mas também firme e enigmática, compreendendo o sofrimento alheio, porém mantendo uma serenidade quase distante, típica de quem já viu o que há além do véu da vida.',
        personality: '❀ Suas manifestações são amplas: o cervo, representando sua graça silenciosa e sua conexão com os ciclos da natureza, o cordeiro, representando sua pureza, compaixão e inocência, a rosa com espinhos, representando que a vida e o amor não florescem sem antes sacrifício e proteção, e as folhas vermelhas, emblema do renascimento através da transformação.',
        manifestations: '❀ Suas manifestações são amplas: o cervo, representando sua graça silenciosa e sua conexão com os ciclos da natureza, o cordeiro, representando sua pureza, compaixão e inocência, a rosa com espinhos, representando que a vida e o amor não florescem sem antes sacrifício e proteção, e as folhas vermelhas, emblema do renascimento através da transformação.',
        symbol: '/symbols/gods/persefone.png',
        banner: '/backgrounds/gods/persefone-banner.png',
        color: 'text-fuchsia-400',
        bgGradient: 'from-fuchsia-900/50 via-pink-900/50 to-black/80',
    },
    {
        id: 'hades',
        name: 'Hades',
        title: 'Senhor do Submundo',
        description: '☬ Hades é o senhor do Submundo, deus dos mortos e das riquezas, aquele que guarda tudo o que foi esquecido e tudo o que um dia retorna ao escuro. Representa a inevitabilidade da morte, o silêncio após o fim, a lei imutável e a ideia de que nada se perde: apenas muda de lugar. Seus princípios giram em torno de pacto, ordem e limite, o que cruza seu domínio não volta o mesmo, e o que é seu não é tomado impunemente.',
        domains: '☬ É reservado, sério e impenetrável, raramente se deixando levar por impulsos. Não é um deus cruel por capricho, mas inflexível quando leis e acordos são quebrados. Valoriza a lealdade, a palavra dada e o respeito aos mortos; reage com frieza calculada a ofensas, punindo com justiça dura e sem retorno. Para aqueles que carregam culpas, segredos ou memórias pesadas, ele pode ser tanto um carcereiro quanto um guardião silencioso.',
        personality: '☬ Em muitos sinais, Hades se manifesta na superfície: cães e lobos, sombras mais densas do que deveriam ser, árvores escuras como o cipreste. Onde a morte se acumula, seu rastro toma forma em veias de sculk, que se alimentam de ecos e vibrações do que já caiu: cada sensor é como um ouvido do Submundo, cada catalisador um coração que guarda lembranças de quem não volta mais.',
        manifestations: '☬ Em muitos sinais, Hades se manifesta na superfície: cães e lobos, sombras mais densas do que deveriam ser, árvores escuras como o cipreste. Onde a morte se acumula, seu rastro toma forma em veias de sculk, que se alimentam de ecos e vibrações do que já caiu: cada sensor é como um ouvido do Submundo, cada catalisador um coração que guarda lembranças de quem não volta mais.',
        symbol: '/symbols/gods/hades.png',
        banner: '/backgrounds/gods/hades-banner.png',
        color: 'text-gray-400',
        bgGradient: 'from-gray-900/50 via-slate-900/50 to-black/80',
    },
    {
        id: 'ares',
        name: 'Ares',
        title: 'Deus da Guerra',
        description: 'Ares é o deus da guerra, da brutalidade e da coragem. Representa o lado cruel e sanguinário da guerra, o qual apenas corajosos tem coragem de permanecer para ver a verdadeira beleza de um conflito. Ele acredita que a melhor maneira de proteger alguém ou algo que você ama é lutando por isso, não importa o que entre no seu caminho.',
        domains: 'É muito impulsivo com suas ações, costuma fazer primeiro e perguntar depois, sem pensar nas consequências dos atos e ser muito intenso neles, o que leva algumas pessoas o chamarem de imã de desastre, pois suas ações sempre acarretam algo muito maior do que o necessário.',
        personality: 'Sua representação mais conhecida é a de um abutre, que simboliza a morte e a caça nos campos de batalha, mas também se manifesta como um cão, devido a sua coragem e ferocidade e um javali, pois é violento e selvagem.',
        manifestations: 'Sua representação mais conhecida é a de um abutre, que simboliza a morte e a caça nos campos de batalha, mas também se manifesta como um cão, devido a sua coragem e ferocidade e um javali, pois é violento e selvagem.',
        symbol: '/symbols/gods/ares.png',
        banner: '/backgrounds/gods/ares-banner.png',
        color: 'text-red-600',
        bgGradient: 'from-red-900/50 via-rose-900/50 to-black/80',
    },
];
