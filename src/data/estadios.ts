import { ImageSourcePropType } from "react-native";

export type MomentoHistorico = {
  id: string;
  titulo: string;
  ano: string;
  descricao: string;
  icone: string;
  emBreve?: boolean;
};

export type Estadio = {
  id: string;
  nome: string;
  cidade: string;
  pais: "CA" | "MX" | "US";
  nomePais: string;
  capacidade: string;
  porcentagemExplorada: number;
  xp: string;
  iconico?: boolean;
  final?: boolean;
  inauguracao: string;
  anosInauguracao: string;
  copasSediadas: number;
  anosCopas: string;
  recordePublico: string;
  copaRecorde: string;
  sobre: string;
  foto: ImageSourcePropType;
  momentos: MomentoHistorico[];
  figurinha: {
    id: string;
    numero: string;
    nome: string;
    coletada: boolean;
    foto: ImageSourcePropType;
  };
};

export const ESTADIOS: Estadio[] = [
  {
    id: "azteca",
    nome: "Estádio Azteca",
    cidade: "Cidade do México",
    pais: "MX",
    nomePais: "México",
    capacidade: "87.000 lugares",
    porcentagemExplorada: 100,
    xp: "+40 XP",
    iconico: true,
    inauguracao: "1966",
    anosInauguracao: "há 60 anos",
    copasSediadas: 3,
    anosCopas: "1970 · 1986 · 2026",
    recordePublico: "114k",
    copaRecorde: "Copa 1970",
    foto: require("../../assets/estadios/azteca01.webp"),
    sobre: "O Estádio Azteca é um verdadeiro coliseu do futebol moderno. Construído para a Copa de 1970, ele tem o apelido carinhoso de 'El Coloso de Santa Úrsula'. É o único estádio do mundo que pode se gabar de ter coroado Pelé (1970) e Diego Maradona (1986) como campeões mundiais. Curiosidade: o design do estádio permite que, independentemente da posição do sol, o gramado fique completamente iluminado às 12h, horário clássico dos jogos históricos lá disputados.",
    momentos: [
      {
        id: "1",
        titulo: "Final da Copa 1970",
        ano: "Brasil 4 × 1 Itália",
        descricao: "Pelé levanta a taça Jules Rimet",
        icone: "trophy-outline",
      },
      {
        id: "2",
        titulo: "Gol de Mão de Deus",
        ano: "1986",
        descricao: "Maradona marca dois gols históricos contra a Inglaterra",
        icone: "star-outline",
      },
      {
        id: "3",
        titulo: "Final da Copa 1986",
        ano: "Argentina 3 × 2 Alemanha",
        descricao: "Maradona é campeão mundial",
        icone: "trophy-outline",
      },
      {
        id: "4",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "Será o único estádio a sediar 3 mundiais na história",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "azt",
      numero: "#EST-001",
      nome: "Azteca",
      coletada: true,
      foto: require("../../assets/estadios/azteca02.jpg"),
    },
  },
  {
    id: "akron",
    nome: "Estadio AKRON",
    cidade: "Guadalajara",
    pais: "MX",
    nomePais: "México",
    capacidade: "49.850 lugares",
    porcentagemExplorada: 65,
    xp: "+25 XP",
    inauguracao: "2010",
    anosInauguracao: "há 16 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "49k",
    copaRecorde: "Inauguração 2010",
    foto: require("../../assets/estadios/akron01.jpg"),
    sobre: "Conhecido por sua arquitetura revolucionária, o Estadio AKRON foi projetado para se parecer com um vulcão verde, integrando-se perfeitamente à paisagem ao redor com suas paredes externas cobertas de grama. Curiosidade: O estádio conta com um sistema de captação de água da chuva no seu enorme teto branco que lembra uma nuvem pairando sobre o 'vulcão', água esta usada para a manutenção do próprio estádio.",
    momentos: [
      {
        id: "ak1",
        titulo: "Inauguração Histórica",
        ano: "2010",
        descricao: "Chivas 3 × 2 Manchester United. Chicharito Hernández marca o primeiro gol do estádio.",
        icone: "football-outline",
      },
      {
        id: "ak2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "Receberá grandes duelos da fase de grupos.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "akr",
      numero: "#EST-002",
      nome: "AKRON",
      coletada: false,
      foto: require("../../assets/estadios/akron02.png"),
    },
  },
  {
    id: "bbva",
    nome: "Estadio BBVA",
    cidade: "Monterrey",
    pais: "MX",
    nomePais: "México",
    capacidade: "53.500 lugares",
    porcentagemExplorada: 70,
    xp: "+25 XP",
    inauguracao: "2015",
    anosInauguracao: "há 11 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "51k",
    copaRecorde: "Final Liga MX",
    foto: require("../../assets/estadios/bbva01.jpg"),
    sobre: "Apelidado carinhosamente de 'El Gigante de Acero' (O Gigante de Aço) por sua imponente estrutura metálica asssimétrica. O design do teto desce em direção ao sul, moldando o estádio para emoldurar perfeitamente o majestoso Cerro de la Silla, a montanha icônica da cidade. Curiosidade: Essa abertura cria uma das vistas mais espetaculares de dentro de um estádio de futebol em todo o mundo, misturando natureza e esporte.",
    momentos: [
      {
        id: "bb1",
        titulo: "O Primeiro Jogo",
        ano: "2015",
        descricao: "Rayados 3 × 0 Benfica. Vitória mexicana na abertura do estádio.",
        icone: "star-outline",
      },
      {
        id: "bb2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "Monterrey se tornará o centro do mundo futebolístico.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "bbv",
      numero: "#EST-003",
      nome: "BBVA",
      coletada: false,
      foto: require("../../assets/estadios/bbva02.webp"),
    },
  },
  {
    id: "bc-place",
    nome: "BC Place",
    cidade: "Vancouver",
    pais: "CA",
    nomePais: "Canadá",
    capacidade: "54.500 lugares",
    porcentagemExplorada: 72,
    xp: "+25 XP",
    inauguracao: "1983",
    anosInauguracao: "há 43 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "59k",
    copaRecorde: "2015 Women's World Cup",
    foto: require("../../assets/estadios/bc-place01.jpg"),
    sobre: "O BC Place é a principal joia esportiva de Vancouver. Originalmente construído com um teto inflado a ar, ele passou por uma reforma massiva em 2011, ganhando um gigantesco teto retrátil sustentado por mastros impressionantes. Curiosidade: Durante a noite, o estádio se transforma numa tela brilhante gigante. A sua fachada, conhecida como 'Northern Lights Display', é composta por milhares de painéis de LED que iluminam o skyline de Vancouver.",
    momentos: [
      {
        id: "bc1",
        titulo: "Final Copa Feminina",
        ano: "2015",
        descricao: "EUA 5 × 2 Japão. Carli Lloyd marca um hat-trick e os EUA conquistam o título.",
        icone: "trophy-outline",
      },
      {
        id: "bc2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "Vancouver sediará jogos com seu teto retrátil inovador.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "bcp",
      numero: "#EST-004",
      nome: "BC Place",
      coletada: false,
      foto: require("../../assets/estadios/bc-place02.jpg"),
    },
  },
  {
    id: "bmo-field",
    nome: "BMO Field",
    cidade: "Toronto",
    pais: "CA",
    nomePais: "Canadá",
    capacidade: "45.700 lugares",
    porcentagemExplorada: 60,
    xp: "+25 XP",
    inauguracao: "2007",
    anosInauguracao: "há 19 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "36k",
    copaRecorde: "MLS Cup 2016",
    foto: require("../../assets/estadios/bmo-field01.jpg"),
    sobre: "Localizado no Exhibition Place em Toronto, o BMO Field é o primeiro estádio específico para futebol construído no Canadá e a fortaleza da seleção nacional. Curiosidade: O estádio fica às margens do Lago Ontário, proporcionando ventos cortantes durante os jogos de inverno. Antes da sua construção, o local exato abrigava o Exhibition Stadium, que sediou jogos históricos de beisebol e futebol americano.",
    momentos: [
      {
        id: "bm1",
        titulo: "Campeão da MLS",
        ano: "2017",
        descricao: "Toronto FC 2 × 0 Seattle Sounders. Primeiro título canadense na história da MLS.",
        icone: "trophy-outline",
      },
      {
        id: "bm2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "O estádio passará por expansão para receber o mundo.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "bmo",
      numero: "#EST-005",
      nome: "BMO Field",
      coletada: false,
      foto: require("../../assets/estadios/bmo-field02.png"),
    },
  },
  {
    id: "metlife",
    nome: "MetLife Stadium",
    cidade: "Nova York",
    pais: "US",
    nomePais: "Estados Unidos",
    capacidade: "82.500 lugares",
    porcentagemExplorada: 100,
    xp: "+40 XP",
    final: true,
    inauguracao: "2010",
    anosInauguracao: "há 16 anos",
    copasSediadas: 1,
    anosCopas: "2026 (Final)",
    recordePublico: "82k",
    copaRecorde: "Super Bowl XLVIII",
    foto: require("../../assets/estadios/metlife01.jpg"),
    sobre: "Apesar de levar Nova York no nome das equipes que abriga (Giants e Jets), o colossal MetLife Stadium fica tecnicamente em Nova Jersey. É um dos maiores e mais caros estádios já construídos nos EUA. Curiosidade: O estádio foi desenhado de forma neutra intencionalmente. Ele possui um sistema de iluminação externa com quilômetros de LEDs que mudam a cor de todo o edifício para verde (quando os Jets jogam) ou azul (quando os Giants jogam).",
    momentos: [
      {
        id: "mt1",
        titulo: "Final Copa América",
        ano: "2016",
        descricao: "Chile vence Argentina nos pênaltis em uma final dramática.",
        icone: "trophy-outline",
      },
      {
        id: "mt2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "O palco escolhido para sediar a Grande Final do Mundial.",
        icone: "star-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "met",
      numero: "#EST-006",
      nome: "MetLife",
      coletada: true,
      foto: require("../../assets/estadios/metlife02.webp"),
    },
  },
  {
    id: "sofi",
    nome: "SoFi Stadium",
    cidade: "Los Angeles",
    pais: "US",
    nomePais: "Estados Unidos",
    capacidade: "70.240 lugares",
    porcentagemExplorada: 85,
    xp: "+30 XP",
    inauguracao: "2020",
    anosInauguracao: "há 6 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "70k",
    copaRecorde: "Super Bowl LVI",
    foto: require("../../assets/estadios/sofi01.jpg"),
    sobre: "Uma maravilha da engenharia moderna avaliada em mais de 5 bilhões de dólares, o SoFi Stadium é o estádio mais caro já erguido na história humana. Curiosidade: Devido à proximidade com o aeroporto LAX e as rigorosas leis de altura, a maior parte do estádio foi construída em uma cratera de 30 metros abaixo do nível do solo. Seu teto translúcido gigantesco serve também como uma tela de vídeo projetada para quem sobrevoa o local.",
    momentos: [
      {
        id: "sf1",
        titulo: "Super Bowl LVI",
        ano: "2022",
        descricao: "Os Rams vencem o título da NFL em sua própria casa tecnológica.",
        icone: "trophy-outline",
      },
      {
        id: "sf2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "A tecnologia de ponta a serviço do futebol mundial.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "sof",
      numero: "#EST-007",
      nome: "SoFi",
      coletada: false,
      foto: require("../../assets/estadios/sofi02.jpg"),
    },
  },
  {
    id: "hard-rock",
    nome: "Hard Rock Stadium",
    cidade: "Miami",
    pais: "US",
    nomePais: "Estados Unidos",
    capacidade: "65.326 lugares",
    porcentagemExplorada: 78,
    xp: "+25 XP",
    inauguracao: "1987",
    anosInauguracao: "há 39 anos",
    copasSediadas: 1,
    anosCopas: "2026",
    recordePublico: "80k",
    copaRecorde: "WrestleMania XXVIII",
    foto: require("../../assets/estadios/hard-rock01.jpg"),
    sobre: "O Hard Rock Stadium já teve muitos nomes ao longo de sua vida, mas sempre foi o coração esportivo do sul da Flórida. Passou por uma renovação drástica recente que adicionou um enorme teto para proteger os torcedores do sol escaldante de Miami. Curiosidade: Este estádio já viu de tudo: de jogos da NFL a torneios de tênis da ATP, e até construíram um circuito de Fórmula 1 temporário no seu estacionamento para o GP de Miami.",
    momentos: [
      {
        id: "hr1",
        titulo: "Super Bowl LIV",
        ano: "2020",
        descricao: "Patrick Mahomes lidera os Chiefs ao título em uma virada épica.",
        icone: "trophy-outline",
      },
      {
        id: "hr2",
        titulo: "Copa 2026",
        ano: "em breve",
        descricao: "O calor de Miami receberá seleções de todo o planeta.",
        icone: "calendar-outline",
        emBreve: true,
      },
    ],
    figurinha: {
      id: "hrs",
      numero: "#EST-008",
      nome: "Hard Rock",
      coletada: false,
      foto: require("../../assets/estadios/hard-rock02.webp"),
    },
  },
];
