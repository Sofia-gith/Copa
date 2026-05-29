export type PontoTuristico = {
  id: string;
  nome: string;
  descricao: string;
  xp: number;
  rating: number;
  icone: string;
  iconeBg: string;
  iconeColor: string;
  figurinhaDesbloqueavel?: boolean;
};

export type Cidade = {
  id: string;
  nome: string;
  pais: "Canada" | "Mexico" | "EUA";
  bandeira: string;
  destaque: PontoTuristico;
  pontos: PontoTuristico[];
  roteiro: { label: string; cor: string }[];
};

export const CIDADES: Cidade[] = [
  // ── CANADÁ ──────────────────────────────────────────────────────────────────
  {
    id: "toronto",
    nome: "Toronto",
    pais: "Canada",
    bandeira: "🇨🇦",
    destaque: {
      id: "toronto-1",
      nome: "CN Tower",
      descricao: "Uma das torres mais altas do mundo, com mirante e restaurante giratório com vista panorâmica de Toronto.",
      xp: 30,
      rating: 4.7,
      icone: "navigate-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "toronto-2", nome: "Distillery District", descricao: "", xp: 20, rating: 4.6, icone: "wine-outline",     iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "toronto-3", nome: "Ripley's Aquarium",   descricao: "", xp: 20, rating: 4.8, icone: "fish-outline",     iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "CN Tower",            cor: "#EF9F27" },
      { label: "Distillery District", cor: "#534AB7" },
      { label: "Ripley's Aquarium",   cor: "#534AB7" },
    ],
  },
  {
    id: "vancouver",
    nome: "Vancouver",
    pais: "Canada",
    bandeira: "🇨🇦",
    destaque: {
      id: "vancouver-1",
      nome: "Stanley Park",
      descricao: "Parque urbano com mais de 400 hectares, totem poles históricos e ciclovia com vista para as montanhas.",
      xp: 25,
      rating: 4.9,
      icone: "leaf-outline",
      iconeBg: "#085041",
      iconeColor: "#5DCAA5",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "vancouver-2", nome: "Granville Island",  descricao: "", xp: 20, rating: 4.7, icone: "storefront-outline", iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "vancouver-3", nome: "Capilano Bridge",   descricao: "", xp: 25, rating: 4.8, icone: "git-merge-outline",  iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Stanley Park",    cor: "#5DCAA5" },
      { label: "Granville Island",cor: "#534AB7" },
      { label: "Capilano Bridge", cor: "#534AB7" },
    ],
  },

  // ── MÉXICO ──────────────────────────────────────────────────────────────────
  {
    id: "mexico-city",
    nome: "Mexico City",
    pais: "Mexico",
    bandeira: "🇲🇽",
    destaque: {
      id: "mx-city-1",
      nome: "Palácio de Bellas Artes",
      descricao: "Ícone cultural da Cidade do México, com murais de Diego Rivera e arquitetura Art Nouveau e Art Déco.",
      xp: 30,
      rating: 4.8,
      icone: "business-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "mx-city-2", nome: "Teotihuacán",    descricao: "", xp: 35, rating: 4.9, icone: "trail-sign-outline", iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "mx-city-3", nome: "Chapultepec",    descricao: "", xp: 20, rating: 4.6, icone: "leaf-outline",       iconeBg: "#04342C", iconeColor: "#5DCAA5" },
      { id: "mx-city-4", nome: "Xochimilco",     descricao: "", xp: 25, rating: 4.7, icone: "boat-outline",       iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Bellas Artes", cor: "#EF9F27" },
      { label: "Chapultepec",  cor: "#534AB7" },
      { label: "Xochimilco",   cor: "#534AB7" },
    ],
  },
  {
    id: "guadalajara",
    nome: "Guadalajara",
    pais: "Mexico",
    bandeira: "🇲🇽",
    destaque: {
      id: "gdl-1",
      nome: "Centro Histórico",
      descricao: "Berço do mariachi e da tequila, o centro de Guadalajara reúne catedrais barrocas e museus vibrantes.",
      xp: 25,
      rating: 4.6,
      icone: "home-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "gdl-2", nome: "Tlaquepaque",    descricao: "", xp: 20, rating: 4.7, icone: "color-palette-outline", iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "gdl-3", nome: "Lago de Chapala",descricao: "", xp: 20, rating: 4.5, icone: "water-outline",         iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Centro Histórico", cor: "#EF9F27" },
      { label: "Tlaquepaque",      cor: "#534AB7" },
      { label: "Lago de Chapala",  cor: "#534AB7" },
    ],
  },
  {
    id: "monterrey",
    nome: "Monterrey",
    pais: "Mexico",
    bandeira: "🇲🇽",
    destaque: {
      id: "mty-1",
      nome: "Cerro de la Silla",
      descricao: "Símbolo de Monterrey, o morro com formato de sela é visível de toda a cidade e trilha para aventureiros.",
      xp: 30,
      rating: 4.7,
      icone: "triangle-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "mty-2", nome: "Macroplaza",    descricao: "", xp: 20, rating: 4.5, icone: "grid-outline",    iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "mty-3", nome: "Barrio Antiguo",descricao: "", xp: 20, rating: 4.6, icone: "beer-outline",    iconeBg: "#26215C", iconeColor: "#CECBF6" },
    ],
    roteiro: [
      { label: "Cerro de la Silla", cor: "#EF9F27" },
      { label: "Macroplaza",        cor: "#534AB7" },
      { label: "Barrio Antiguo",    cor: "#534AB7" },
    ],
  },

  // ── EUA ─────────────────────────────────────────────────────────────────────
  {
    id: "new-york",
    nome: "New York City",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "nyc-1",
      nome: "Estátua da Liberdade",
      descricao: "Símbolo da liberdade americana, a estátua fica na ilha Liberty e pode ser visitada de balsa saindo do Battery Park.",
      xp: 30,
      rating: 4.9,
      icone: "flag-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "nyc-2", nome: "Central Park",  descricao: "", xp: 20, rating: 4.8, icone: "leaf-outline",     iconeBg: "#04342C", iconeColor: "#5DCAA5" },
      { id: "nyc-3", nome: "Times Square",  descricao: "", xp: 15, rating: 4.5, icone: "star-outline",     iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "nyc-4", nome: "Brooklyn Bridge",descricao:"", xp: 25, rating: 4.8, icone: "git-merge-outline",iconeBg: "#26215C", iconeColor: "#CECBF6" },
    ],
    roteiro: [
      { label: "Estátua da Liberdade", cor: "#EF9F27" },
      { label: "Central Park",         cor: "#534AB7" },
      { label: "Times Square",         cor: "#534AB7" },
    ],
  },
  {
    id: "los-angeles",
    nome: "Los Angeles",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "la-1",
      nome: "Hollywood Sign",
      descricao: "O cartão postal de LA, o letreiro icônico pode ser visto de vários pontos da cidade e trilhado de perto.",
      xp: 25,
      rating: 4.7,
      icone: "film-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "la-2", nome: "Santa Monica Pier", descricao: "", xp: 20, rating: 4.6, icone: "sunny-outline",  iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "la-3", nome: "Getty Center",      descricao: "", xp: 25, rating: 4.8, icone: "business-outline",iconeBg: "#26215C", iconeColor: "#CECBF6" },
    ],
    roteiro: [
      { label: "Hollywood Sign",    cor: "#EF9F27" },
      { label: "Santa Monica Pier", cor: "#534AB7" },
      { label: "Getty Center",      cor: "#534AB7" },
    ],
  },
  {
    id: "miami",
    nome: "Miami",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "mia-1",
      nome: "South Beach",
      descricao: "A praia mais famosa de Miami, com arquitetura Art Déco, vida noturna vibrante e mar cristalino.",
      xp: 20,
      rating: 4.7,
      icone: "sunny-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "mia-2", nome: "Wynwood Walls",   descricao: "", xp: 20, rating: 4.8, icone: "color-palette-outline", iconeBg: "#26215C", iconeColor: "#CECBF6" },
      { id: "mia-3", nome: "Everglades",      descricao: "", xp: 30, rating: 4.6, icone: "leaf-outline",          iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "South Beach",   cor: "#EF9F27" },
      { label: "Wynwood Walls", cor: "#534AB7" },
      { label: "Everglades",    cor: "#5DCAA5" },
    ],
  },
  {
    id: "atlanta",
    nome: "Atlanta",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "atl-1",
      nome: "Georgia Aquarium",
      descricao: "Um dos maiores aquários do mundo, com tubarões-baleia e espetáculos de golfinhos.",
      xp: 25,
      rating: 4.8,
      icone: "fish-outline",
      iconeBg: "#04342C",
      iconeColor: "#5DCAA5",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "atl-2", nome: "MLK Historic Site", descricao: "", xp: 25, rating: 4.9, icone: "book-outline",    iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "atl-3", nome: "Piedmont Park",     descricao: "", xp: 15, rating: 4.6, icone: "leaf-outline",    iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Georgia Aquarium",  cor: "#5DCAA5" },
      { label: "MLK Historic Site", cor: "#534AB7" },
      { label: "Piedmont Park",     cor: "#534AB7" },
    ],
  },
  {
    id: "boston",
    nome: "Boston",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "bos-1",
      nome: "Freedom Trail",
      descricao: "Rota histórica de 4km com 16 pontos marcados no chão, conectando os principais marcos da Revolução Americana.",
      xp: 30,
      rating: 4.8,
      icone: "trail-sign-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "bos-2", nome: "Fenway Park",      descricao: "", xp: 20, rating: 4.7, icone: "baseball-outline", iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "bos-3", nome: "Harvard Square",   descricao: "", xp: 20, rating: 4.6, icone: "school-outline",   iconeBg: "#26215C", iconeColor: "#CECBF6" },
    ],
    roteiro: [
      { label: "Freedom Trail", cor: "#EF9F27" },
      { label: "Fenway Park",   cor: "#534AB7" },
      { label: "Harvard Square",cor: "#534AB7" },
    ],
  },
  {
    id: "dallas",
    nome: "Dallas",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "dal-1",
      nome: "Reunion Tower",
      descricao: "Torre geodésica de 171m que domina o skyline de Dallas, com restaurante giratório e mirante 360°.",
      xp: 25,
      rating: 4.6,
      icone: "navigate-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "dal-2", nome: "Sixth Floor Museum",descricao: "", xp: 25, rating: 4.8, icone: "camera-outline", iconeBg: "#26215C", iconeColor: "#CECBF6" },
      { id: "dal-3", nome: "Deep Ellum",        descricao: "", xp: 15, rating: 4.5, icone: "musical-notes-outline", iconeBg: "#412402", iconeColor: "#EF9F27" },
    ],
    roteiro: [
      { label: "Reunion Tower",     cor: "#EF9F27" },
      { label: "Sixth Floor Museum",cor: "#534AB7" },
      { label: "Deep Ellum",        cor: "#534AB7" },
    ],
  },
  {
    id: "houston",
    nome: "Houston",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "hou-1",
      nome: "Space Center Houston",
      descricao: "Centro espacial da NASA onde você pode ver foguetes reais, tocar em amostras lunares e explorar a história da exploração espacial.",
      xp: 35,
      rating: 4.8,
      icone: "rocket-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "hou-2", nome: "Museum of Natural Science", descricao: "", xp: 20, rating: 4.7, icone: "flask-outline",  iconeBg: "#04342C", iconeColor: "#5DCAA5" },
      { id: "hou-3", nome: "Hermann Park",              descricao: "", xp: 15, rating: 4.5, icone: "leaf-outline",   iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Space Center",  cor: "#85B7EB" },
      { label: "Natural Science",cor: "#534AB7" },
      { label: "Hermann Park",  cor: "#534AB7" },
    ],
  },
  {
    id: "kansas-city",
    nome: "Kansas City",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "kc-1",
      nome: "Country Club Plaza",
      descricao: "O primeiro shopping center ao ar livre dos EUA, com arquitetura espanhola, fontes e galerias de arte.",
      xp: 20,
      rating: 4.5,
      icone: "storefront-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "kc-2", nome: "WWI Museum",    descricao: "", xp: 25, rating: 4.9, icone: "book-outline",  iconeBg: "#26215C", iconeColor: "#CECBF6" },
      { id: "kc-3", nome: "City Market",   descricao: "", xp: 15, rating: 4.4, icone: "cart-outline",  iconeBg: "#412402", iconeColor: "#EF9F27" },
    ],
    roteiro: [
      { label: "Country Club Plaza", cor: "#EF9F27" },
      { label: "WWI Museum",         cor: "#534AB7" },
      { label: "City Market",        cor: "#534AB7" },
    ],
  },
  {
    id: "philadelphia",
    nome: "Philadelphia",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "phi-1",
      nome: "Liberty Bell",
      descricao: "Símbolo da independência americana, o sino histórico fica no Independence National Historical Park.",
      xp: 30,
      rating: 4.7,
      icone: "flag-outline",
      iconeBg: "#412402",
      iconeColor: "#EF9F27",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "phi-2", nome: "Philadelphia Museum of Art", descricao: "", xp: 20, rating: 4.8, icone: "color-palette-outline", iconeBg: "#26215C", iconeColor: "#CECBF6" },
      { id: "phi-3", nome: "Reading Terminal Market",    descricao: "", xp: 15, rating: 4.7, icone: "cart-outline",          iconeBg: "#412402", iconeColor: "#EF9F27" },
    ],
    roteiro: [
      { label: "Liberty Bell",   cor: "#EF9F27" },
      { label: "Museum of Art",  cor: "#534AB7" },
      { label: "Terminal Market",cor: "#534AB7" },
    ],
  },
  {
    id: "san-francisco",
    nome: "San Francisco",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "sf-1",
      nome: "Golden Gate Bridge",
      descricao: "A ponte mais fotografada do mundo, com 2,7km de extensão e vista deslumbrante para a Baía de São Francisco.",
      xp: 35,
      rating: 4.9,
      icone: "git-merge-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "sf-2", nome: "Alcatraz",        descricao: "", xp: 30, rating: 4.8, icone: "lock-closed-outline", iconeBg: "#26215C", iconeColor: "#CECBF6" },
      { id: "sf-3", nome: "Fisherman's Wharf",descricao:"", xp: 20, rating: 4.5, icone: "fish-outline",        iconeBg: "#04342C", iconeColor: "#5DCAA5" },
    ],
    roteiro: [
      { label: "Golden Gate", cor: "#85B7EB" },
      { label: "Alcatraz",    cor: "#534AB7" },
      { label: "Fisherman's", cor: "#534AB7" },
    ],
  },
  {
    id: "seattle",
    nome: "Seattle",
    pais: "EUA",
    bandeira: "🇺🇸",
    destaque: {
      id: "sea-1",
      nome: "Space Needle",
      descricao: "Torre futurista construída para a Feira Mundial de 1962, com mirante e restaurante giratório a 160m de altura.",
      xp: 30,
      rating: 4.7,
      icone: "navigate-outline",
      iconeBg: "#0a1628",
      iconeColor: "#85B7EB",
      figurinhaDesbloqueavel: true,
    },
    pontos: [
      { id: "sea-2", nome: "Pike Place Market", descricao: "", xp: 20, rating: 4.8, icone: "cart-outline",  iconeBg: "#412402", iconeColor: "#EF9F27" },
      { id: "sea-3", nome: "Chihuly Garden",    descricao: "", xp: 20, rating: 4.7, icone: "color-palette-outline", iconeBg: "#26215C", iconeColor: "#CECBF6" },
    ],
    roteiro: [
      { label: "Space Needle",      cor: "#85B7EB" },
      { label: "Pike Place Market", cor: "#534AB7" },
      { label: "Chihuly Garden",    cor: "#534AB7" },
    ],
  },
];

// helpers
export const PAISES = ["Todos", "Canada", "Mexico", "EUA"] as const;
export type Pais = typeof PAISES[number];

export const BANDEIRAS: Record<string, string> = {
  Canada: "🇨🇦",
  Mexico: "🇲🇽",
  EUA:    "🇺🇸",
};

export const NOMES_PAISES: Record<string, string> = {
  Canada: "Canadá",
  Mexico: "México",
  EUA:    "Estados Unidos",
};