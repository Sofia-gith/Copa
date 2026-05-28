import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "../../src/theme/colors";

// ─── dados mockados ────────────────────────────────────────────────────────────

const USUARIO = { iniciais: "SO", nome: "sofia" };

const PROGRESSO = { atual: 437, total: 712, raras: 12, comuns: 425 };

const FIGURINHAS_RARAS = [
  { id: "1", nome: "Ronaldo '98", tipo: "LENDÁRIO", cor: colors.purpleLight, bg: colors.purpleDark, bgIcon: colors.purple },
  { id: "2", nome: "Pelé '70",    tipo: "ÍCONE",    cor: colors.greenLight,  bg: colors.greenDark,  bgIcon: colors.green },
];

const DESAFIO_DIARIO = {
  descricao: "Responda 3 perguntas sobre a Copa 2002",
  xp: 50,
};

const RANKING = [
  { pos: 1, iniciais: "MA", nome: "matheus_a", xp: 4280, destaque: true },
  { pos: 2, iniciais: "JG", nome: "julia_g",   xp: 3915, destaque: false },
  { pos: 8, iniciais: "SO", nome: "sofia (você)", xp: 2140, destaque: true, eu: true },
];

const CONQUISTAS = [
  { id: "1", icone: "flame",    cor: colors.gold,       bg: colors.goldDark,   label: "7 dias seguidos" },
  { id: "2", icone: "images",   cor: colors.greenLight, bg: colors.greenDark, label: "50 figurinhas" },
];

// ─── componentes menores ───────────────────────────────────────────────────────

function BannerProgresso() {
  const pct = Math.round((PROGRESSO.atual / PROGRESSO.total) * 100);
  return (
    <View style={s.banner}>
      <View style={s.bannerCircle1} />
      <View style={s.bannerCircle2} />
      <Text style={s.bannerTag}>FIFA WORLD CUP 2026</Text>
      <Text style={s.bannerTitulo}>Complete seu álbum e{"\n"}ganhe a taça!</Text>
      <View style={s.barraFundo}>
        <View style={[s.barraFill, { width: `${pct}%` }]} />
      </View>
      <Text style={s.bannerSub}>
        {PROGRESSO.atual} de {PROGRESSO.total} figurinhas
      </Text>
    </View>
  );
}

function CardFigurinha({ item }: { item: typeof FIGURINHAS_RARAS[0] }) {
  return (
    <TouchableOpacity style={[s.cardFig, { backgroundColor: item.bg }]} activeOpacity={0.8}>
      <View style={[s.cardFigIcon, { backgroundColor: item.bgIcon }]}>
        <Ionicons name="star" size={22} color={item.cor} />
      </View>
      <Text style={[s.cardFigNome, { color: item.cor }]}>{item.nome}</Text>
      <Text style={[s.cardFigTipo, { color: item.cor, opacity: 0.7 }]}>{item.tipo}</Text>
    </TouchableOpacity>
  );
}

function DesafioDiario() {
  return (
    <View style={s.desafio}>
      <View style={s.desafioIcon}>
        <Ionicons name="flash" size={18} color={colors.purpleLight} />
      </View>
      <View style={s.desafioTextos}>
        <Text style={s.desafioLabel}>DESAFIO DIÁRIO</Text>
        <Text style={s.desafioDesc}>{DESAFIO_DIARIO.descricao}</Text>
      </View>
      <View style={s.desafioXp}>
        <Text style={s.desafioXpText}>+{DESAFIO_DIARIO.xp} XP</Text>
      </View>
    </View>
  );
}

function ItemRanking({ item }: { item: typeof RANKING[0] }) {
  const bg  = item.eu ? colors.goldDark    : item.destaque ? colors.purpleDark : colors.bgCard;
  const brd = item.eu ? colors.goldDark  : item.destaque ? "#2e2b52"         : "transparent";
  const cor = item.eu ? colors.goldLight : item.destaque ? "#EEEDFE"          : colors.textPrimary;
  const xpC = item.eu ? colors.gold      : item.destaque ? colors.goldLight   : colors.textMuted;
  const posC= item.eu ? colors.gold      : item.destaque ? colors.goldLight   : colors.textMuted;
  const avBg= item.eu ? colors.goldDark  : item.destaque ? colors.purple      : "#444441";
  const avC = item.eu ? colors.goldLight : colors.purpleLight;

  return (
    <View style={[s.rankItem, { backgroundColor: bg, borderColor: brd, borderWidth: brd === "transparent" ? 0 : 0.5 }]}>
      <Text style={[s.rankPos, { color: posC }]}>{item.pos}</Text>
      <Ionicons
        name={item.pos === 1 ? "medal" : item.pos === 2 ? "medal-outline" : "person-outline"}
        size={14}
        color={posC}
      />
      <View style={[s.avatar, { backgroundColor: avBg }]}>
        <Text style={[s.avatarText, { color: avC }]}>{item.iniciais}</Text>
      </View>
      <Text style={[s.rankNome, { color: cor, flex: 1 }]}>{item.nome}</Text>
      <Text style={[s.rankXp, { color: xpC }]}>{item.xp.toLocaleString("pt-BR")} XP</Text>
    </View>
  );
}

function MinhasFigurinhas() {
  const router = useRouter();

  return (
    <View style={s.minhasContainer}>
      {/* cabeçalho com total */}
      <View style={s.rowBetween}>
        <View style={s.rowCenter}>
          <Ionicons name="albums-outline" size={14} color={colors.gold} />
          <Text style={s.sectionTitle}>Minhas figurinhas</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/album")}>
          <Text style={s.link}>ver álbum</Text>
        </TouchableOpacity>
      </View>

      {/* contador geral */}
      <View style={s.minhasResumo}>
        <View style={s.minhasResumoItem}>
          <Text style={s.minhasResumoNum}>{PROGRESSO.atual}</Text>
          <Text style={s.minhasResumoLabel}>coletadas</Text>
        </View>
        <View style={s.minhasDivisor} />
        <View style={s.minhasResumoItem}>
          <Text style={[s.minhasResumoNum, { color: colors.textMuted }]}>
            {PROGRESSO.total - PROGRESSO.atual}
          </Text>
          <Text style={s.minhasResumoLabel}>faltando</Text>
        </View>
        <View style={s.minhasDivisor} />
        <View style={s.minhasResumoItem}>
          <Text style={[s.minhasResumoNum, { color: colors.purpleLight }]}>
            {PROGRESSO.raras}
          </Text>
          <Text style={s.minhasResumoLabel}>raras</Text>
        </View>
      </View>

      {/* botões de filtro */}
      <View style={s.minhasBotoes}>
        <TouchableOpacity
          style={s.btnRaras}
          activeOpacity={0.8}
          onPress={() => router.push({ pathname: "/album", params: { filtro: "raras" } })}
        >
          <Ionicons name="diamond" size={14} color={colors.purpleLight} />
          <View>
            <Text style={s.btnRarasLabel}>Figurinhas raras</Text>
            <Text style={s.btnRarasSub}>{PROGRESSO.raras} desbloqueadas</Text>
          </View>
          <Ionicons name="arrow-forward" size={14} color={colors.purple} style={{ marginLeft: "auto" }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={s.btnComuns}
          activeOpacity={0.8}
          onPress={() => router.push({ pathname: "/album", params: { filtro: "comuns" } })}
        >
          <Ionicons name="copy-outline" size={14} color={colors.textPrimary} />
          <View>
            <Text style={s.btnComunsLabel}>Figurinhas comuns</Text>
            <Text style={s.btnComunsSub}>{PROGRESSO.comuns} desbloqueadas</Text>
          </View>
          <Ionicons name="arrow-forward" size={14} color={colors.textFaint} style={{ marginLeft: "auto" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CardConquista({ item }: { item: typeof CONQUISTAS[0] }) {
  return (
    <View style={[s.conquista, { backgroundColor: item.bg }]}>
      <Ionicons name={item.icone as any} size={16} color={item.cor} />
      <Text style={[s.conquistaLabel, { color: item.cor }]}>{item.label}</Text>
    </View>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>

        {/* header */}
        <View style={s.header}>
          <View>
            <Text style={s.headerSub}>ÁLBUM DIGITAL</Text>
            <Text style={s.headerTitulo}>CopaDex</Text>
          </View>
          <View style={s.headerRight}>
            <TouchableOpacity style={s.iconBtn}>
              <Ionicons name="notifications-outline" size={16} color={colors.textMuted} />
            </TouchableOpacity>
            <View style={s.avatarGold}>
              <Text style={s.avatarGoldText}>{USUARIO.iniciais}</Text>
            </View>
          </View>
        </View>

        {/* banner progresso */}
        <View style={s.section}>
          <BannerProgresso />
        </View>

        {/* figurinhas raras */}
        <View style={s.section}>
          <View style={s.rowBetween}>
            <View style={s.rowCenter}>
              <Ionicons name="diamond-outline" size={14} color={colors.gold} />
              <Text style={s.sectionTitle}>Figurinhas raras</Text>
            </View>
            <TouchableOpacity>
              <Text style={s.link}>ver todas</Text>
            </TouchableOpacity>
          </View>
          <View style={s.gridFig}>
            {FIGURINHAS_RARAS.map((f) => <CardFigurinha key={f.id} item={f} />)}
          </View>
        </View>

        {/* desafio diário */}
        <View style={s.section}>
          <DesafioDiario />
        </View>
        {/* minhas figurinhas */}
        <View style={s.section}>
          <MinhasFigurinhas />
        </View>

        {/* conquistas */}
        <View style={[s.section, { marginBottom: 24 }]}>
          <Text style={s.sectionTitle}>Últimas conquistas</Text>
          <View style={s.gridConquistas}>
            {CONQUISTAS.map((c) => <CardConquista key={c.id} item={c} />)}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// ─── estilos ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },

  // header
  header:         { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  headerSub:      { fontSize: 10, color: colors.textFaint, letterSpacing: 1.5 },
  headerTitulo:   { fontSize: 22, fontWeight: "600", color: colors.goldLight },
  headerRight:    { flexDirection: "row", alignItems: "center", gap: 8 },
  iconBtn:        { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.bgCard, alignItems: "center", justifyContent: "center" },
  avatarGold:     { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.gold, alignItems: "center", justifyContent: "center" },
  avatarGoldText: { fontSize: 11, fontWeight: "600", color: colors.bg },

  section: { paddingHorizontal: 12, marginBottom: 12 },

  // banner
  banner:        { backgroundColor: colors.goldDark, borderRadius: 14, padding: 14, overflow: "hidden" },
  bannerCircle1: { position: "absolute", right: -16, top: -16, width: 72, height: 72, borderRadius: 36, backgroundColor: colors.goldDark, opacity: 0.6 },
  bannerCircle2: { position: "absolute", right: 20, bottom: -20, width: 56, height: 56, borderRadius: 28, backgroundColor: colors.goldDark, opacity: 0.4 },
  bannerTag:     { fontSize: 9, color: colors.gold, letterSpacing: 1.5, fontWeight: "600", marginBottom: 4 },
  bannerTitulo:  { fontSize: 14, color: colors.goldLight, fontWeight: "600", marginBottom: 10, maxWidth: 180, lineHeight: 20 },
  barraFundo:    { height: 5, backgroundColor: colors.goldDark, borderRadius: 3, marginBottom: 4 },
  barraFill:     { height: 5, backgroundColor: colors.gold, borderRadius: 3 },
  bannerSub:     { fontSize: 10, color: "#884f0b" },

  // títulos de seção
  sectionTitle: { fontSize: 11, color: colors.textMuted, fontWeight: "600", marginBottom: 8 },
  rowBetween:   { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  rowCenter:    { flexDirection: "row", alignItems: "center", gap: 4 },
  link:         { fontSize: 10, color: colors.gold },

  // figurinhas raras
  gridFig:     { flexDirection: "row", gap: 8 },
  cardFig:     { flex: 1, borderRadius: 10, padding: 10, alignItems: "center" },
  cardFigIcon: { width: 40, height: 40, borderRadius: 8, alignItems: "center", justifyContent: "center", marginBottom: 6 },
  cardFigNome: { fontSize: 11, fontWeight: "600", marginBottom: 2 },
  cardFigTipo: { fontSize: 9, letterSpacing: 0.5 },

  // desafio
  desafio:       { backgroundColor: "#1a1927", borderRadius: 10, padding: 11, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: "#2e2b52" },
  desafioIcon:   { width: 34, height: 34, borderRadius: 8, backgroundColor: colors.purple, alignItems: "center", justifyContent: "center" },
  desafioTextos: { flex: 1 },
  desafioLabel:  { fontSize: 9, color: "#7F77DD", fontWeight: "600", letterSpacing: 1, marginBottom: 2 },
  desafioDesc:   { fontSize: 11, color: "#EEEDFE", lineHeight: 16 },
  desafioXp:     { backgroundColor: colors.gold, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 },
  desafioXpText: { fontSize: 10, fontWeight: "600", color: colors.bg },

  // ranking
  lista:      { gap: 5 },
  rankItem:   { flexDirection: "row", alignItems: "center", gap: 7, borderRadius: 8, paddingVertical: 7, paddingHorizontal: 9 },
  rankPos:    { fontSize: 11, fontWeight: "600", minWidth: 14 },
  avatar:     { width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 9, fontWeight: "600" },
  rankNome:   { fontSize: 11 },
  rankXp:     { fontSize: 11, fontWeight: "600" },

  // minhas figurinhas
  minhasContainer: { backgroundColor: colors.bgCard, borderRadius: 12, padding: 12, borderWidth: 0.5, borderColor: colors.goldDark },
  minhasResumo:    { flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: colors.bg, borderRadius: 8, padding: 10, marginBottom: 10 },
  minhasResumoItem:{ alignItems: "center", gap: 2 },
  minhasResumoNum: { fontSize: 18, fontWeight: "600", color: colors.gold },
  minhasResumoLabel:{ fontSize: 9, color: colors.textFaint },
  minhasDivisor:   { width: 0.5, height: 28, backgroundColor: colors.goldDark, },
  minhasBotoes:    { gap: 7 },
  btnRaras:        { backgroundColor: colors.purpleDark, borderRadius: 10, padding: 10, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: colors.purple },
  btnRarasLabel:   { fontSize: 11, color: colors.purpleLight, fontWeight: "600" },
  btnRarasSub:     { fontSize: 9, color: colors.purple, marginTop: 1 },
  btnComuns:       { backgroundColor: "#252523", borderRadius: 10, padding: 10, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: colors.goldDark },
  btnComunsLabel:  { fontSize: 11, color: colors.textPrimary, fontWeight: "600" },
  btnComunsSub:    { fontSize: 9, color: colors.textFaint, marginTop: 1 },

  // conquistas
  gridConquistas: { flexDirection: "row", gap: 8 },
  conquista:      { flex: 1, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap: 6 },
  conquistaLabel: { fontSize: 10, lineHeight: 14 },
});