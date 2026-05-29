import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const s = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },

  // header
  header:          { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  headerSub:       { fontSize: 10, color: colors.textFaint, letterSpacing: 1.5 },
  headerTitulo:    { fontSize: 22, fontWeight: "600", color: colors.goldLight },
  avatarGold:      { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.gold, alignItems: "center", justifyContent: "center" },
  avatarGoldTexto: { fontSize: 11, fontWeight: "700", color: colors.bg },

  // filtros
  filtrosScroll:    { marginBottom: 10 },
  filtrosContent:   { paddingHorizontal: 12, gap: 6, flexDirection: "row" },
  filtroPill:       { backgroundColor: colors.bgCard, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5, borderWidth: 0.5, borderColor: "#3a3a38" },
  filtroPillAtivo:  { backgroundColor: colors.gold, borderColor: colors.gold },
  filtroTexto:      { fontSize: 10, color: colors.textMuted },
  filtroTextoAtivo: { color: colors.bg, fontWeight: "600" },

  section:      { paddingHorizontal: 12, marginBottom: 12 },
  rowBetween:   { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  sectionTitle: { fontSize: 11, color: colors.textMuted, fontWeight: "600" },
  link:         { fontSize: 10, color: colors.gold },

  // países / agrupamento
  paisHeader:       { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8, marginTop: 4 },
  paisBandeira:     { fontSize: 18 },
  paisNome:         { fontSize: 13, color: colors.textPrimary, fontWeight: "600" },
  cidadesLista:     { gap: 7, marginBottom: 4 },
  cidadeCard:       { backgroundColor: colors.bgCard, borderRadius: 10, padding: 12, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: "#3a3a38" },
  cidadeIcone:      { width: 38, height: 38, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  cidadeTextos:     { flex: 1 },
  cidadeNome:       { fontSize: 12, fontWeight: "600", color: colors.textPrimary, marginBottom: 2 },
  cidadePontos:     { fontSize: 10, color: colors.textMuted },
  cidadeSetaCol:    { alignItems: "flex-end", gap: 4 },
  cidadeXpBadge:    { borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, backgroundColor: "#291a01" },
  cidadeXpTexto:    { fontSize: 9, fontWeight: "600", color: colors.gold },

  // destaque (usado na tela de cidade)
  destaque:          { backgroundColor: "#0a1628", borderRadius: 14, padding: 14, borderWidth: 0.5, borderColor: "#185FA5" },
  destaqueHeader:    { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  destaqueRow:       { flexDirection: "row", alignItems: "center", gap: 4 },
  destaqueCidade:    { fontSize: 10, color: "#85B7EB", fontWeight: "600", letterSpacing: 1, textTransform: "uppercase" },
  destaqueBadge:     { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  destaqueBadgeTexto:{ fontSize: 9, color: "#B5D4F4", fontWeight: "600" },
  destaqueNome:      { fontSize: 16, color: "#E6F1FB", fontWeight: "600", marginBottom: 6 },
  destaqueDesc:      { fontSize: 11, color: "#85B7EB", lineHeight: 17, marginBottom: 12 },
  destaqueFig:       { backgroundColor: "#0c1f3a", borderRadius: 8, padding: 9, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  destaqueFigLeft:   { flexDirection: "row", alignItems: "center", gap: 6 },
  destaqueFigTexto:  { fontSize: 10, color: colors.goldLight },
  destaqueXp:        { backgroundColor: "#185FA5", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  destaqueXpTexto:   { fontSize: 10, color: "#E6F1FB", fontWeight: "600" },

  // lista de pontos turísticos
  lista:             { gap: 7 },
  destino:           { borderRadius: 10, padding: 12, flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 0.5, borderColor: "#3a3a38", backgroundColor: colors.bgCard },
  destinoIcone:      { width: 38, height: 38, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  destinoTextos:     { flex: 1 },
  destinoNome:       { fontSize: 11, fontWeight: "600", marginBottom: 3 },
  destinoRow:        { flexDirection: "row", alignItems: "center", gap: 3 },
  destinoCidade:     { fontSize: 10, color: colors.textMuted },
  destinoDireita:    { alignItems: "flex-end", gap: 4 },
  destinoRating:     { flexDirection: "row", alignItems: "center", gap: 3 },
  destinoRatingTexto:{ fontSize: 10, color: colors.gold },
  destinoXpBadge:    { borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2 },
  destinoXpTexto:    { fontSize: 9, fontWeight: "600" },

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