import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { s } from "../../src/theme/paisesStyles";
import { PAISES, Pais } from "../../src/data/paises";
import { colors } from "../../src/theme/colors";

// ─── componentes ──────────────────────────────────────────────────────────────

function InfoCard({ label, valor, sub }: { label: string; valor: string; sub: string }) {
  return (
    <View style={s.infoCard}>
      <Text style={s.infoLabel}>{label}</Text>
      <Text style={s.infoValor}>{valor}</Text>
      <Text style={s.infoSub}>{sub}</Text>
    </View>
  );
}

function MomentoItem({ momento, isLast }: { momento: any; isLast: boolean }) {
  return (
    <View style={s.historicoItem}>
      <View style={s.historicoIconCol}>
        <View style={s.historicoIcon}>
          <Ionicons
            name={momento.icone}
            size={18}
            color={momento.emBreve ? "#E13A3E" : colors.gold}
          />
        </View>
        {!isLast && <View style={s.historicoLinha} />}
      </View>
      <View style={s.historicoContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={s.historicoTitulo}>{momento.titulo}</Text>
          {momento.emBreve && (
            <View style={s.badgeEmBreve}>
              <Text style={s.badgeEmBreveTexto}>em breve</Text>
            </View>
          )}
        </View>
        <Text style={s.historicoAno}>{momento.ano}</Text>
        <Text style={s.historicoDesc}>{momento.descricao}</Text>
      </View>
    </View>
  );
}

function StickerModal({
  pais,
  visible,
  onClose,
}: {
  pais: Pais;
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={s.modalOverlay} onPress={onClose}>
        <Pressable style={s.modalContent}>
          <TouchableOpacity style={s.modalClose} onPress={onClose}>
            <Ionicons name="close" size={20} color="#FFF" />
          </TouchableOpacity>

          <View style={s.modalCodigoContainer}>
            {pais.imagem ? (
              <Image source={pais.imagem} style={s.modalCodigoImage} resizeMode="cover" />
            ) : (
              <Text style={s.modalCodigo}>{pais.codigo}</Text>
            )}
          </View>

          <Text style={s.modalName}>{pais.nome}</Text>
          <Text style={s.modalSelection}>
            {pais.continente} · {pais.grupo}
          </Text>

          <View style={s.modalInfoRow}>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Títulos</Text>
              <Text style={s.modalInfoValue}>{pais.titulos}×</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Ranking</Text>
              <Text style={s.modalInfoValue}>#{pais.ranking}</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Número</Text>
              <Text style={s.modalInfoValue}>{pais.figurinha.numero}</Text>
            </View>
          </View>

          <View style={s.modalRarityBadge}>
            <Text style={s.modalRarityText}>
              {pais.titulos >= 3 ? "LENDÁRIO" : pais.titulos >= 1 ? "RARO" : "COMUM"}
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function PaisDetalheScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const pais = PAISES.find((p) => p.id === id);

  if (!pais) return null;

  // Cor de destaque varia: verde para seleções normais, dourado para lendárias
  const accentColor = pais.titulos >= 3 ? colors.gold : colors.green;
  const accentDark = pais.titulos >= 3 ? colors.goldDark : colors.greenDark;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* hero */}
        <View style={[s.detailHero, { backgroundColor: accentDark }]}>
          <View style={s.detailHeroOverlay} />

          <TouchableOpacity style={s.detailBackBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>

          {/* bandeira decorativa ao fundo */}
          {pais.imagem ? (
            <Image source={pais.imagem} style={s.detailCodigoGrandeImage} resizeMode="cover" />
          ) : (
            <Text style={s.detailCodigoGrande}>{pais.codigo}</Text>
          )}

          <Text style={s.detailSub}>SELEÇÃO</Text>
          <Text style={s.detailTitle}>{pais.nome}</Text>
          <View style={s.detailLocalRow}>
            <Text style={s.detailContinente}>{pais.continente}</Text>
            <Text style={{ color: "rgba(255,255,255,0.3)" }}>·</Text>
            <Text style={s.detailGrupo}>{pais.grupo}</Text>
          </View>
        </View>

        {/* recompensa */}
        <View style={s.rewardBox}>
          <View>
            <Text style={s.rewardLabel}>Recompensa por explorar</Text>
            <Text style={s.rewardText}>{pais.xp} desbloqueados</Text>
          </View>
          <View style={s.rewardIcon}>
            <Ionicons name="earth-outline" size={20} color={colors.gold} />
          </View>
        </View>

        {/* info grid */}
        <View style={s.infoGrid}>
          <InfoCard label="Títulos" valor={`${pais.titulos}×`} sub={pais.melhorResultado} />
          <InfoCard label="Ranking FIFA" valor={`#${pais.ranking}`} sub="posição atual" />
          <InfoCard label="Treinador" valor={pais.treinador.split(" ").pop()!} sub={pais.treinador} />
          <InfoCard label="Figurinha" valor={pais.figurinha.numero} sub={pais.figurinha.coletada ? "Coletada ✓" : "Não coletada"} />
        </View>

        {/* sobre */}
        <View style={s.sobreSection}>
          <Text style={s.sobreTitulo}>SOBRE A SELEÇÃO</Text>
          <Text style={s.sobreTexto}>{pais.sobre}</Text>
        </View>

        {/* jogadores destaque */}
        <View style={s.jogadoresSection}>
          <Text style={s.sobreTitulo}>JOGADORES EM DESTAQUE</Text>
          <View style={s.jogadoresRow}>
            {pais.jogadoresStar.map((j) => (
              <View key={j} style={s.jogadorChip}>
                <Ionicons name="person" size={12} color={colors.textFaint} />
                <Text style={s.jogadorNome}>{j}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* momentos */}
        {pais.momentos.length > 0 && (
          <View style={s.historicoSection}>
            <Text style={s.sobreTitulo}>MOMENTOS HISTÓRICOS</Text>
            {pais.momentos.map((m, idx) => (
              <MomentoItem
                key={m.id}
                momento={m}
                isLast={idx === pais.momentos.length - 1}
              />
            ))}
          </View>
        )}

        {/* figurinha */}
        <View style={s.figurinhaSection}>
          <Text style={s.sobreTitulo}>FIGURINHA DA SELEÇÃO</Text>
          <TouchableOpacity
            style={s.figurinhaCard}
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
          >
            <View style={s.figurinhaIcon}>
              {pais.imagem ? (
                <Image source={pais.imagem} style={s.figurinhaIconImage} resizeMode="cover" />
              ) : (
                <Text style={s.figurinhaIconTexto}>{pais.codigo}</Text>
              )}
            </View>
            <View style={s.figurinhaInfo}>
              <Text style={s.figurinhaNome}>
                {pais.nome} {pais.figurinha.numero}
              </Text>
              <Text style={s.figurinhaSub}>
                {pais.titulos >= 3 ? "Figurinha lendária" : pais.titulos >= 1 ? "Figurinha rara" : "Figurinha comum"} · Países
              </Text>
            </View>
            {pais.figurinha.coletada ? (
              <View style={s.figurinhaStatus}>
                <Ionicons name="checkmark-circle" size={14} color="#52B788" />
                <Text style={s.figurinhaStatusTexto}>Coletada</Text>
              </View>
            ) : (
              <Ionicons name="chevron-forward" size={16} color={colors.textFaint} />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StickerModal
        pais={pais}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}