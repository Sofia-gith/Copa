import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

const { width } = Dimensions.get("window");
export const CARD_WIDTH = (width - 64) / 3;

export const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },

  // Header
  headerContainer: { padding: 20, paddingTop: 10 },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  headerSub: {
    fontSize: 10,
    color: colors.textFaint,
    fontWeight: "700",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.goldLight,
    marginTop: 2,
  },
  headerStats: { alignItems: "flex-end" },
  statsText: { fontSize: 18, color: colors.textFaint, fontWeight: "600" },
  statsTotal: { color: colors.gold },
  statsLabel: { fontSize: 10, color: colors.textFaint },

  progressRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: colors.goldDark + "44",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.gold,
    borderRadius: 4,
  },
  progressPct: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gold,
    minWidth: 30,
  },

  // Filtros
  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 8,
    marginBottom: 20,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#2A2A28",
    borderWidth: 1,
    borderColor: "#3E3E3C",
  },
  pillActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  pillText: { fontSize: 13, color: colors.textMuted, fontWeight: "600" },
  pillTextActive: { color: colors.bg },

  // Listagem
  listContent: { paddingHorizontal: 15, paddingBottom: 100 },
  section: { marginBottom: 25, alignItems: "center" },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 15,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },

  // Card
  card: {
    width: CARD_WIDTH,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  cardImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: "100%" },
  cardName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 2,
    textAlign: "center",
  },
  cardSub: {
    fontSize: 8,
    color: colors.textMuted,
    marginBottom: 8,
    textAlign: "center",
  },
  cardBadge: {
    width: "100%",
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: "center",
  },
  cardBadgeText: { fontSize: 8, fontWeight: "bold" },

  // Empty State
  emptyState: { alignItems: "center", paddingVertical: 40 },
  emptyText: { color: colors.textFaint, textAlign: "center" },

  // Footer
  footerAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(239, 159, 39, 0.05)",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(239, 159, 39, 0.2)",
    marginBottom: 30,
  },
  footerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(239, 159, 39, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  footerTitle: { fontSize: 14, fontWeight: "bold", color: colors.gold },
  footerSub: { fontSize: 11, color: colors.textMuted, marginTop: 2 },
});
