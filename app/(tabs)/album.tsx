import { Figurinha, JOGADORES } from "@/constants/Jogadores";
import { colors } from "@/src/theme/colors";
import { s } from "@/src/theme/albumStyles";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ─── Componentes Menores ───────────────────────────────────────────────────────

function ProgressHeader() {
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
