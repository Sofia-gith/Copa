import { ImageSourcePropType } from "react-native";

export type Posicao = "Ataque" | "Meio-campo" | "Defesa" | "Goleiro";
export type Raridade = "Lendário" | "Raro" | "Comum";
export type TipoCard = "Jogador" | "Mascote" | "Estádio" | "Técnico" | "Histórico";

export interface Figurinha {
  id: string;
  nome: string;
  selecao: string;
  posicao: Posicao;
  raridade: Raridade;
  foto: ImageSourcePropType;
  tipoCard: TipoCard;
  bloqueado?: boolean;
}

export const JOGADORES: Figurinha[] = [
  // --- BRASIL ---
  { id: "bra-1", nome: "Vini Jr.", selecao: "Brasil", posicao: "Ataque", raridade: "Lendário", foto: require("../assets/GrupoC/Brasil/viniJr.jpg"), tipoCard: "Jogador" },
  { id: "bra-2", nome: "Alisson Becker", selecao: "Brasil", posicao: "Goleiro", raridade: "Raro", foto: require("../assets/GrupoC/Brasil/alissonBecker.jpg"), tipoCard: "Jogador" },
  { id: "bra-3", nome: "Rodrygo", selecao: "Brasil", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoC/Brasil/Rodrygo.jpg"), tipoCard: "Jogador" },
  { id: "bra-4", nome: "Raphinha", selecao: "Brasil", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Brasil/Raphinha.jpg"), tipoCard: "Jogador" },
  { id: "bra-5", nome: "Marquinhos", selecao: "Brasil", posicao: "Defesa", raridade: "Lendário", foto: require("../assets/GrupoC/Brasil/Marquinhos.jpg"), tipoCard: "Jogador" },
  { id: "bra-6", nome: "Gabriel Martinelli", selecao: "Brasil", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Brasil/GabrielMartineli.jpg"), tipoCard: "Jogador" },
  { id: "bra-7", nome: "Bruno Guimarães", selecao: "Brasil", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoC/Brasil/BrunoGuimaroes.jpg"), tipoCard: "Jogador" },

  // --- ARGENTINA ---
  { id: "arg-1", nome: "Lionel Messi", selecao: "Argentina", posicao: "Ataque", raridade: "Lendário", foto: require("../assets/GrupoJ/Argentina/Messi.jpg"), tipoCard: "Jogador" },
  { id: "arg-2", nome: "Emiliano Martínez", selecao: "Argentina", posicao: "Goleiro", raridade: "Raro", foto: require("../assets/GrupoJ/Argentina/Emiliano Martínez.png"), tipoCard: "Jogador" },
  { id: "arg-3", nome: "Julián Álvarez", selecao: "Argentina", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoJ/Argentina/Julián Álvarez.jpg"), tipoCard: "Jogador" },
  { id: "arg-4", nome: "Enzo Fernández", selecao: "Argentina", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoJ/Argentina/Enzo Fernández.jpg"), tipoCard: "Jogador" },
  { id: "arg-5", nome: "Lautaro Martínez", selecao: "Argentina", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoJ/Argentina/Lautaro Martínez.png"), tipoCard: "Jogador" },
  { id: "arg-6", nome: "Rodrigo De Paul", selecao: "Argentina", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoJ/Argentina/Rodrigo De Paul.png"), tipoCard: "Jogador" },
  { id: "arg-7", nome: "Cristián Romero", selecao: "Argentina", posicao: "Defesa", raridade: "Raro", foto: require("../assets/GrupoJ/Argentina/Cristián Romero.png"), tipoCard: "Jogador" },
  { id: "arg-8", nome: "Lisandro Martínez", selecao: "Argentina", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoJ/Argentina/Lisandro Martínez.png"), tipoCard: "Jogador" },
  { id: "arg-9", nome: "Nahuel Molina", selecao: "Argentina", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoJ/Argentina/Nahuel Molina.png"), tipoCard: "Jogador" },
  { id: "arg-10", nome: "Nicolás Tagliafico", selecao: "Argentina", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoJ/Argentina/Nicolás Tagliafico.png"), tipoCard: "Jogador" },
  { id: "arg-11", nome: "Alexis Mac Allister", selecao: "Argentina", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoJ/Argentina/Alexis Mac Allister.png"), tipoCard: "Jogador" },

  // --- HOLANDA ---
  { id: "ned-1", nome: "Virgil van Dijk", selecao: "Holanda", posicao: "Defesa", raridade: "Lendário", foto: require("../assets/GrupoF/Holanda/Virgil van Dijk.jpg"), tipoCard: "Jogador" },
  { id: "ned-2", nome: "Frenkie de Jong", selecao: "Holanda", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoF/Holanda/Frenkie de Jong.jpg"), tipoCard: "Jogador" },
  { id: "ned-3", nome: "Memphis Depay", selecao: "Holanda", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoF/Holanda/Memphis Depay.jpg"), tipoCard: "Jogador" },
  { id: "ned-4", nome: "Cody Gakpo", selecao: "Holanda", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoF/Holanda/Cody Gakpo.jpg"), tipoCard: "Jogador" },
  { id: "ned-5", nome: "Matthijs de Ligt", selecao: "Holanda", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Holanda/Matthijs de Ligt.jpg"), tipoCard: "Jogador" },
  { id: "ned-6", nome: "Nathan Aké", selecao: "Holanda", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Holanda/Nathan Aké.jpg"), tipoCard: "Jogador" },
  { id: "ned-7", nome: "Xavi Simons", selecao: "Holanda", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Holanda/Xavi Simons.jpg"), tipoCard: "Jogador" },
  { id: "ned-8", nome: "Bart Verbruggen", selecao: "Holanda", posicao: "Goleiro", raridade: "Comum", foto: require("../assets/GrupoF/Holanda/Bart Verbruggen.jpg"), tipoCard: "Jogador" },

  // --- JAPÃO ---
  { id: "jpn-1", nome: "Takefusa Kubo", selecao: "Japão", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoF/Japao/Takefusa Kubo.jpg"), tipoCard: "Jogador" },
  { id: "jpn-2", nome: "Kaoru Mitoma", selecao: "Japão", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoF/Japao/Kaoru Mitoma.jpg"), tipoCard: "Jogador" },
  { id: "jpn-3", nome: "Wataru Endo", selecao: "Japão", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoF/Japao/Wataru Endo.jpg"), tipoCard: "Jogador" },
  { id: "jpn-4", nome: "Takumi Minamino", selecao: "Japão", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Japao/Takumi Minamino.jpg"), tipoCard: "Jogador" },
  { id: "jpn-5", nome: "Ritsu Doan", selecao: "Japão", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoF/Japao/Ritsu Dōan.jpg"), tipoCard: "Jogador" },
  { id: "jpn-6", nome: "Ko Itakura", selecao: "Japão", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Japao/Ko Itakura.jpg"), tipoCard: "Jogador" },
  { id: "jpn-7", nome: "Daichi Kamada", selecao: "Japão", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Japao/Daichi Kamada.jpg"), tipoCard: "Jogador" },
  { id: "jpn-8", nome: "Ayase Ueda", selecao: "Japão", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoF/Japao/Ayase Ueda.jpg"), tipoCard: "Jogador" },

  // --- MARROCOS ---
  { id: "mar-1", nome: "Achraf Hakimi", selecao: "Marrocos", posicao: "Defesa", raridade: "Lendário", foto: require("../assets/GrupoC/Marrocos/AchirafHakimi.jpg"), tipoCard: "Jogador" },
  { id: "mar-2", nome: "Hakim Ziyech", selecao: "Marrocos", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoC/Marrocos/Hakim Ziyech.jpg"), tipoCard: "Jogador" },
  { id: "mar-3", nome: "Yassine Bounou", selecao: "Marrocos", posicao: "Goleiro", raridade: "Raro", foto: require("../assets/GrupoC/Marrocos/Yassine Bounou.jpg"), tipoCard: "Jogador" },
  { id: "mar-4", nome: "Sofyan Amrabat", selecao: "Marrocos", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoC/Marrocos/Sofyan Amrabat.jpg"), tipoCard: "Jogador" },
  { id: "mar-5", nome: "Azzedine Ounahi", selecao: "Marrocos", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoC/Marrocos/Azzedine Ounahi.jpg"), tipoCard: "Jogador" },
  { id: "mar-6", nome: "Romain Saïss", selecao: "Marrocos", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoC/Marrocos/Romain Saïss.jpg"), tipoCard: "Jogador" },
  { id: "mar-7", nome: "Noussair Mazraoui", selecao: "Marrocos", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoC/Marrocos/Noussair Mazraoui.jpg"), tipoCard: "Jogador" },
  { id: "mar-8", nome: "Youssef En-Nesyri", selecao: "Marrocos", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Marrocos/Youssef En-Nesyri.jpg"), tipoCard: "Jogador" },

  // --- HAITI ---
  { id: "hai-1", nome: "Ricardo Adé", selecao: "Haiti", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoC/Haiti/Ricardo Adé.jpg"), tipoCard: "Jogador" },
  { id: "hai-2", nome: "Johny Placide", selecao: "Haiti", posicao: "Goleiro", raridade: "Comum", foto: require("../assets/GrupoC/Haiti/Johny Placide.jpg"), tipoCard: "Jogador" },
  { id: "hai-3", nome: "Frantzdy Pierrot", selecao: "Haiti", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Haiti/Frantzdy Pierrot.jpg"), tipoCard: "Jogador" },
  { id: "hai-4", nome: "Duckens Nazon", selecao: "Haiti", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Haiti/Duckens Nazon.jpg"), tipoCard: "Jogador" },

  // --- ESCÓCIA ---
  { id: "sco-1", nome: "Andrew Robertson", selecao: "Escócia", posicao: "Defesa", raridade: "Raro", foto: require("../assets/GrupoC/Escocia/Andrew Robertson.jpg"), tipoCard: "Jogador" },
  { id: "sco-2", nome: "Scott McTominay", selecao: "Escócia", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoC/Escocia/Scott McTominay.jpg"), tipoCard: "Jogador" },
  { id: "sco-3", nome: "John McGinn", selecao: "Escócia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/John McGinn.jpg"), tipoCard: "Jogador" },
  { id: "sco-4", nome: "Kieran Tierney", selecao: "Escócia", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/Kieran Tierney.jpg"), tipoCard: "Jogador" },
  { id: "sco-5", nome: "Billy Gilmour", selecao: "Escócia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/Billy Gilmour.jpg"), tipoCard: "Jogador" },
  { id: "sco-6", nome: "Che Adams", selecao: "Escócia", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/Che Adams.jpg"), tipoCard: "Jogador" },
  { id: "sco-7", nome: "Ryan Christie", selecao: "Escócia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/Ryan Christie.jpg"), tipoCard: "Jogador" },
  { id: "sco-8", nome: "Angus Gunn", selecao: "Escócia", posicao: "Goleiro", raridade: "Comum", foto: require("../assets/GrupoC/Escocia/Angus Gunn.jpg"), tipoCard: "Jogador" },

  // --- SUECIA ---
  { id: "swe-1", nome: "Alexander Isak", selecao: "Suécia", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoF/Suecia/Alexander Isak.jpg"), tipoCard: "Jogador" },
  { id: "swe-2", nome: "Viktor Gyökeres", selecao: "Suécia", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoF/Suecia/Viktor Gyökeres.png"), tipoCard: "Jogador" },
  { id: "swe-3", nome: "Victor Lindelöf", selecao: "Suécia", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Suecia/Victor Lindelöf.jpg"), tipoCard: "Jogador" },
  { id: "swe-4", nome: "Anthony Elanga", selecao: "Suécia", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoF/Suecia/Anthony Elanga.jpg"), tipoCard: "Jogador" },
  { id: "swe-5", nome: "Lucas Bergvall", selecao: "Suécia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Suecia/Lucas Bergvall.png"), tipoCard: "Jogador" },
  { id: "swe-6", nome: "Jesper Karlstrom", selecao: "Suécia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Suecia/Jesper Karlstrom.jpg"), tipoCard: "Jogador" },
  { id: "swe-7", nome: "C. Starfelt", selecao: "Suécia", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Suecia/C. Starfelt.png"), tipoCard: "Jogador" },

  // --- TUNISIA ---
  { id: "tun-1", nome: "Hannibal Mejbri", selecao: "Tunísia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Tunisia/Hannibal Mejbri.png"), tipoCard: "Jogador" },
  { id: "tun-2", nome: "Ellyes Skhiri", selecao: "Tunísia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoF/Tunisia/Ellyes Skhiri.png"), tipoCard: "Jogador" },
  { id: "tun-3", nome: "Montassar Talbi", selecao: "Tunísia", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Tunisia/Montassar Talbi.png"), tipoCard: "Jogador" },
  { id: "tun-4", nome: "Ali Abdi", selecao: "Tunísia", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoF/Tunisia/Ali Abdi.png"), tipoCard: "Jogador" },

  // --- ARGELIA ---
  { id: "alg-1", nome: "Riyad Mahrez", selecao: "Argélia", posicao: "Ataque", raridade: "Lendário", foto: require("../assets/GrupoJ/Argelia/Riyad Mahrez.png"), tipoCard: "Jogador" },
  { id: "alg-2", nome: "Ismael Bennacer", selecao: "Argélia", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoJ/Argelia/Ismael Bennacer.jpg"), tipoCard: "Jogador" },
  { id: "alg-3", nome: "Ramy Bensebaini", selecao: "Argélia", posicao: "Defesa", raridade: "Raro", foto: require("../assets/GrupoJ/Argelia/Ramy Bensebaini.jpg"), tipoCard: "Jogador" },
  { id: "alg-4", nome: "Fares Chaibi", selecao: "Argélia", posicao: "Meio-campo", raridade: "Comum", foto: require("../assets/GrupoJ/Argelia/Fares Chaibi.jpg"), tipoCard: "Jogador" },

  // --- AUSTRIA ---
  { id: "aut-1", nome: "Marcel Sabitzer", selecao: "Áustria", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoJ/Austria/Marcel Sabitzer.jpg"), tipoCard: "Jogador" },
  { id: "aut-2", nome: "Marko Arnautović", selecao: "Áustria", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoJ/Austria/Marko Arnautović.jpg"), tipoCard: "Jogador" },
  { id: "aut-3", nome: "Konrad Laimer", selecao: "Áustria", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/GrupoJ/Austria/Konrad Laimer.jpg"), tipoCard: "Jogador" },
  { id: "aut-4", nome: "Kevin Danso", selecao: "Áustria", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoJ/Austria/Kevin Danso.jpg"), tipoCard: "Jogador" },
  { id: "aut-5", nome: "Stefan Posch", selecao: "Áustria", posicao: "Defesa", raridade: "Comum", foto: require("../assets/GrupoJ/Austria/Stefan Posch.jpg"), tipoCard: "Jogador" },

  // --- JORDANIA ---
  { id: "jor-1", nome: "Mousa Al-Tamari", selecao: "Jordânia", posicao: "Ataque", raridade: "Raro", foto: require("../assets/GrupoJ/Jordania/Mousa Al-Tamari.jpg"), tipoCard: "Jogador" },
  { id: "jor-2", nome: "Yazan Al-Naimat", selecao: "Jordânia", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoJ/Jordania/Yazan Al-Naimat.jpg"), tipoCard: "Jogador" },
  { id: "jor-3", nome: "Ali Olwan", selecao: "Jordânia", posicao: "Ataque", raridade: "Comum", foto: require("../assets/GrupoJ/Jordania/Ali Olwan.png"), tipoCard: "Jogador" },

  // --- MASCOTES ---
  { id: "masc-1", nome: "La'eeb", selecao: "Catar 2022", posicao: "Ataque", raridade: "Lendário", foto: require("../assets/images/La eeb.jpg"), tipoCard: "Mascote" },
  { id: "masc-2", nome: "Fuleco", selecao: "Brasil 2014", posicao: "Meio-campo", raridade: "Raro", foto: require("../assets/images/Fuleco.png"), tipoCard: "Mascote" },
  { id: "masc-3", nome: "Zabivaka", selecao: "Rússia 2018", posicao: "Ataque", raridade: "Raro", foto: require("../assets/images/Zabivaka.jpg"), tipoCard: "Mascote" },
];
