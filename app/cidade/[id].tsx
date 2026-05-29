import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { CIDADES, type PontoTuristico } from "@/src/data/destinos";
import { colors } from "@/src/theme/colors";

// ─── componentes ──────────────────────────────────────────────────────────────

function CardDestaque({ ponto, cidade }: { ponto: PontoTuristico; cidade: string }) {
  return (
    <View style={s.destaque}>
      <View style={s.destaqueHeader}>
        <View style={s.destaqueRow}>
          <Ionicons name="location-outline" size={12} color="#378ADD" />
          <Text style={s.destaqueCidade}>{cidade}</Text>
        </View>
        <View style={s.destaqueBadge}>
          <Text style={s.destaqueBadgeTexto}>DESTAQUE</Text>
        </View>
      </View>

      <Text style={s.destaqueNome}>{ponto.nome}</Text>
      <Text style={s.destaqueDesc}>{ponto.descricao}</Text>

      {ponto.figurinhaDesbloqueavel && (
        <View style={s.destaqueFig}>
          <View style={s.destaqueFigLeft}>
            <Ionicons name="diamond-outline" size={13} color={colors.gold} />
            <Text style={s.destaqueFigTexto}>Figurinha desbloqueável</Text>
          </View>
          <View style={s.destaqueXp}>
            <Text style={s.destaqueXpTexto}>+{ponto.xp} XP</Text>
          </View>
        </View>
      )}
    </View>
  );
}

function CardPonto({ ponto }: { ponto: PontoTuristico }) {
  return (
    <TouchableOpacity style={s.ponto} activeOpacity={0.8}>
      <View style={[s.pontoIcone, { backgroundColor: ponto.iconeBg }]}>
        <Ionicons name={ponto.icone as any} size={18} color={ponto.iconeColor} />
      </View>

      <View style={s.pontoTextos}>
        <Text style={[s.pontoNome, { color: ponto.iconeColor }]}>{ponto.nome}</Text>
        <View style={s.pontoRatingRow}>
          <Ionicons name="star-outline" size={10} color={colors.gold} />
          <Text style={s.pontoRating}>{ponto.rating}</Text>
        </View>
      </View>

      <View style={[s.pontoXpBadge, { backgroundColor: ponto.iconeBg }]}>
        <Text style={[s.pontoXpTexto, { color: ponto.iconeColor }]}>+{ponto.xp} XP</Text>
      </View>
    </TouchableOpacity>
  );
}

function CardRoteiro({ paradas, cidade }: { paradas: { label: string; cor: string }[]; cidade: string }) {
  return (
    <View style={s.roteiro}>
      <View style={s.roteiroHeader}>
        <Ionicons name="git-merge-outline" size={14} color="#7F77DD" />
        <Text style={s.roteiroTitulo}>Roteiro sugerido — {cidade}</Text>
      </View>

      <View style={s.roteiroCorpo}>
        {/* linha de pontos */}
        <View style={s.roteiroLinha}>
          {paradas.map((p, i) => (
            <View key={i} style={s.roteiroItem}>
              <View style={[s.roteiroPonto, { backgroundColor: p.cor }]} />
              {i < paradas.length - 1 && <View style={s.roteiroConector} />}
            </View>
          ))}
        </View>

        {/* labels */}
        <View style={s.roteiroLabels}>
          {paradas.map((p, i) => (
            <Text key={i} style={[s.roteiroLabel, { color: p.cor }]}>{p.label}</Text>
          ))}
        </View>

        <TouchableOpacity style={s.roteiroBtn} activeOpacity={0.8}>
          <Text style={s.roteiroBtnTexto}>ver rota</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function CidadeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const cidade = CIDADES.find((c) => c.id === id);

  if (!cidade) {
    return (
      <SafeAreaView style={s.safe}>
        <View style={s.notFound}>
          <Text style={s.notFoundTexto}>Cidade não encontrada.</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={s.link}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>

        {/* header */}
        <View style={s.header}>
          <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={18} color={colors.textMuted} />
          </TouchableOpacity>
          <View style={s.headerCenter}>
            <Text style={s.headerBandeira}>{cidade.bandeira}</Text>
            <Text style={s.headerTitulo}>{cidade.nome}</Text>
          </View>
          <View style={s.headerRight}>
            <Text style={s.headerPontos}>{cidade.pontos.length + 1} pontos</Text>
          </View>
        </View>

        {/* card destaque */}
        <View style={s.section}>
          <CardDestaque ponto={cidade.destaque} cidade={cidade.nome} />
        </View>

        {/* outros pontos */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Outros pontos turísticos</Text>
          <View style={s.lista}>
            {cidade.pontos.map((p) => (
              <CardPonto key={p.id} ponto={p} />
            ))}
          </View>
        </View>

        {/* roteiro */}
        <View style={[s.section, { marginBottom: 24 }]}>
          <CardRoteiro paradas={cidade.roteiro} cidade={cidade.nome} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// ─── estilos ──────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },

  // header
  header:        { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingTop: 12, paddingBottom: 10, gap: 10 },
  backBtn:       { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.bgCard, alignItems: "center", justifyContent: "center" },
  headerCenter:  { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 },
  headerBandeira:{ fontSize: 22 },
  headerTitulo:  { fontSize: 20, fontWeight: "600", color: colors.goldLight },
  headerRight:   { backgroundColor: colors.bgCard, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, borderWidth: 0.5, borderColor: "#3a3a38" },
  headerPontos:  { fontSize: 10, color: colors.textMuted },

  section:      { paddingHorizontal: 12, marginBottom: 12 },
  sectionTitle: { fontSize: 11, color: colors.textMuted, fontWeight: "600", marginBottom: 8 },
  lista:        { gap: 7 },
  link:         { fontSize: 12, color: colors.gold, marginTop: 8 },

  // destaque
  destaque:           { backgroundColor: "#0a1628", borderRadius: 14, padding: 14, borderWidth: 0.5, borderColor: "#185FA5" },
  destaqueHeader:     { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  destaqueRow:        { flexDirection: "row", alignItems: "center", gap: 4 },
  destaqueCidade:     { fontSize: 10, color: "#85B7EB", fontWeight: "600", letterSpacing: 1, textTransform: "uppercase" },
  destaqueBadge:      { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  destaqueBadgeTexto: { fontSize: 9, color: "#B5D4F4", fontWeight: "600" },
  destaqueNome:       { fontSize: 16, color: "#E6F1FB", fontWeight: "600", marginBottom: 6 },
  destaqueDesc:       { fontSize: 11, color: "#85B7EB", lineHeight: 17, marginBottom: 12 },
  destaqueFig:        { backgroundColor: "#0c1f3a", borderRadius: 8, padding: 9, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  destaqueFigLeft:    { flexDirection: "row", alignItems: "center", gap: 6 },
  destaqueFigTexto:   { fontSize: 10, color: colors.goldLight },
  destaqueXp:         { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  destaqueXpTexto:    { fontSize: 10, color: "#E6F1FB", fontWeight: "600" },

  // pontos
  ponto:          { backgroundColor: colors.bgCard, borderRadius: 10, padding: 12, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: "#3a3a38" },
  pontoIcone:     { width: 38, height: 38, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  pontoTextos:    { flex: 1 },
  pontoNome:      { fontSize: 11, fontWeight: "600", marginBottom: 3 },
  pontoRatingRow: { flexDirection: "row", alignItems: "center", gap: 3 },
  pontoRating:    { fontSize: 10, color: colors.gold },
  pontoXpBadge:   { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 },
  pontoXpTexto:   { fontSize: 10, fontWeight: "600" },

  // roteiro
  roteiro:         { backgroundColor: "#1a1927", borderRadius: 10, padding: 12, borderWidth: 0.5, borderColor: "#2e2b52" },
  roteiroHeader:   { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  roteiroTitulo:   { fontSize: 11, color: "#CECBF6", fontWeight: "600" },
  roteiroCorpo:    { flexDirection: "row", alignItems: "center", gap: 8 },
  roteiroLinha:    { alignItems: "center" },
  roteiroItem:     { alignItems: "center" },
  roteiroPonto:    { width: 8, height: 8, borderRadius: 4 },
  roteiroConector: { width: 1, height: 14, backgroundColor: colors.purpleDark },
  roteiroLabels:   { flex: 1, gap: 9 },
  roteiroLabel:    { fontSize: 10 },
  roteiroBtn:      { backgroundColor: colors.purpleDark, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 6 },
  roteiroBtnTexto: { fontSize: 10, color: "#CECBF6", fontWeight: "600" },

  // not found
  notFound:      { flex: 1, alignItems: "center", justifyContent: "center" },
  notFoundTexto: { fontSize: 14, color: colors.textMuted },
});