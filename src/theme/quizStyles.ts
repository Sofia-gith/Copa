import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

const { width } = Dimensions.get("window");

export const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },
  container: { padding: 16, paddingBottom: 40 },

  // Header
  header: { marginBottom: 24 },
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

  // Ranking Section
  rankingCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(239, 159, 39, 0.1)",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gold,
    letterSpacing: 0.5,
  },
  rankList: { gap: 12 },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rankPosition: {
    width: 24,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textMuted,
    textAlign: "center",
  },
  rankAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
  rankAvatarText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  rankInfo: { flex: 1 },
  rankName: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  rankXP: {
    fontSize: 11,
    color: colors.textMuted,
  },
  rankScore: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.goldLight,
  },

  // Quiz Card
  quizCard: {
    backgroundColor: "#1a1927",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(127, 119, 221, 0.2)",
    minHeight: 300,
    justifyContent: "center",
  },
  quizIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(127, 119, 221, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    alignSelf: "center",
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  quizDesc: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 20,
  },
  startBtn: {
    backgroundColor: colors.gold,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  startBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.bg,
  },

  // Active Quiz
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  questionCount: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gold,
  },
  timerBarBg: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 2,
    flex: 1,
    marginLeft: 16,
  },
  timerBarFill: {
    height: "100%",
    backgroundColor: colors.gold,
    borderRadius: 2,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    lineHeight: 28,
    marginBottom: 32,
  },
  optionsList: { gap: 12 },
  optionBtn: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  optionBtnCorrect: {
    backgroundColor: "rgba(93, 202, 165, 0.1)",
    borderColor: colors.greenLight,
  },
  optionBtnWrong: {
    backgroundColor: "rgba(235, 87, 87, 0.1)",
    borderColor: "#EB5757",
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  optionLetterText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textMuted,
  },
  optionText: {
    fontSize: 14,
    color: colors.textPrimary,
    flex: 1,
  },

  // Results
  resultsContainer: {
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.goldLight,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  resultSub: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 32,
  },
  xpBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(93, 202, 165, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    marginBottom: 32,
  },
  xpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.greenLight,
  },
});
