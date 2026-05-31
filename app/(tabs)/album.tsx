import { Figurinha, JOGADORES } from "@/constants/Jogadores";
import { colors } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 40) / 2;

// ─── Componentes Menores ───────────────────────────────────────────────────────

function ProgressHeader() {
  const total = JOGADORES.length;
  const coletadas = 437; // Mock de progresso
  const pct = Math.round((coletadas / 712) * 100);

  return (
    <View style={s.headerContainer}>
      <View style={s.headerTop}>
        <View>
          <Text style={s.headerSub}>MEU ÁLBUM</Text>
          <Text style={s.headerTitle}>CopaDex</Text>
        </View>
        <View style={s.headerStats}>
          <Text style={s.statsText}>
            <Text style={s.statsTotal}>{coletadas}</Text>/712
          </Text>
          <Text style={s.statsLabel}>figurinhas</Text>
        </View>
      </View>

      <View style={s.progressRow}>
        <View style={s.progressBarBg}>
          <View style={[s.progressBarFill, { width: `${pct}%` }]} />
        </View>
        <Text style={s.progressPct}>{pct}%</Text>
      </View>
    </View>
  );
}

function FilterPill({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[s.pill, active && s.pillActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[s.pillText, active && s.pillTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

function CardSticker({ item }: { item: Figurinha }) {
  const isLendario = item.raridade === "Lendário";
  const isRaro = item.raridade === "Raro";

  const cardBg = isLendario ? "#26215C" : isRaro ? "#04342C" : "#2A2A28";
  const badgeBg = isLendario ? "#534AB7" : isRaro ? "#0F6E56" : "#3E3E3C";
  const badgeText = isLendario ? "#CECBF6" : isRaro ? "#5DCAA5" : "#888780";

  return (
    <View style={[s.card, { backgroundColor: cardBg }]}>
      <View style={s.cardImageContainer}>
        {item.bloqueado ? (
          <Ionicons name="lock-closed" size={32} color="#5F5E5A" />
        ) : (
          <Image source={item.foto} style={s.cardImage} resizeMode="cover" />
        )}
      </View>

      <Text style={s.cardName}>{item.bloqueado ? "???" : item.nome}</Text>
      <Text style={s.cardSub}>
        {item.bloqueado ? "bloqueado" : `${item.selecao} - ${item.posicao}`}
      </Text>

      <View style={[s.cardBadge, { backgroundColor: badgeBg }]}>
        <Text style={[s.cardBadgeText, { color: badgeText }]}>
          {item.raridade.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

// ─── Tela Principal ────────────────────────────────────────────────────────────

type FiltroPrincipal = "Jogadores" | "Seleções" | "Mascotes";

export default function AlbumScreen() {
  const [filtro, setFiltro] = useState<FiltroPrincipal>("Jogadores");

  const sections = useMemo(() => {
    if (filtro === "Jogadores") {
      return [
        {
          title: "LENDÁRIOS",
          color: colors.gold,
          data: JOGADORES.filter(
            (f) => f.raridade === "Lendário" && f.tipoCard === "Jogador",
          ),
        },
        {
          title: "RAROS",
          color: colors.greenLight,
          data: JOGADORES.filter(
            (f) => f.raridade === "Raro" && f.tipoCard === "Jogador",
          ),
        },
        {
          title: "COMUNS",
          color: colors.textMuted,
          data: JOGADORES.filter(
            (f) => f.raridade === "Comum" && f.tipoCard === "Jogador",
          ),
        },
      ];
    }

    if (filtro === "Seleções") {
      const paises = Array.from(
        new Set(
          JOGADORES.filter((f) => f.tipoCard === "Jogador").map(
            (f) => f.selecao,
          ),
        ),
      );
      return paises.map((p) => ({
        title: p.toUpperCase(),
        color: colors.goldLight,
        data: JOGADORES.filter(
          (f) => f.selecao === p && f.tipoCard === "Jogador",
        ),
      }));
    }

    if (filtro === "Mascotes") {
      return [
        {
          title: "MASCOTES DA COPA",
          color: colors.gold,
          data: JOGADORES.filter((f) => f.tipoCard === "Mascote"),
        },
      ];
    }

    return [];
  }, [filtro]);

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        <ProgressHeader />

        {/* Filtros Pills */}
        <View style={s.filtersContainer}>
          {(
            [
              "Jogadores",
              "Seleções",

              "Mascotes"
            ] as FiltroPrincipal[]
          ).map((f) => (
            <FilterPill
              key={f}
              label={f}
              active={filtro === f}
              onPress={() => setFiltro(f)}
            />
          ))}
        </View>

        {/* Listagem */}
        <View style={s.listContent}>
          {sections.map((section, idx) => (
            <View key={idx} style={s.section}>
              {section.data.length > 0 && (
                <Text style={[s.sectionTitle, { color: section.color }]}>
                  {section.title}
                </Text>
              )}
              <View style={s.grid}>
                {section.data.map((item) => (
                  <CardSticker key={item.id} item={item} />
                ))}
              </View>
            </View>
          ))}

          {sections.length === 0 && (
            <View style={s.emptyState}>
              <Text style={s.emptyText}>
                Nenhuma figurinha encontrada para este filtro.
              </Text>
            </View>
          )}
        </View>

        {/* Rodapé Mockado */}
        <TouchableOpacity style={s.footerAction} activeOpacity={0.8}>
          <View style={s.footerIcon}>
            <Ionicons name="refresh" size={20} color={colors.gold} />
          </View>
          <View>
            <Text style={s.footerTitle}>Trocar figurinhas</Text>
            <Text style={s.footerSub}>Você tem 12 repetidas disponíveis</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.textFaint}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Estilos ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
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
  section: { marginBottom: 25 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },

  // Card
  card: {
    width: CARD_WIDTH,
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    marginBottom: 5,
  },
  cardImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: "100%" },
  cardName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 2,
    textAlign: "center",
  },
  cardSub: {
    fontSize: 10,
    color: colors.textMuted,
    marginBottom: 12,
    textAlign: "center",
  },
  cardBadge: {
    width: "100%",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  cardBadgeText: { fontSize: 10, fontWeight: "bold" },

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
