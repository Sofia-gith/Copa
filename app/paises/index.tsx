import { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { s } from "../../src/theme/paisesStyles";
import { PAISES, Pais } from "../../src/data/paises";
import { colors } from "../../src/theme/colors";

// ─── tipos de filtro ───────────────────────────────────────────────────────────

const FILTROS = [
  { id: "Todos",   label: "Todos" },
  { id: "Grupo A", label: "Grupo A" },
  { id: "Grupo B", label: "Grupo B" },
  { id: "Grupo C", label: "Grupo C" },
  { id: "Favoritos", label: "Favoritos" },
];

// ─── componentes ──────────────────────────────────────────────────────────────

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

function FavoritoCard({ pais }: { pais: Pais }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={[s.favoritoCard, pais.titulos === 0 && s.favoritoCardSemTitulo]}
      activeOpacity={0.8}
      onPress={() => router.push(`/paises/${pais.id}` as any)}
    >
      <View style={s.favoritoTopRow}>
        {pais.imagem ? (
          <Image source={pais.imagem} style={s.favoritoCodigoImage} resizeMode="cover" />
        ) : (
          <Text style={s.favoritoCodigo}>{pais.codigo}</Text>
        )}
        <View style={s.favoritoXpBadge}>
          <Text style={s.favoritoXpText}>{pais.xp}</Text>
        </View>
      </View>

      <Text style={s.favoritoNome}>{pais.nome}</Text>
      <Text style={s.favoritoSub}>{pais.titulos} títulos · {pais.continente}</Text>

      <View style={s.favoritoBottomRow}>
        <View style={s.favoritoTitulosRow}>
          {Array.from({ length: Math.min(pais.titulos, 5) }).map((_, i) => (
            <Ionicons key={i} name="trophy" size={12} color={colors.goldLight} />
          ))}
          <Text style={s.favoritoTitulosTexto}>{pais.titulos}×</Text>
        </View>
        {pais.coletada && (
          <View style={s.favoritoColetadaBadge}>
            <Ionicons name="checkmark" size={12} color="#fff" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

function PaisItem({ pais }: { pais: Pais }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={[s.paisItem, pais.coletada && s.paisItemColetado]}
      activeOpacity={0.8}
      onPress={() => router.push(`/paises/${pais.id}` as any)}
    >
      <View style={s.paisCodigoContainer}>
        {pais.imagem ? (
          <Image source={pais.imagem} style={s.paisCodigoImage} resizeMode="cover" />
        ) : (
          <Text style={s.paisCodigo}>{pais.codigo}</Text>
        )}
      </View>

      <View style={s.paisInfo}>
        <Text style={s.paisNome}>{pais.nome}</Text>
        <View style={s.paisSubRow}>
          <Text style={s.paisSub}>{pais.continente} · {pais.grupo}</Text>
          {pais.titulos > 0 && (
            <View style={s.paisTitulosBadge}>
              <Ionicons name="trophy" size={9} color={colors.goldLight} />
              <Text style={s.paisTitulosTexto}>{pais.titulos}×</Text>
            </View>
          )}
        </View>
      </View>

      <View style={s.paisRightCol}>
        <Text style={s.paisXp}>{pais.xp}</Text>
        <View style={pais.coletada ? s.paisColetadaBadge : s.paisNaoColetadaBadge}>
          <Ionicons
            name={pais.coletada ? "checkmark" : "chevron-forward"}
            size={12}
            color={pais.coletada ? colors.greenLight : colors.textFaint}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function PaisesScreen() {
  const router = useRouter();
  const [filtro, setFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");

  const favoritos = PAISES.filter((p) => p.favorito);

  const paisesFiltrados = useMemo(() => {
    let lista = PAISES;

    if (filtro === "Favoritos") {
      lista = lista.filter((p) => p.favorito);
    } else if (filtro !== "Todos") {
      lista = lista.filter((p) => p.grupo === filtro);
    }

    if (busca.trim()) {
      const q = busca.toLowerCase();
      lista = lista.filter(
        (p) =>
          p.nome.toLowerCase().includes(q) ||
          p.codigo.toLowerCase().includes(q) ||
          p.continente.toLowerCase().includes(q)
      );
    }

    return lista;
  }, [filtro, busca]);

  const totalColetadas = PAISES.filter((p) => p.coletada).length;
  const faltando = PAISES.length - totalColetadas;

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
            <Text style={s.headerTitle}>Países</Text>
          </View>
        </View>

        {/* busca */}
        <View style={s.searchContainer}>
          <Ionicons name="search" size={16} color={colors.textFaint} />
          <TextInput
            style={s.searchInput}
            placeholder="Buscar seleção..."
            placeholderTextColor={colors.textFaint}
            value={busca}
            onChangeText={setBusca}
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")}>
              <Ionicons name="close-circle" size={16} color={colors.textFaint} />
            </TouchableOpacity>
          )}
        </View>

        {/* filtros */}
        <Filtros ativo={filtro} onSelect={setFiltro} />

        {/* resumo */}
        <View style={s.resumoGrid}>
          <CardResumo valor={String(PAISES.length)} label="seleções" cor={colors.greenLight} />
          <CardResumo valor={String(totalColetadas)} label="coletadas" cor={colors.gold} />
          <CardResumo valor={String(faltando)} label="faltando" cor="#E13A3E" />
        </View>

        {/* favoritos — só mostra quando filtro é "Todos" ou "Favoritos" e sem busca ativa */}
        {(filtro === "Todos" || filtro === "Favoritos") && busca.length === 0 && (
          <View style={s.favoritosSection}>
            <Text style={s.favoritosSectionTitle}>FAVORITOS</Text>
            <View style={s.favoritosGrid}>
              {favoritos.map((p) => (
                <FavoritoCard key={p.id} pais={p} />
              ))}
            </View>
          </View>
        )}

        {/* lista */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>
            {busca ? `RESULTADOS (${paisesFiltrados.length})` : "TODAS AS SELEÇÕES"}
          </Text>
          {paisesFiltrados
            .filter((p) => !(filtro === "Todos" && !busca && p.favorito)) // não duplica favoritos
            .map((pais) => (
              <PaisItem key={pais.id} pais={pais} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}