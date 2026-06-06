import { useState } from "react";
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
import { s } from "../../src/theme/estadiosStyles";
import { ESTADIOS, Estadio } from "../../src/data/estadios";
import { colors } from "../../src/theme/colors";

// ─── componentes ──────────────────────────────────────────────────────────────

function Filtros({ ativo, onSelect }: { ativo: string; onSelect: (f: string) => void }) {
  const opcoes = [
    { id: "Todos", label: "Todos" },
    { id: "CA", label: "CA Canadá" },
    { id: "MX", label: "MX México" },
    { id: "US", label: "US EUA" },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.filtrosScroll}
      contentContainerStyle={s.filtrosContent}
    >
      {opcoes.map((o) => (
        <TouchableOpacity
          key={o.id}
          style={[s.filtroPill, ativo === o.id && s.filtroPillAtivo]}
          onPress={() => onSelect(o.id)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === o.id && s.filtroTextoAtivo]}>
            {o.label}
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

function EstadioItem({ estadio }: { estadio: Estadio }) {
  const router = useRouter();
  const progressColor = estadio.iconico ? colors.gold : estadio.final ? "#E13A3E" : "#378ADD";

  return (
    <TouchableOpacity
      style={[
        s.estadioCard,
        estadio.iconico && s.estadioCardIconico,
        estadio.final && s.estadioCardFinal,
      ]}
      activeOpacity={0.8}
      onPress={() => router.push(`/estadios/${estadio.id}`)}
    >
      <View style={s.estadioRow}>
        <View style={[s.estadioIconContainer, { overflow: 'hidden' }]}>
          <Image source={estadio.foto} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
        </View>

        <View style={s.estadioInfo}>
          <View style={s.estadioHeader}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <Text style={s.estadioNome} numberOfLines={1}>{estadio.nome}</Text>
              {estadio.iconico && (
                <View style={s.estadioBadgeIconico}>
                  <Text style={s.estadioBadgeTextoIconico}>ICÔNICO</Text>
                </View>
              )}
              {estadio.final && (
                <View style={[s.estadioBadgeIconico, { backgroundColor: "rgba(225, 58, 62, 0.1)" }]}>
                  <Text style={[s.estadioBadgeTextoIconico, { color: "#E13A3E" }]}>FINAL</Text>
                </View>
              )}
            </View>
            <Text style={s.estadioXp}>{estadio.xp}</Text>
          </View>

          <Text style={s.estadioLocal}>{estadio.cidade} · {estadio.capacidade}</Text>

          <View style={s.progressRow}>
            <View style={s.progressBg}>
              <View
                style={[
                  s.progressFill,
                  { width: `${estadio.porcentagemExplorada}%`, backgroundColor: progressColor },
                ]}
              />
            </View>
            <Text style={s.progressPct}>{estadio.porcentagemExplorada}%</Text>
            <Ionicons name="arrow-forward" size={14} color="rgba(255,255,255,0.2)" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function EstadiosScreen() {
  const router = useRouter();
  const [filtro, setFiltro] = useState("Todos");

  const estadiosFiltrados = filtro === "Todos"
    ? ESTADIOS
    : ESTADIOS.filter((e) => e.pais === filtro);

  const paisesOrdenados = ["CA", "MX", "US"] as const;
  const nomesPaises = { CA: "CANADÁ", MX: "MÉXICO", US: "ESTADOS UNIDOS" };

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
            <Text style={s.headerTitle}>Estádios</Text>
          </View>
        </View>

        {/* filtros */}
        <Filtros ativo={filtro} onSelect={setFiltro} />

        {/* resumo */}
        <View style={s.resumoGrid}>
          <CardResumo valor="16" label="estádios" cor="#E13A3E" />
          <CardResumo valor="3" label="países" cor={colors.gold} />
          <CardResumo valor="5M+" label="capacidade" cor="#378ADD" />
        </View>

        {/* lista */}
        {paisesOrdenados.map((p) => {
          const itens = estadiosFiltrados.filter((e) => e.pais === p);
          if (itens.length === 0) return null;

          return (
            <View key={p} style={s.section}>
              <Text style={s.sectionTitle}>{p} {nomesPaises[p]}</Text>
              {itens.map((estadio) => (
                <EstadioItem key={estadio.id} estadio={estadio} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
