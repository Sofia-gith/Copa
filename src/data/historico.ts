export type PeriodoHistorico = "Todos" | "Clássicas" | "Modernas" | "Recentes";

export type MomentoHistorico = {
  id: string;
  titulo: string;
  ano: string;
  descricao: string;
  icone: string;
  emBreve?: boolean;
};

export type CopaHistorica = {
  id: string;
  ano: number;
  paisSede: string;
  cidadeFinal: string;
  campeao: string;
  vice: string;
  artilheiro: string;
  mascote: string;
  destaque: string;
  sobre: string;
  gols: number;
  jogos: number;
  selecoes: number;
  publicoMedio: string;
  xp: string;
  icone: string;
  cor: string;
  fase: Exclude<PeriodoHistorico, "Todos">;
  curiosidades: string[];
  momentos: MomentoHistorico[];
  figurinha: {
    numero: string;
    coletada: boolean;
  };
};

export const FILTROS_HISTORICO: PeriodoHistorico[] = ["Todos", "Clássicas", "Modernas", "Recentes"];

export const COPAS_HISTORICAS: CopaHistorica[] = [
  {
    id: "1930",
    ano: 1930,
    paisSede: "Uruguai",
    cidadeFinal: "Montevidéu",
    campeao: "Uruguai",
    vice: "Argentina",
    artilheiro: "Guillermo Stábile",
    mascote: "Sem mascote oficial",
    destaque: "Primeira edição da Copa do Mundo FIFA",
    sobre:
      "A Copa de 1930 inaugurou a história do torneio no Uruguai. Com apenas 13 seleções, o campeonato estabeleceu o formato internacional da competição e terminou com festa uruguaia no Estádio Centenário.",
    gols: 70,
    jogos: 18,
    selecoes: 13,
    publicoMedio: "32 mil",
    xp: "+35 XP",
    icone: "flag-outline",
    cor: "#85B7EB",
    fase: "Clássicas",
    curiosidades: [
      "Foi a única Copa sem eliminatórias para classificar participantes",
      "A final teve virada do Uruguai por 4 a 2 contra a Argentina",
      "A FIFA escolheu o Uruguai por ser bicampeão olímpico",
    ],
    momentos: [
      {
        id: "1930-m1",
        titulo: "Início da era da Copa",
        ano: "1930",
        descricao: "A primeira bola rolou em 13 de julho de 1930, marcando oficialmente o nascimento da Copa do Mundo.",
        icone: "planet-outline",
      },
    ],
    figurinha: { numero: "H-01", coletada: true },
  },
  {
    id: "1958",
    ano: 1958,
    paisSede: "Suécia",
    cidadeFinal: "Estocolmo",
    campeao: "Brasil",
    vice: "Suécia",
    artilheiro: "Just Fontaine",
    mascote: "Sem mascote oficial",
    destaque: "Primeiro título mundial do Brasil com Pelé",
    sobre:
      "A Copa de 1958 consolidou o Brasil como potência mundial. Aos 17 anos, Pelé brilhou na fase final e ajudou a seleção brasileira a conquistar sua primeira estrela.",
    gols: 126,
    jogos: 35,
    selecoes: 16,
    publicoMedio: "24 mil",
    xp: "+40 XP",
    icone: "trophy-outline",
    cor: "#FAC775",
    fase: "Clássicas",
    curiosidades: [
      "Just Fontaine marcou 13 gols, recorde em uma única edição",
      "Foi a primeira Copa com transmissão internacional mais ampla",
      "Brasil venceu a final por 5 a 2",
    ],
    momentos: [
      {
        id: "1958-m1",
        titulo: "Primeira estrela do Brasil",
        ano: "1958",
        descricao: "O Brasil venceu a Suécia e iniciou uma nova fase de domínio técnico no futebol mundial.",
        icone: "star-outline",
      },
      {
        id: "1958-m2",
        titulo: "Explosão de Pelé",
        ano: "1958",
        descricao: "Pelé marcou dois gols na final e se tornou símbolo da nova geração do futebol.",
        icone: "flash-outline",
      },
    ],
    figurinha: { numero: "H-02", coletada: true },
  },
  {
    id: "1970",
    ano: 1970,
    paisSede: "México",
    cidadeFinal: "Cidade do México",
    campeao: "Brasil",
    vice: "Itália",
    artilheiro: "Gerd Müller",
    mascote: "Juanito",
    destaque: "Brasil tricampeão com futebol considerado histórico",
    sobre:
      "A Copa de 1970 foi a primeira transmitida ao vivo em cores para vários países. O Brasil de Pelé, Jairzinho, Gérson e Tostão encantou o mundo e conquistou o tricampeonato.",
    gols: 95,
    jogos: 32,
    selecoes: 16,
    publicoMedio: "50 mil",
    xp: "+40 XP",
    icone: "ribbon-outline",
    cor: "#EF9F27",
    fase: "Clássicas",
    curiosidades: [
      "Primeira Copa com cartões amarelo e vermelho oficialmente",
      "Jairzinho marcou em todos os jogos que disputou",
      "Foi a última edição da Taça Jules Rimet",
    ],
    momentos: [
      {
        id: "1970-m1",
        titulo: "Taça Jules Rimet em definitivo",
        ano: "1970",
        descricao: "Com o tricampeonato, o Brasil ficou em definitivo com a taça original da competição.",
        icone: "medal-outline",
      },
    ],
    figurinha: { numero: "H-03", coletada: true },
  },
  {
    id: "1998",
    ano: 1998,
    paisSede: "França",
    cidadeFinal: "Paris",
    campeao: "França",
    vice: "Brasil",
    artilheiro: "Davor Šuker",
    mascote: "Footix",
    destaque: "Primeira edição com 32 seleções",
    sobre:
      "A Copa de 1998 ampliou o torneio para 32 seleções e teve a França campeã em casa. Zidane foi protagonista na final, marcando dois gols contra o Brasil.",
    gols: 171,
    jogos: 64,
    selecoes: 32,
    publicoMedio: "43 mil",
    xp: "+30 XP",
    icone: "earth-outline",
    cor: "#CECBF6",
    fase: "Modernas",
    curiosidades: [
      "Primeira Copa com fase de grupos de 32 times",
      "A final aconteceu no Stade de France lotado",
      "A França conquistou seu primeiro título mundial",
    ],
    momentos: [
      {
        id: "1998-m1",
        titulo: "Novo formato expandido",
        ano: "1998",
        descricao: "A expansão para 32 seleções aumentou o alcance global da Copa.",
        icone: "expand-outline",
      },
    ],
    figurinha: { numero: "H-04", coletada: true },
  },
  {
    id: "2002",
    ano: 2002,
    paisSede: "Coreia do Sul / Japão",
    cidadeFinal: "Yokohama",
    campeao: "Brasil",
    vice: "Alemanha",
    artilheiro: "Ronaldo",
    mascote: "Ato, Kaz e Nik",
    destaque: "Penta brasileiro com Ronaldo artilheiro",
    sobre:
      "A edição de 2002 foi a primeira em dois países-sede e no continente asiático. O Brasil conquistou o pentacampeonato com campanha invicta e protagonismo de Ronaldo.",
    gols: 161,
    jogos: 64,
    selecoes: 32,
    publicoMedio: "42 mil",
    xp: "+45 XP",
    icone: "flash-outline",
    cor: "#5DCAA5",
    fase: "Modernas",
    curiosidades: [
      "Primeira Copa realizada na Ásia",
      "Ronaldo terminou com 8 gols e voltou ao topo após lesões",
      "Brasil venceu todos os sete jogos da campanha",
    ],
    momentos: [
      {
        id: "2002-m1",
        titulo: "Pentacampeonato histórico",
        ano: "2002",
        descricao: "Com vitória por 2 a 0 na final, o Brasil conquistou seu quinto título mundial.",
        icone: "trophy-outline",
      },
    ],
    figurinha: { numero: "H-05", coletada: true },
  },
  {
    id: "2014",
    ano: 2014,
    paisSede: "Brasil",
    cidadeFinal: "Rio de Janeiro",
    campeao: "Alemanha",
    vice: "Argentina",
    artilheiro: "James Rodríguez",
    mascote: "Fuleco",
    destaque: "Final decidida na prorrogação no Maracanã",
    sobre:
      "A Copa de 2014 marcou o retorno do torneio ao Brasil após 64 anos. A Alemanha venceu a Argentina na prorrogação e levantou o tetra no Maracanã.",
    gols: 171,
    jogos: 64,
    selecoes: 32,
    publicoMedio: "53 mil",
    xp: "+30 XP",
    icone: "football-outline",
    cor: "#E13A3E",
    fase: "Modernas",
    curiosidades: [
      "Teve recorde de gols entre Copas com 32 seleções até então",
      "A final foi decidida com gol de Götze no tempo extra",
      "James Rodríguez terminou como artilheiro com 6 gols",
    ],
    momentos: [
      {
        id: "2014-m1",
        titulo: "Gol do título na prorrogação",
        ano: "2014",
        descricao: "Mario Götze marcou aos 113 minutos e garantiu o título alemão.",
        icone: "timer-outline",
      },
    ],
    figurinha: { numero: "H-06", coletada: false },
  },
  {
    id: "2018",
    ano: 2018,
    paisSede: "Rússia",
    cidadeFinal: "Moscou",
    campeao: "França",
    vice: "Croácia",
    artilheiro: "Harry Kane",
    mascote: "Zabivaka",
    destaque: "Croácia chega à primeira final de sua história",
    sobre:
      "A Rússia recebeu uma Copa de muitos gols e grandes viradas. A França conquistou seu bicampeonato após vencer a Croácia por 4 a 2 na final.",
    gols: 169,
    jogos: 64,
    selecoes: 32,
    publicoMedio: "47 mil",
    xp: "+35 XP",
    icone: "analytics-outline",
    cor: "#378ADD",
    fase: "Recentes",
    curiosidades: [
      "Primeira final da Croácia em Copas do Mundo",
      "VAR foi usado em larga escala pela primeira vez no torneio",
      "A França conquistou o segundo título após 20 anos",
    ],
    momentos: [
      {
        id: "2018-m1",
        titulo: "Era do VAR",
        ano: "2018",
        descricao: "A tecnologia de vídeo passou a influenciar decisões-chave em partidas eliminatórias.",
        icone: "videocam-outline",
      },
    ],
    figurinha: { numero: "H-07", coletada: false },
  },
  {
    id: "2022",
    ano: 2022,
    paisSede: "Catar",
    cidadeFinal: "Lusail",
    campeao: "Argentina",
    vice: "França",
    artilheiro: "Kylian Mbappé",
    mascote: "La'eeb",
    destaque: "Final épica definida nos pênaltis",
    sobre:
      "A Copa de 2022 foi a primeira realizada no Oriente Médio e terminou com uma das finais mais dramáticas da história. A Argentina conquistou o tricampeonato diante da França.",
    gols: 172,
    jogos: 64,
    selecoes: 32,
    publicoMedio: "53 mil",
    xp: "+45 XP",
    icone: "sparkles-outline",
    cor: "#FAC775",
    fase: "Recentes",
    curiosidades: [
      "Primeira Copa disputada entre novembro e dezembro",
      "Mbappé marcou hat-trick em uma final",
      "Messi foi eleito melhor jogador da competição",
    ],
    momentos: [
      {
        id: "2022-m1",
        titulo: "Final histórica",
        ano: "2022",
        descricao: "Após empate em 3 a 3, a Argentina venceu nos pênaltis e levantou a taça.",
        icone: "flame-outline",
      },
      {
        id: "2022-m2",
        titulo: "Legado no Oriente Médio",
        ano: "2022",
        descricao: "A edição abriu caminho para mais investimentos e protagonismo da região no futebol global.",
        icone: "earth-outline",
      },
    ],
    figurinha: { numero: "H-08", coletada: true },
  },
];
