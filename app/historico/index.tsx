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
  COPAS_HISTORICAS,
  FILTROS_HISTORICO,
  type CopaHistorica,
  type PeriodoHistorico,
} from "@/src/data/historico";
import { s } from "@/src/theme/historicoStyles";
import { colors } from "@/src/theme/colors";

function Filtros({ ativo, onSelect }: { ativo: PeriodoHistorico; onSelect: (f: PeriodoHistorico) => void }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.filtrosScroll}
      contentContainerStyle={s.filtrosContent}
    >
      {FILTROS_HISTORICO.map((filtro) => (
        <TouchableOpacity
          key={filtro}
          style={[s.filtroPill, ativo === filtro && s.filtroPillAtivo]}
          onPress={() => onSelect(filtro)}
          activeOpacity={0.8}
        >
          <Text style={[s.filtroTexto, ativo === filtro && s.filtroTextoAtivo]}>{filtro}</Text>
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

function CopaDestaqueCard({ copa }: { copa: CopaHistorica }) {
  const router = useRouter();

  return (
    <TouchableOpacity style={s.destaqueCard} activeOpacity={0.8} onPress={() => router.push(`/historico/${copa.id}` as any)}>
      <View style={s.destaqueTop}>
        <View style={[s.destaqueIcone, { backgroundColor: `${copa.cor}33` }]}>
          <Ionicons name={copa.icone as any} size={22} color={copa.cor} />
        </View>
        <View style={s.destaqueTopTextos}>
          <Text style={s.destaqueAno}>{copa.ano}</Text>
          <Text style={s.destaqueLocal}>{copa.paisSede}</Text>
        </View>
        <View style={s.destaqueBadge}>
          <Text style={s.destaqueBadgeText}>DESTAQUE</Text>
        </View>
      </View>
      <View style={s.destaqueLinha} />
      <Text style={s.destaqueTitulo}>{copa.destaque}</Text>
      <Text style={s.destaqueSub}>{copa.campeao} campeão · {copa.gols} gols</Text>
      <View style={s.destaqueBottom}>
        <Text style={s.destaqueFinal}>Final em {copa.cidadeFinal}</Text>
        <View style={s.destaqueXp}>
          <Text style={s.destaqueXpText}>{copa.xp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function CopaItem({ copa }: { copa: CopaHistorica }) {
  const router = useRouter();

  return (
    <TouchableOpacity style={s.copaItem} activeOpacity={0.8} onPress={() => router.push(`/historico/${copa.id}` as any)}>
      <View style={[s.copaItemIcone, { backgroundColor: `${copa.cor}22` }]}>
        <Ionicons name={copa.icone as any} size={18} color={copa.cor} />
      </View>

      <View style={s.copaItemInfo}>
        <Text style={s.copaItemAno}>{copa.ano}</Text>
        <Text style={s.copaItemSub}>{copa.paisSede}</Text>
        <View style={s.copaItemLinha}>
          <Ionicons name="trophy-outline" size={11} color={colors.goldLight} />
          <Text style={s.copaItemLinhaTexto}>{copa.campeao} campeão</Text>
        </View>
      </View>

      <View style={s.copaItemMeta}>
        <View style={s.copaItemMetaBadge}>
          <Text style={s.copaItemMetaBadgeText}>{copa.selecoes} seleções</Text>
        </View>
        <Text style={s.copaItemMetaXp}>{copa.xp}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function HistoricoScreen() {
  const router = useRouter();
  const [filtro, setFiltro] = useState<PeriodoHistorico>("Todos");

  const copasFiltradas = useMemo(() => {
    if (filtro === "Todos") {
      return COPAS_HISTORICAS;
    }

    return COPAS_HISTORICAS.filter((c) => c.fase === filtro);
  }, [filtro]);

  const copaDestaque = useMemo(() => {
    const recente = copasFiltradas.find((c) => c.id === "2022");
    return recente ?? copasFiltradas[0] ?? COPAS_HISTORICAS[0];
  }, [copasFiltradas]);

  const copasLista = useMemo(() => {
    return copasFiltradas.filter((c) => c.id !== copaDestaque.id);
  }, [copasFiltradas, copaDestaque]);

  const totalTitulosBrasil = COPAS_HISTORICAS.filter((c) => c.campeao === "Brasil").length;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        <View style={s.header}>
          <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text style={s.headerSub}>EXPLORAR</Text>
            <Text style={s.headerTitle}>Copas Anteriores</Text>
          </View>
        </View>

        <Filtros ativo={filtro} onSelect={setFiltro} />

        <View style={s.resumoGrid}>
          <CardResumo valor={String(COPAS_HISTORICAS.length)} label="edições" cor={colors.gold} />
          <CardResumo valor={String(totalTitulosBrasil)} label="títulos BR" cor={colors.greenLight} />
          <CardResumo valor="1930" label="início" cor={colors.purpleLight} />
        </View>

        <View style={s.destaqueSection}>
          <Text style={s.sectionTitle}>COPA EM DESTAQUE</Text>
          <CopaDestaqueCard copa={copaDestaque} />
        </View>

        <View style={s.listaSection}>
          <Text style={s.sectionTitle}>{filtro === "Todos" ? "LINHA DO TEMPO" : filtro.toUpperCase()}</Text>
          {copasLista.map((copa) => (
            <CopaItem key={copa.id} copa={copa} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
