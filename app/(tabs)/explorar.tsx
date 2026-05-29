import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { s } from "../../src/theme/explorarStyles";
import {
  CIDADES,
  PAISES,
  BANDEIRAS,
  NOMES_PAISES,
  type Pais,
} from "@/src/data/destinos";

// ─── componentes ──────────────────────────────────────────────────────────────

function Filtros({ ativo, onSelect }: { ativo: Pais; onSelect: (f: Pais) => void }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.filtrosScroll}
      contentContainerStyle={s.filtrosContent}
    >
      {PAISES.map((f) => (
        <TouchableOpacity
          key={f}
          style={[s.filtroPill, ativo === f && s.filtroPillAtivo]}
          onPress={() => onSelect(f)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === f && s.filtroTextoAtivo]}>
            {f === "Todos" ? "Todos" : `${BANDEIRAS[f]} ${NOMES_PAISES[f]}`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function CardCidade({ cidade }: { cidade: typeof CIDADES[0] }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={s.cidadeCard}
      activeOpacity={0.8}
      onPress={() => router.push(`/cidade/${cidade.id}` as any)}
    >
      <View style={[s.cidadeIcone, { backgroundColor: cidade.destaque.iconeBg }]}>
        <Ionicons name={cidade.destaque.icone as any} size={18} color={cidade.destaque.iconeColor} />
      </View>

      <View style={s.cidadeTextos}>
        <Text style={s.cidadeNome}>{cidade.nome}</Text>
        <Text style={s.cidadePontos}>
          {cidade.pontos.length + 1} pontos turísticos
        </Text>
      </View>

      <View style={s.cidadeSetaCol}>
        <View style={s.cidadeXpBadge}>
          <Text style={s.cidadeXpTexto}>+{cidade.destaque.xp} XP</Text>
        </View>
        <Ionicons name="arrow-forward" size={14} color="#5F5E5A" />
      </View>
    </TouchableOpacity>
  );
}

function GrupoPais({ pais, cidades }: { pais: string; cidades: typeof CIDADES }) {
  return (
    <View>
      <View style={s.paisHeader}>
        <Text style={s.paisBandeira}>{BANDEIRAS[pais]}</Text>
        <Text style={s.paisNome}>{NOMES_PAISES[pais]}</Text>
      </View>
      <View style={s.cidadesLista}>
        {cidades.map((c) => <CardCidade key={c.id} cidade={c} />)}
      </View>
    </View>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function ExplorarScreen() {
  const [filtro, setFiltro] = useState<Pais>("Todos");

  const cidadesFiltradas = filtro === "Todos"
    ? CIDADES
    : CIDADES.filter((c) => c.pais === filtro);

  const paisesFiltrados = filtro === "Todos"
    ? (["Canada", "Mexico", "EUA"] as const)
    : [filtro];

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
        <Filtros ativo={filtro} onSelect={setFiltro} />

        {/* lista agrupada por país */}
        <View style={s.section}>
          {paisesFiltrados.map((pais) => {
            const cidades = cidadesFiltradas.filter((c) => c.pais === pais);
            if (cidades.length === 0) return null;
            return <GrupoPais key={pais} pais={pais} cidades={cidades} />;
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}