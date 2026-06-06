export type Pais = {
  id: string;
  codigo: string;
  nome: string;
  continente: string;
  grupo: string;
  titulos: number;
  favorito: boolean;
  coletada: boolean;
  xp: string;
  porcentagemExplorada: number;
  imagem?: any;
  figurinha: {
    numero: string;
    coletada: boolean;
  };
  // Detalhes para tela de detalhe
  sobre: string;
  treinador: string;
  ranking: number;
  melhorResultado: string;
  jogadoresStar: string[];
  momentos: {
    id: string;
    titulo: string;
    ano: string;
    descricao: string;
    icone: string;
    emBreve?: boolean;
  }[];
};

export const PAISES: Pais[] = [
  // ── FAVORITOS ────────────────────────────────────────────────────────────────
  {
    id: "brasil",
    codigo: "BR",
    nome: "Brasil",
    continente: "América do Sul",
    grupo: "Grupo E",
    titulos: 5,
    favorito: true,
    coletada: true,
    xp: "+40 XP",
    porcentagemExplorada: 80,
    imagem: require("../../assets/Paises/Brasil.jpg"),
    figurinha: { numero: "#001", coletada: true },
    sobre:
      "O Brasil é o maior vencedor da história das Copas do Mundo, com cinco títulos. A Seleção Canarinho é conhecida pelo futebol arte e pela garra em cada torneio.",
    treinador: "Dorival Júnior",
    ranking: 5,
    melhorResultado: "Campeão (5×)",
    jogadoresStar: ["Vinicius Jr.", "Rodrygo", "Endrick"],
    momentos: [
      { id: "m1", titulo: "Pentacampeonato", ano: "2002", descricao: "Conquista histórica no Japão/Coreia do Sul.", icone: "trophy", },
      { id: "m2", titulo: "Copa 2026", ano: "2026", descricao: "A caça ao hexacampeonato começa.", icone: "football", emBreve: true },
    ],
  },
  {
    id: "argentina",
    codigo: "AR",
    nome: "Argentina",
    continente: "América do Sul",
    grupo: "Grupo A",
    titulos: 3,
    favorito: true,
    coletada: true,
    xp: "+40 XP",
    porcentagemExplorada: 65,
    imagem: require("../../assets/Paises/Argentina.png"),
    figurinha: { numero: "#002", coletada: true },
    sobre:
      "Atual campeã do mundo. A Argentina de Messi conquistou o tricampeonato no Qatar 2022 encerrando uma espera de 36 anos.",
    treinador: "Lionel Scaloni",
    ranking: 1,
    melhorResultado: "Campeão (3×)",
    jogadoresStar: ["Lionel Messi", "Julián Álvarez", "Mac Allister"],
    momentos: [
      { id: "m1", titulo: "Tricampeonato", ano: "2022", descricao: "Vitória dramática nos pênaltis contra a França.", icone: "trophy" },
      { id: "m2", titulo: "Defesa do título", ano: "2026", descricao: "Busca inédita do bicampeonato consecutivo.", icone: "football", emBreve: true },
    ],
  },

  // ── TODAS AS SELEÇÕES ────────────────────────────────────────────────────────
  {
    id: "franca",
    codigo: "FR",
    nome: "França",
    continente: "Europa",
    grupo: "Grupo D",
    titulos: 2,
    favorito: false,
    coletada: true,
    xp: "+35 XP",
    porcentagemExplorada: 55,
    imagem: require("../../assets/Paises/França.jpg"),
    figurinha: { numero: "#010", coletada: true },
    sobre: "Vice-campeã em 2022, a França possui um dos elencos mais talentosos da geração atual.",
    treinador: "Didier Deschamps",
    ranking: 2,
    melhorResultado: "Campeão (2×)",
    jogadoresStar: ["Mbappé", "Griezmann", "Camavinga"],
    momentos: [
      { id: "m1", titulo: "Bicampeonato", ano: "2018", descricao: "Domínio no Mundial da Rússia.", icone: "trophy" },
    ],
  },
  {
    id: "alemanha",
    codigo: "DE",
    nome: "Alemanha",
    continente: "Europa",
    grupo: "Grupo B",
    titulos: 4,
    favorito: false,
    coletada: true,
    xp: "+35 XP",
    porcentagemExplorada: 40,
    imagem: require("../../assets/Paises/Alemanha.png"),
    figurinha: { numero: "#011", coletada: true },
    sobre: "Uma das seleções mais tradicionais, a Alemanha busca reconquistar o protagonismo mundial.",
    treinador: "Julian Nagelsmann",
    ranking: 12,
    melhorResultado: "Campeão (4×)",
    jogadoresStar: ["Musiala", "Wirtz", "Gnabry"],
    momentos: [
      { id: "m1", titulo: "Tetracampeonato", ano: "2014", descricao: "Goleada histórica de 7x1 sobre o Brasil.", icone: "trophy" },
    ],
  },
  {
    id: "portugal",
    codigo: "PT",
    nome: "Portugal",
    continente: "Europa",
    grupo: "Grupo C",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+30 XP",
    porcentagemExplorada: 20,
    imagem: require("../../assets/Paises/Portugal.png"),
    figurinha: { numero: "#012", coletada: false },
    sobre: "Com Ronaldo e uma geração talentosa, Portugal busca seu primeiro título mundial.",
    treinador: "Roberto Martínez",
    ranking: 6,
    melhorResultado: "3º lugar (1966)",
    jogadoresStar: ["Cristiano Ronaldo", "Bernardo Silva", "Félix"],
    momentos: [
      { id: "m1", titulo: "Euro 2016", ano: "2016", descricao: "Primeiro título europeu de Portugal.", icone: "trophy" },
    ],
  },
  {
    id: "espanha",
    codigo: "ES",
    nome: "Espanha",
    continente: "Europa",
    grupo: "Grupo F",
    titulos: 1,
    favorito: false,
    coletada: false,
    xp: "+35 XP",
    porcentagemExplorada: 0,
    imagem: require("../../assets/Paises/Espanha.jpg"),
    figurinha: { numero: "#013", coletada: false },
    sobre: "A Espanha da nova geração, com Yamal e Pedri, promete mostrar o melhor futebol de posição.",
    treinador: "Luis de la Fuente",
    ranking: 7,
    melhorResultado: "Campeão (2010)",
    jogadoresStar: ["Lamine Yamal", "Pedri", "Morata"],
    momentos: [
      { id: "m1", titulo: "Campeão", ano: "2010", descricao: "Primeiro e único título mundial espanhol.", icone: "trophy" },
    ],
  },
  {
    id: "england",
    codigo: "EN",
    nome: "Inglaterra",
    continente: "Europa",
    grupo: "Grupo G",
    titulos: 1,
    favorito: false,
    coletada: false,
    xp: "+30 XP",
    porcentagemExplorada: 0,
    imagem: require("../../assets/Paises/inglaterra.jpg"),
    figurinha: { numero: "#014", coletada: false },
    sobre: "O futebol voltando para casa? A Inglaterra tem elenco para brigar pelo título em 2026.",
    treinador: "Gareth Southgate",
    ranking: 4,
    melhorResultado: "Campeão (1966)",
    jogadoresStar: ["Bellingham", "Saka", "Kane"],
    momentos: [
      { id: "m1", titulo: "Campeão", ano: "1966", descricao: "Único título na história inglesa.", icone: "trophy" },
    ],
  },
  {
    id: "mexico",
    codigo: "MX",
    nome: "México",
    continente: "América do Norte",
    grupo: "Grupo C",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+25 XP",
    porcentagemExplorada: 10,
    imagem: require("../../assets/Paises/Mexico.png"),
    figurinha: { numero: "#020", coletada: false },
    sobre: "Co-sede da Copa 2026 e sempre presença nas oitavas, o México busca superar o quinto jogo.",
    treinador: "Jaime Lozano",
    ranking: 14,
    melhorResultado: "Quartas de final",
    jogadoresStar: ["Hirving Lozano", "Raúl Jiménez", "Edson Álvarez"],
    momentos: [],
  },
  {
    id: "eua",
    codigo: "US",
    nome: "Estados Unidos",
    continente: "América do Norte",
    grupo: "Grupo B",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+25 XP",
    porcentagemExplorada: 5,
    imagem: require("../../assets/Paises/EUA.png"),
    figurinha: { numero: "#021", coletada: false },
    sobre: "Co-sede e anfitrião principal da Copa 2026, os EUA têm uma nova geração de talentos.",
    treinador: "Gregg Berhalter",
    ranking: 16,
    melhorResultado: "Semifinal (1930)",
    jogadoresStar: ["Pulisic", "Reyna", "Weah"],
    momentos: [],
  },
  {
    id: "japao",
    codigo: "JP",
    nome: "Japão",
    continente: "Ásia",
    grupo: "Grupo H",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+25 XP",
    porcentagemExplorada: 0,
    imagem: require("../../assets/Paises/Japão.jpg"),
    figurinha: { numero: "#030", coletada: false },
    sobre: "Surpresa no Qatar 2022, o Japão tem uma geração de talentos espalhada pelos maiores clubes europeus.",
    treinador: "Hajime Moriyasu",
    ranking: 17,
    melhorResultado: "Oitavas de final",
    jogadoresStar: ["Mitoma", "Kubo", "Kamada"],
    momentos: [],
  },
  {
    id: "marrocos",
    codigo: "MA",
    nome: "Marrocos",
    continente: "África",
    grupo: "Grupo A",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+30 XP",
    porcentagemExplorada: 0,
    imagem: require("../../assets/Paises/Marrocos.jpg"),
    figurinha: { numero: "#040", coletada: false },
    sobre: "Semifinalistas históricos em 2022, o Marrocos é a grande esperança africana para 2026.",
    treinador: "Walid Regragui",
    ranking: 14,
    melhorResultado: "4º lugar (2022)",
    jogadoresStar: ["Hakimi", "En-Nesyri", "Ounahi"],
    momentos: [],
  },
  {
    id: "canada",
    codigo: "CA",
    nome: "Canadá",
    continente: "América do Norte",
    grupo: "Grupo F",
    titulos: 0,
    favorito: false,
    coletada: false,
    xp: "+20 XP",
    porcentagemExplorada: 0,
    figurinha: { numero: "#022", coletada: false },
    sobre: "Co-sede e crescente potência do futebol norte-americano, o Canadá quer surpreender em casa.",
    treinador: "Jesse Marsch",
    ranking: 48,
    melhorResultado: "Fase de grupos",
    jogadoresStar: ["Davies", "David", "Larin"],
    momentos: [],
  },
];