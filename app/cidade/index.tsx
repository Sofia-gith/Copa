import { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  CIDADES,
  PAISES,
  NOMES_PAISES,
  type Cidade,
  type PontoTuristico,
} from "@/src/data/destinos";
import { s } from "@/src/theme/explorarStyles";
import { colors } from "@/src/theme/colors";

type Filtro = (typeof PAISES)[number];

type DestinoListaItem = {
  cidade: Cidade;
  ponto: PontoTuristico;
};

const PILLS: { id: Filtro; label: string }[] = [
  { id: "Todos", label: "Todos" },
  { id: "EUA", label: "EUA" },
  { id: "Mexico", label: "México" },
  { id: "Canada", label: "Canadá" },
];

function Filtros({ ativo, onSelect }: { ativo: Filtro; onSelect: (f: Filtro) => void }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.filtrosScroll}
      contentContainerStyle={s.filtrosContent}
    >
      {PILLS.map((f) => (
        <TouchableOpacity
          key={f.id}
          style={[s.filtroPill, ativo === f.id && s.filtroPillAtivo]}
          onPress={() => onSelect(f.id)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === f.id && s.filtroTextoAtivo]}>{f.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function CardDestaque({ cidade }: { cidade: Cidade }) {
  const ponto = cidade.destaque;

  return (
    <View style={s.destaque}>
      <View style={s.destaqueHeader}>
        <View style={s.destaqueRow}>
          <Ionicons name="location-outline" size={12} color="#378ADD" />
          <Text style={s.destaqueCidade}>{`${cidade.nome}, ${NOMES_PAISES[cidade.pais]}`}</Text>
        </View>
        <View style={s.destaqueBadge}>
          <Text style={s.destaqueBadgeTexto}>DESTAQUE</Text>
        </View>
      </View>

      <Text style={s.destaqueNome}>{ponto.nome}</Text>
      <Text style={s.destaqueDesc}>{ponto.descricao}</Text>

      {ponto.figurinhaDesbloqueavel && (
        <View style={s.destaqueFig}>
          <View style={s.destaqueFigLeft}>
            <Ionicons name="diamond-outline" size={13} color={colors.gold} />
            <Text style={s.destaqueFigTexto}>Figurinha desbloqueável</Text>
          </View>
          <View style={s.destaqueXp}>
            <Text style={s.destaqueXpTexto}>+{ponto.xp} XP</Text>
          </View>
        </View>
      )}
    </View>
  );
}

function DestinoItem({ item }: { item: DestinoListaItem }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={s.destino}
      activeOpacity={0.8}
      onPress={() => router.push(`/cidade/${item.cidade.id}` as any)}
    >
      <View style={[s.destinoIcone, { backgroundColor: item.ponto.iconeBg }]}>
        <Ionicons name={item.ponto.icone as any} size={18} color={item.ponto.iconeColor} />
      </View>

      <View style={s.destinoTextos}>
        <Text style={[s.destinoNome, { color: item.ponto.iconeColor }]}>{item.ponto.nome}</Text>
        <View style={s.destinoRow}>
          <Ionicons name="location-outline" size={10} color={colors.textMuted} />
          <Text style={s.destinoCidade}>{`${item.cidade.nome}, ${NOMES_PAISES[item.cidade.pais]}`}</Text>
        </View>
      </View>

      <View style={s.destinoDireita}>
        <View style={s.destinoRating}>
          <Ionicons name="star-outline" size={11} color={colors.gold} />
          <Text style={s.destinoRatingTexto}>{item.ponto.rating}</Text>
        </View>
        <View style={[s.destinoXpBadge, { backgroundColor: item.ponto.iconeBg }]}>
          <Text style={[s.destinoXpTexto, { color: item.ponto.iconeColor }]}>+{item.ponto.xp} XP</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function CardRoteiro({ cidade }: { cidade: Cidade }) {
  return (
    <View style={s.roteiro}>
      <View style={s.roteiroHeader}>
        <Ionicons name="git-merge-outline" size={14} color="#7F77DD" />
        <Text style={s.roteiroTitulo}>Roteiro sugerido — {cidade.nome}</Text>
      </View>

      <View style={s.roteiroCorpo}>
        <View style={s.roteiroLinha}>
          {cidade.roteiro.map((p, i) => (
            <View key={i} style={s.roteiroItem}>
              <View style={[s.roteiroPonto, { backgroundColor: p.cor }]} />
              {i < cidade.roteiro.length - 1 && <View style={s.roteiroConector} />}
            </View>
          ))}
        </View>

        <View style={s.roteiroLabels}>
          {cidade.roteiro.map((p, i) => (
            <Text key={i} style={[s.roteiroLabel, { color: p.cor }]}>
              {p.label}
            </Text>
          ))}
        </View>

        <TouchableOpacity style={s.roteiroBtn} activeOpacity={0.8}>
          <Text style={s.roteiroBtnTexto}>ver rota</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function DestinosScreen() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const router = useRouter();

  const cidadesFiltradas = useMemo(() => {
    if (filtro === "Todos") {
      return CIDADES;
    }

    return CIDADES.filter((cidade) => cidade.pais === filtro);
  }, [filtro]);

  const destaqueCidade = useMemo(() => {
    const preferida = cidadesFiltradas.find((cidade) => cidade.id === "new-york");
    return preferida ?? cidadesFiltradas[0] ?? CIDADES[0];
  }, [cidadesFiltradas]);

  const proximosDestinos = useMemo(() => {
    return cidadesFiltradas
      .filter((cidade) => cidade.id !== destaqueCidade.id)
      .slice(0, 3)
      .map((cidade) => ({ cidade, ponto: cidade.destaque }));
  }, [cidadesFiltradas, destaqueCidade]);

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        <View style={s.header}>
          <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text style={s.headerSub}>EXPLORAR</Text>
            <Text style={s.headerTitulo}>Destinos da Copa</Text>
          </View>
          <View style={s.avatarGold}>
            <Text style={s.avatarGoldTexto}>SO</Text>
          </View>
        </View>

        <Filtros ativo={filtro} onSelect={setFiltro} />

        <View style={s.section}>
          <CardDestaque cidade={destaqueCidade} />
        </View>

        <View style={s.section}>
          <View style={s.destinosSectionHeader}>
            <Text style={s.destinosSectionTitle}>Próximos destinos</Text>
            <Text style={s.destinosSectionAction}>ver mapa</Text>
          </View>
          <View style={s.lista}>
            {proximosDestinos.map((item) => (
              <DestinoItem key={item.ponto.id} item={item} />
            ))}
          </View>
        </View>

        <View style={[s.section, { marginBottom: 24 }]}>
          <CardRoteiro cidade={destaqueCidade} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
