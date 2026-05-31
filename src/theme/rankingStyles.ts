import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },
  container: { padding: 16, paddingBottom: 40 },

  // Header
  header: { marginBottom: 24, paddingHorizontal: 4 },
  headerSub: {
    fontSize: 10,
    color: colors.textFaint,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.goldLight,
    marginTop: 4,
  },

  // Podio
  podiumContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 12,
    marginBottom: 32,
    marginTop: 20,
  },
  podiumItem: {
    alignItems: "center",
    flex: 1,
  },
  podiumAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.bgCard,
    borderWidth: 2,
    borderColor: colors.textFaint,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  podiumAvatar1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.gold,
    backgroundColor: "rgba(239, 159, 39, 0.1)",
  },
  podiumAvatar2: {
    borderColor: "#C0C0C0",
    backgroundColor: "rgba(192, 192, 192, 0.1)",
  },
  podiumAvatar3: {
    borderColor: "#CD7F32",
    backgroundColor: "rgba(205, 127, 50, 0.1)",
  },
  podiumName: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 4,
  },
  podiumXP: {
    fontSize: 10,
    color: colors.gold,
    fontWeight: "bold",
  },
  podiumBadge: {
    position: "absolute",
    bottom: -10,
    backgroundColor: colors.bg,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
  },

  // Lista de Ranking
  listContainer: {
    backgroundColor: colors.bgCard,
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  rankItemLast: {
    borderBottomWidth: 0,
  },
  rankItemUser: {
    backgroundColor: "rgba(239, 159, 39, 0.05)",
    borderRadius: 16,
    marginHorizontal: -8,
    paddingHorizontal: 8,
    borderColor: "rgba(239, 159, 39, 0.1)",
    borderWidth: 1,
  },
  rankPos: {
    width: 32,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textMuted,
  },
  rankAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rankAvatarText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  rankInfo: {
    flex: 1,
  },
  rankName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  rankLevel: {
    fontSize: 11,
    color: colors.textMuted,
  },
  rankScore: {
    alignItems: "flex-end",
  },
  rankXP: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.goldLight,
  },
  rankSubText: {
    fontSize: 10,
    color: colors.textFaint,
  },

  // Quiz CTA
  quizCTA: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1927",
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(127, 119, 221, 0.3)",
  },
  quizCTAIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(127, 119, 221, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  quizCTATexts: {
    flex: 1,
  },
  quizCTATitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  quizCTASub: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
});
