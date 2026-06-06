export type Mascote = {
  id: string;
  nome: string;
  copa: string;
  ano: number;
  pais: string;
  animal: string;
  emoji: string;
  imagem?: any;
  xp: string;
  raro: boolean;
  coletada: boolean;
  bloqueado: boolean;
  atual: boolean;
  sobre: string;
  curiosidades: string[];
  figurinha: {
    numero: string;
    coletada: boolean;
  };
  momentos: {
    id: string;
    titulo: string;
    ano: string;
    descricao: string;
    icone: string;
    emBreve?: boolean;
  }[];
};

export const MASCOTES: Mascote[] = [
  {
    id: "tezcat",
    nome: "Tezcat",
    copa: "Copa 2026",
    ano: 2026,
    pais: "México / EUA / Canadá",
    animal: "Jaguar",
    emoji: "🐆",
    imagem: require("../../assets/images/tezcat.png"),
    xp: "+50 XP",
    raro: true,
    coletada: true,
    bloqueado: false,
    atual: true,
    sobre:
      "Tezcat é o mascote oficial da Copa do Mundo FIFA 2026, sediada no México, Estados Unidos e Canadá. Inspirado no jaguar — animal sagrado das civilizações mesoamericanas — ele representa força, velocidade e a união dos três países-sede.",
    curiosidades: [
      "Seu nome é uma homenagem a Tezcatlipoca, divindade asteca",
      "É o primeiro mascote a representar três países simultaneamente",
      "Suas cores remetem às bandeiras dos três países-sede",
    ],
    figurinha: { numero: "M-01", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Revelação oficial",
        ano: "2023",
        descricao: "Tezcat foi revelado ao mundo durante cerimônia especial da FIFA em dezembro de 2023.",
        icone: "star",
      },
      {
        id: "m2",
        titulo: "Copa do Mundo 2026",
        ano: "2026",
        descricao: "Estreia oficial como mascote nos estádios do México, EUA e Canadá.",
        icone: "trophy",
        emBreve: true,
      },
    ],
  },
  {
    id: "laeeb",
    nome: "La'eeb",
    copa: "Qatar 2022",
    ano: 2022,
    pais: "Qatar",
    animal: "Espírito do Keffiyeh",
    emoji: "👻",
    imagem: require("../../assets/images/La eeb.jpg"),
    xp: "+35 XP",
    raro: true,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "La'eeb é um espírito sobrenatural inspirado no keffiyeh, o tradicional lenço árabe. Seu nome significa 'jogador altamente habilidoso' em árabe. Divertido e brincalhão, ele representou a primeira Copa do Mundo sediada no Oriente Médio.",
    curiosidades: [
      "Primeiro mascote sobrenatural da história das Copas",
      "Seu nome em árabe significa 'super habilidoso'",
      "Foi apresentado ao som de música árabe tradicional",
    ],
    figurinha: { numero: "M-02", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Primeira Copa no Oriente Médio",
        ano: "2022",
        descricao: "La'eeb representou um marco histórico: a primeira Copa realizada em um país árabe.",
        icone: "earth",
      },
    ],
  },
  {
    id: "zabivaka",
    nome: "Zabivaka",
    copa: "Rússia 2018",
    ano: 2018,
    pais: "Rússia",
    animal: "Lobo",
    emoji: "🐺",
    imagem: require("../../assets/images/Zabivaka.jpg"),
    xp: "+35 XP",
    raro: false,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "Zabivaka é um lobo carismático e confiante que representou a Copa do Mundo de 2018 na Rússia. Seu nome significa 'aquele que marca gols' em russo. Com seus óculos esportivos e personalidade descontraída, conquistou fãs ao redor do mundo.",
    curiosidades: [
      "Escolhido por votação popular entre três opções",
      "Seu design foi criado pela estudante Ekaterina Bocharova",
      "Apareceu em diversas animações e comerciais durante a Copa",
    ],
    figurinha: { numero: "M-03", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Escolha popular",
        ano: "2016",
        descricao: "Zabivaka foi eleito mascote por votação online com mais de um milhão de votos.",
        icone: "people",
      },
    ],
  },
  {
    id: "fuleco",
    nome: "Fuleco",
    copa: "Brasil 2014",
    ano: 2014,
    pais: "Brasil",
    animal: "Tatu-bola",
    emoji: "🦔",
    imagem: require("../../assets/images/Fuleco.png"),
    xp: "+30 XP",
    raro: false,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "Fuleco é um tatu-bola simpático que representou a Copa do Mundo de 2014 no Brasil. Seu nome é uma junção de 'futebol' e 'ecologia', reforçando a mensagem ambiental da competição. Ele habita a Mata Atlântica e adora jogar bola.",
    curiosidades: [
      "Nome vem de 'futebol' + 'ecologia'",
      "O tatu-bola é uma espécie ameaçada de extinção no Brasil",
      "Ganhou série animada exibida durante a Copa",
    ],
    figurinha: { numero: "M-04", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Revelação no Brasil",
        ano: "2012",
        descricao: "Fuleco foi apresentado oficialmente em setembro de 2012, dois anos antes da Copa.",
        icone: "leaf",
      },
    ],
  },
  {
    id: "zakumi",
    nome: "Zakumi",
    copa: "África do Sul 2010",
    ano: 2010,
    pais: "África do Sul",
    animal: "Leopardo",
    emoji: "🐆",
    imagem: require("../../assets/images/zakumi.png"),
    xp: "+30 XP",
    raro: false,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "Zakumi é um leopardo de cabelos verdes que representou a primeira Copa do Mundo africana. Seu nome combina 'ZA' (código da África do Sul) com 'kumi' (dez em várias línguas africanas), em homenagem à Copa de 2010.",
    curiosidades: [
      "Nome combina o código do país 'ZA' com 'kumi' (dez em línguas africanas)",
      "Seus cabelos verdes representam os campos de futebol",
      "Nasceu em 16 de junho, Dia da Juventude na África do Sul",
    ],
    figurinha: { numero: "M-05", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Primeira Copa na África",
        ano: "2010",
        descricao: "Zakumi marcou a história como mascote da primeira Copa realizada no continente africano.",
        icone: "earth",
      },
    ],
  },
  {
    id: "goleo",
    nome: "Goleo VI",
    copa: "Alemanha 2006",
    ano: 2006,
    pais: "Alemanha",
    animal: "Leão",
    emoji: "🦁",
    imagem: require("../../assets/images/goleo vi.jpg"),
    xp: "+30 XP",
    raro: false,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "Goleo VI é um leão falante e extrovertido que esteve acompanhado de Pille, uma bola de futebol falante. Foi criado em parceria com o Jim Henson Company (criadores do Muppets). O 'VI' em seu nome homenageia a sexta Copa sediada na Europa.",
    curiosidades: [
      "Único mascote acompanhado por um personagem secundário (a bola Pille)",
      "Foi criado pelos criadores dos Muppets",
      "Causou polêmica por não usar calças na versão original",
    ],
    figurinha: { numero: "M-06", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Parceria com os Muppets",
        ano: "2004",
        descricao: "A Jim Henson Company foi contratada para criar Goleo, trazendo expertise em personagens animatrônicos.",
        icone: "film",
      },
    ],
  },
  {
    id: "ato-kaz-nik",
    nome: "Ato, Kaz & Nik",
    copa: "Coreia/Japão 2002",
    ano: 2002,
    pais: "Coreia do Sul / Japão",
    animal: "Futurista",
    emoji: "👾",
    imagem: require("../../assets/images/ato kaz and nik.jpg"),
    xp: "+30 XP",
    raro: false,
    coletada: true,
    bloqueado: false,
    atual: false,
    sobre:
      "Ato, Kaz e Nik foram os três mascotes da Copa do Mundo de 2002, a primeira realizada na Ásia e a única co-sediada por dois países. São criaturas futuristas chamadas 'Spheriks', habitantes de um mundo virtual chamado Atmozone.",
    curiosidades: [
      "Únicos mascotes que são um trio",
      "Representaram a primeira Copa co-sediada por dois países",
      "Foram os primeiros mascotes completamente digitais",
    ],
    figurinha: { numero: "M-07", coletada: true },
    momentos: [
      {
        id: "m1",
        titulo: "Primeira Copa na Ásia",
        ano: "2002",
        descricao: "A Copa de 2002 foi a primeira realizada no continente asiático, com Coreia e Japão dividindo a sede.",
        icone: "earth",
      },
    ],
  },
  {
    id: "footix",
    nome: "Footix",
    copa: "França 1998",
    ano: 1998,
    pais: "França",
    animal: "Galo",
    emoji: "🐓",
    xp: "+25 XP",
    raro: false,
    coletada: false,
    bloqueado: true,
    atual: false,
    sobre:
      "Footix é um galo azul vibrante que representou a Copa do Mundo de 1998 na França. O galo é símbolo nacional francês, e Footix incorpora o espírito alegre e apaixonado do país anfitrião. Seu nome foi escolhido por votação popular.",
    curiosidades: [
      "O galo é símbolo nacional da França desde a Revolução Francesa",
      "Seu nome foi escolhido por votação com 6 milhões de participantes",
      "Vestia a camisa da seleção francesa azul",
    ],
    figurinha: { numero: "M-08", coletada: false },
    momentos: [],
  },
  {
    id: "striker",
    nome: "Striker",
    copa: "EUA 1994",
    ano: 1994,
    pais: "Estados Unidos",
    animal: "Cachorro",
    emoji: "🐕",
    xp: "+25 XP",
    raro: false,
    coletada: false,
    bloqueado: true,
    atual: false,
    sobre:
      "Striker é um cachorro estiloso com uniforme de futebol que representou a Copa do Mundo de 1994 nos Estados Unidos. Foi desenhado pelo famoso cartunista Warner Bros e representou a tentativa americana de popularizar o futebol no país.",
    curiosidades: [
      "Desenhado por artistas da Warner Bros",
      "Representou a Copa que mais vendeu ingressos na história",
      "Sua Copa teve Romário como grande estrela",
    ],
    figurinha: { numero: "M-09", coletada: false },
    momentos: [],
  },
  {
    id: "ciao",
    nome: "Ciao",
    copa: "Itália 1990",
    ano: 1990,
    pais: "Itália",
    animal: "Humano (geométrico)",
    emoji: "🤖",
    xp: "+25 XP",
    raro: false,
    coletada: false,
    bloqueado: true,
    atual: false,
    sobre:
      "Ciao é um personagem único: um boneco formado por cubos coloridos nas cores da bandeira italiana. É considerado um dos mascotes mais icônicos da história, com design minimalista e geométrico que marcou época nos anos 80.",
    curiosidades: [
      "Único mascote não-animal da história das Copas",
      "Seu nome é o famoso cumprimento italiano",
      "Design inspirado no movimento artístico construtivista",
    ],
    figurinha: { numero: "M-10", coletada: false },
    momentos: [],
  },
  {
    id: "pique",
    nome: "Pique",
    copa: "México 1986",
    ano: 1986,
    pais: "México",
    animal: "Jalapeño",
    emoji: "🌶️",
    xp: "+25 XP",
    raro: false,
    coletada: false,
    bloqueado: true,
    atual: false,
    sobre:
      "Pique é um pimenta jalapeño humanizado com bigode e sombrero, representando perfeitamente a cultura mexicana. É um dos mascotes mais queridos e reconhecidos da história das Copas, com seu visual colorido e personalidade alegre.",
    curiosidades: [
      "Único mascote que é um vegetal/tempero",
      "Seu visual é um ícone da cultura pop dos anos 80",
      "O jalapeño é originário do México e símbolo da culinária local",
    ],
    figurinha: { numero: "M-11", coletada: false },
    momentos: [],
  },
];