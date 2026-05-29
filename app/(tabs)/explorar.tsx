import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/theme/colors";

// ─── dados mockados ────────────────────────────────────────────────────────────

const FILTROS = ["Todos", "EUA", "México", "Canadá"];

const DESTAQUE = {
  cidade: "Nova York, EUA",
  nome: "Estátua da Liberdade",
  descricao:
    "Símbolo da liberdade americana, a estátua fica na ilha Liberty e pode ser visitada de balsa saindo do Battery Park.",
  xp: 30,
};

const DESTINOS = [
  {
    id: "1",
    nome: "Palácio de Bellas Artes",
    cidade: "Cidade do México",
    rating: 4.8,
    xp: 25,
    iconeBg: "#412402",
    iconeColor: "#EF9F27",
    icone: "business-outline" as const,
  },
  {
    id: "2",
    nome: "Stanley Park",
    cidade: "Vancouver, Canadá",
    rating: 4.9,
    xp: 20,
    iconeBg: "#085041",
    iconeColor: "#5DCAA5",
    icone: "leaf-outline" as const,
  },
  {
    id: "3",
    nome: "CN Tower",
    cidade: "Toronto, Canadá",
    rating: 4.7,
    xp: 20,
    iconeBg: "#412402",
    iconeColor: "#EF9F27",
    icone: "navigate-outline" as const,
  },
];

const ROTEIRO = {
  cidade: "Nova York",
  paradas: [
    { label: "Estátua da Liberdade", cor: colors.gold },
    { label: "Central Park",         cor: colors.purple },
    { label: "Times Square",         cor: colors.purple },
  ],
};

// ─── componentes ──────────────────────────────────────────────────────────────

function Filtros({ ativo, onSelect }: { ativo: string; onSelect: (f: string) => void }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.filtrosScroll}
      contentContainerStyle={s.filtrosContent}
    >
      {FILTROS.map((f) => (
        <TouchableOpacity
          key={f}
          style={[s.filtroPill, ativo === f && s.filtroPillAtivo]}
          onPress={() => onSelect(f)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === f && s.filtroTextoAtivo]}>{f}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function CardDestaque() {
  return (
    <View style={s.destaque}>
      <View style={s.destaqueHeader}>
        <View style={s.destaqueRow}>
          <Ionicons name="location-outline" size={12} color="#378ADD" />
          <Text style={s.destaqueCidade}>{DESTAQUE.cidade}</Text>
        </View>
        <View style={s.destaqueBadge}>
          <Text style={s.destaqueBadgeTexto}>DESTAQUE</Text>
        </View>
      </View>

      <Text style={s.destaqueNome}>{DESTAQUE.nome}</Text>
      <Text style={s.destaqueDesc}>{DESTAQUE.descricao}</Text>

      <View style={s.destaqueFig}>
        <View style={s.destaqueFigLeft}>
          <Ionicons name="diamond-outline" size={13} color={colors.gold} />
          <Text style={s.destaqueFigTexto}>Figurinha desbloqueável</Text>
        </View>
        <View style={s.destaqueXp}>
          <Text style={s.destaqueXpTexto}>+{DESTAQUE.xp} XP</Text>
        </View>
      </View>
    </View>
  );
}

function CardDestino({ item }: { item: typeof DESTINOS[0] }) {
  return (
    <TouchableOpacity style={s.destino} activeOpacity={0.8}>
      <View style={[s.destinoIcone, { backgroundColor: item.iconeBg }]}>
        <Ionicons name={item.icone} size={18} color={item.iconeColor} />
      </View>

      <View style={s.destinoTextos}>
        <Text style={[s.destinoNome, { color: item.iconeColor }]}>{item.nome}</Text>
        <View style={s.destinoRow}>
          <Ionicons name="location-outline" size={10} color={colors.textMuted} />
          <Text style={s.destinoCidade}>{item.cidade}</Text>
        </View>
      </View>

      <View style={s.destinoDireita}>
        <View style={s.destinoRating}>
          <Ionicons name="star-outline" size={10} color={colors.gold} />
          <Text style={s.destinoRatingTexto}>{item.rating}</Text>
        </View>
        <View style={[s.destinoXpBadge, { backgroundColor: item.iconeBg }]}>
          <Text style={[s.destinoXpTexto, { color: item.iconeColor }]}>+{item.xp}XP</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function CardRoteiro() {
  return (
    <View style={s.roteiro}>
      <View style={s.roteiroHeader}>
        <Ionicons name="git-merge-outline" size={14} color="#7F77DD" />
        <Text style={s.roteiroTitulo}>Roteiro sugerido — {ROTEIRO.cidade}</Text>
      </View>

      <View style={s.roteiroCorpo}>
        <View style={s.roteiroLinha}>
          {ROTEIRO.paradas.map((p, i) => (
            <View key={i} style={s.roteiroItem}>
              <View style={[s.roteiroPonto, { backgroundColor: p.cor }]} />
              {i < ROTEIRO.paradas.length - 1 && <View style={s.roteiroConector} />}
            </View>
          ))}
        </View>

        <View style={s.roteiroLabels}>
          {ROTEIRO.paradas.map((p, i) => (
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

import { useState } from "react";

export default function ExplorarScreen() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>

        {/* header */}
        <View style={s.header}>
          <View>
            <Text style={s.headerSub}>EXPLORAR</Text>
            <Text style={s.headerTitulo}>Destinos da Copa</Text>
          </View>
          <View style={s.avatarGold}>
            <Text style={s.avatarGoldTexto}>SO</Text>
          </View>
        </View>

        {/* filtros */}
        <Filtros ativo={filtroAtivo} onSelect={setFiltroAtivo} />

        {/* destaque */}
        <View style={s.section}>
          <CardDestaque />
        </View>

        {/* próximos destinos */}
        <View style={s.section}>
          <View style={s.rowBetween}>
            <Text style={s.sectionTitle}>Próximos destinos</Text>
            <TouchableOpacity>
              <Text style={s.link}>ver mapa</Text>
            </TouchableOpacity>
          </View>
          <View style={s.lista}>
            {DESTINOS.map((d) => <CardDestino key={d.id} item={d} />)}
          </View>
        </View>

        {/* roteiro */}
        <View style={[s.section, { marginBottom: 24 }]}>
          <CardRoteiro />
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
  header:         { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  headerSub:      { fontSize: 10, color: colors.textFaint, letterSpacing: 1.5 },
  headerTitulo:   { fontSize: 22, fontWeight: "600", color: colors.goldLight },
  avatarGold:     { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.gold, alignItems: "center", justifyContent: "center" },
  avatarGoldTexto:{ fontSize: 11, fontWeight: "700", color: colors.bg },

  // filtros
  filtrosScroll:   { marginBottom: 10 },
  filtrosContent:  { paddingHorizontal: 12, gap: 6, flexDirection: "row" },
  filtroPill:      { backgroundColor: colors.bgCard, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5, borderWidth: 0.5, borderColor: colors.gold },
  filtroPillAtivo: { backgroundColor: colors.gold, borderColor: colors.gold },
  filtroTexto:     { fontSize: 10, color: colors.textMuted },
  filtroTextoAtivo:{ color: colors.bg, fontWeight: "600" },

  section:    { paddingHorizontal: 12, marginBottom: 12 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  sectionTitle:{ fontSize: 11, color: colors.textMuted, fontWeight: "600" },
  link:       { fontSize: 10, color: colors.gold },

  // destaque
  destaque:       { backgroundColor: "#0a1628", borderRadius: 14, padding: 14, borderWidth: 0.5, borderColor: "#185FA5" },
  destaqueHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  destaqueRow:    { flexDirection: "row", alignItems: "center", gap: 4 },
  destaqueCidade: { fontSize: 10, color: "#85B7EB", fontWeight: "600", letterSpacing: 1, textTransform: "uppercase" },
  destaqueBadge:  { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  destaqueBadgeTexto: { fontSize: 9, color: "#B5D4F4", fontWeight: "600" },
  destaqueNome:   { fontSize: 16, color: "#E6F1FB", fontWeight: "600", marginBottom: 6 },
  destaqueDesc:   { fontSize: 11, color: "#85B7EB", lineHeight: 17, marginBottom: 12 },
  destaqueFig:    { backgroundColor: "#0c1f3a", borderRadius: 8, padding: 9, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  destaqueFigLeft:{ flexDirection: "row", alignItems: "center", gap: 6 },
  destaqueFigTexto:{ fontSize: 10, color: colors.goldLight },
  destaqueXp:     { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  destaqueXpTexto:{ fontSize: 10, color: "#E6F1FB", fontWeight: "600" },

  // destinos
  lista:          { gap: 7 },
  destino:        { borderRadius: 10, padding: 12, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: colors.gold, backgroundColor: colors.bgCard },
  destinoIcone:   { width: 38, height: 38, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  destinoTextos:  { flex: 1 },
  destinoNome:    { fontSize: 11, fontWeight: "600", marginBottom: 3 },
  destinoRow:     { flexDirection: "row", alignItems: "center", gap: 3 },
  destinoCidade:  { fontSize: 10, color: colors.textMuted },
  destinoDireita: { alignItems: "flex-end", gap: 4 },
  destinoRating:  { flexDirection: "row", alignItems: "center", gap: 3 },
  destinoRatingTexto: { fontSize: 10, color: colors.gold },
  destinoXpBadge: { borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2 },
  destinoXpTexto: { fontSize: 9, fontWeight: "600" },

  // roteiro
  roteiro:        { backgroundColor: "#1a1927", borderRadius: 10, padding: 12, borderWidth: 0.5, borderColor: "#2e2b52" },
  roteiroHeader:  { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  roteiroTitulo:  { fontSize: 11, color: "#CECBF6", fontWeight: "600" },
  roteiroCorpo:   { flexDirection: "row", alignItems: "center", gap: 8 },
  roteiroLinha:   { alignItems: "center" },
  roteiroItem:    { alignItems: "center" },
  roteiroPonto:   { width: 8, height: 8, borderRadius: 4 },
  roteiroConector:{ width: 1, height: 14, backgroundColor: colors.purpleDark },
  roteiroLabels:  { flex: 1, gap: 9 },
  roteiroLabel:   { fontSize: 10 },
  roteiroBtn:     { backgroundColor: colors.purpleDark, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 6 },
  roteiroBtnTexto:{ fontSize: 10, color: "#CECBF6", fontWeight: "600" },
});