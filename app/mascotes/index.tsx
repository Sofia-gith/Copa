import { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { s } from "../../src/theme/mascotesStyles";
import { MASCOTES, Mascote } from "../../src/data/mascotes";
import { colors } from "../../src/theme/colors";

// ─── componentes ──────────────────────────────────────────────────────────────

const FILTROS = [
  { id: "Todos", label: "Todos" },
  { id: "Coletados", label: "Coletados" },
  { id: "Faltando", label: "Faltando" },
  { id: "Raros", label: "Raros" },
];

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
          key={f.id}
          style={[s.filtroPill, ativo === f.id && s.filtroPillAtivo]}
          onPress={() => onSelect(f.id)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === f.id && s.filtroTextoAtivo]}>
            {f.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function CardResumo({ valor, label, cor }: { valor: string; label: string; cor: string }) {
  return (
    <View style={s.resumoCard}>
      <Text style={[s.resumoValor, { color: cor }]}>{valor}</Text>
      <Text style={s.resumoLabel}>{label}</Text>
    </View>
  );
}

function AtualCard({ mascote }: { mascote: Mascote }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={s.atualCard}
      activeOpacity={0.8}
      onPress={() => router.push(`/mascotes/${mascote.id}` as any)}
    >
      <View style={s.atualEmoji}>
        {mascote.imagem ? (
          <Image source={mascote.imagem} style={s.atualEmojiImage} resizeMode="contain" />
        ) : (
          <Text style={s.atualEmojiText}>{mascote.emoji}</Text>
        )}
      </View>
      <View style={s.atualInfo}>
        <Text style={s.atualNome}>{mascote.nome}</Text>
        <View style={s.atualAnoBadge}>
          <Text style={s.atualAnoBadgeText}>{mascote.ano}</Text>
        </View>
        <Text style={s.atualSub}>{mascote.animal} · {mascote.pais}</Text>
        <View style={s.atualBottomRow}>
          {mascote.coletada && (
            <View style={s.coletadaBadge}>
              <Ionicons name="checkmark" size={12} color={colors.greenLight} />
              <Text style={s.coletadaText}>Coletado</Text>
            </View>
          )}
          <View style={s.xpBadge}>
            <Text style={s.xpText}>{mascote.xp}</Text>
          </View>
        </View>
      </View>
      <Ionicons name="arrow-forward" size={16} color={colors.textFaint} />
    </TouchableOpacity>
  );
}

function MascoteCard({ mascote }: { mascote: Mascote }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={[
        s.mascoteCard,
        mascote.coletada && s.mascoteCardColetado,
        mascote.bloqueado && s.mascoteCardBloqueado,
      ]}
      activeOpacity={mascote.bloqueado ? 1 : 0.8}
      onPress={() => {
        if (!mascote.bloqueado) {
          router.push(`/mascotes/${mascote.id}` as any);
        }
      }}
    >
      <View style={s.mascoteCardTopRow}>
        <View style={s.mascoteEmojiContainer}>
          {mascote.bloqueado ? (
            <Ionicons name="lock-closed" size={22} color={colors.textFaint} />
          ) : mascote.imagem ? (
            <Image source={mascote.imagem} style={s.mascoteEmojiImage} resizeMode="contain" />
          ) : (
            <Text style={s.mascoteEmoji}>{mascote.emoji}</Text>
          )}
        </View>
        {!mascote.bloqueado && (
          <View style={s.mascoteXpBadge}>
            <Text style={s.mascoteXpText}>{mascote.xp}</Text>
          </View>
        )}
      </View>

      <Text style={s.mascoteNome}>{mascote.nome}</Text>
      <Text style={s.mascoteSub}>{mascote.copa}</Text>

      <View style={s.mascoteBottomRow}>
        {mascote.bloqueado ? (
          <View style={s.mascoteBloqueadoBadge}>
            <Text style={s.mascoteBloqueadoText}>bloqueado</Text>
          </View>
        ) : mascote.coletada ? (
          <View style={s.mascoteColetadaBadge}>
            <Ionicons name="checkmark" size={11} color={colors.greenLight} />
            <Text style={s.mascoteColetadaText}>coletado</Text>
          </View>
        ) : (
          <Ionicons name="chevron-forward" size={14} color={colors.textFaint} />
        )}
      </View>
    </TouchableOpacity>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function MascotesScreen() {
  const router = useRouter();
  const [filtro, setFiltro] = useState("Todos");

  const mascoteAtual = MASCOTES.find((m) => m.atual);
  const anteriores = MASCOTES.filter((m) => !m.atual);

  const mascotesFiltrados = useMemo(() => {
    switch (filtro) {
      case "Coletados":
        return anteriores.filter((m) => m.coletada);
      case "Faltando":
        return anteriores.filter((m) => !m.coletada);
      case "Raros":
        return anteriores.filter((m) => m.raro);
      default:
        return anteriores;
    }
  }, [filtro]);

  const totalColetados = MASCOTES.filter((m) => m.coletada).length;
  const faltando = MASCOTES.filter((m) => !m.coletada && !m.bloqueado).length;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={s.header}>
          <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text style={s.headerSub}>EXPLORAR</Text>
            <Text style={s.headerTitle}>Mascotes</Text>
          </View>
        </View>

        {/* filtros */}
        <Filtros ativo={filtro} onSelect={setFiltro} />

        {/* resumo */}
        <View style={s.resumoGrid}>
          <CardResumo valor={String(MASCOTES.length)} label="total" cor={colors.purpleLight} />
          <CardResumo valor={String(totalColetados)} label="coletados" cor={colors.greenLight} />
          <CardResumo valor={String(faltando)} label="faltando" cor="#E13A3E" />
        </View>

        {/* mascote atual — só aparece em "Todos" */}
        {filtro === "Todos" && mascoteAtual && (
          <View style={s.atualSection}>
            <Text style={s.sectionTitle}>COPA 2026 · ATUAL</Text>
            <AtualCard mascote={mascoteAtual} />
          </View>
        )}

        {/* copas anteriores */}
        <View style={s.anterioresSection}>
          <Text style={s.sectionTitle}>
            {filtro === "Todos" ? "COPAS ANTERIORES" : filtro.toUpperCase()}
          </Text>
          <View style={s.mascotesGrid}>
            {mascotesFiltrados.map((m) => (
              <MascoteCard key={m.id} mascote={m} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}