import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { COPAS_HISTORICAS, type CopaHistorica } from "@/src/data/historico";
import { s } from "@/src/theme/historicoStyles";
import { colors } from "@/src/theme/colors";

function InfoCard({ label, valor, sub }: { label: string; valor: string; sub: string }) {
  return (
    <View style={s.infoCard}>
      <Text style={s.infoLabel}>{label}</Text>
      <Text style={s.infoValor}>{valor}</Text>
      <Text style={s.infoSub}>{sub}</Text>
    </View>
  );
}

function MomentoItem({ momento, isLast, cor }: { momento: any; isLast: boolean; cor: string }) {
  return (
    <View style={s.historicoItem}>
      <View style={s.historicoIconCol}>
        <View style={s.historicoIcon}>
          <Ionicons name={momento.icone as any} size={18} color={momento.emBreve ? "#E13A3E" : cor} />
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
  copa,
  visible,
  onClose,
}: {
  copa: CopaHistorica;
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <Pressable style={s.modalOverlay} onPress={onClose}>
        <Pressable style={s.modalContent}>
          <TouchableOpacity style={s.modalClose} onPress={onClose}>
            <Ionicons name="close" size={20} color="#FFF" />
          </TouchableOpacity>

          <View style={s.modalAnoContainer}>
            <Text style={s.modalAno}>{copa.ano}</Text>
          </View>

          <Text style={s.modalName}>{copa.paisSede}</Text>
          <Text style={s.modalSelection}>Copa do Mundo {copa.ano}</Text>

          <View style={s.modalInfoRow}>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Campeão</Text>
              <Text style={s.modalInfoValue}>{copa.campeao}</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Vice</Text>
              <Text style={s.modalInfoValue}>{copa.vice}</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Número</Text>
              <Text style={s.modalInfoValue}>{copa.figurinha.numero}</Text>
            </View>
          </View>

          <View style={s.modalRarityBadge}>
            <Text style={s.modalRarityText}>{copa.fase.toUpperCase()}</Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export default function HistoricoDetalheScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const copa = COPAS_HISTORICAS.find((item) => item.id === id);
  if (!copa) return null;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        <View style={[s.detailHero, { backgroundColor: colors.goldDark }]}>
          <View style={s.detailHeroOverlay} />

          <TouchableOpacity style={s.detailBackBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={s.detailAno}>{copa.ano}</Text>
          <Text style={s.detailSub}>COPA ANTERIOR</Text>
          <Text style={s.detailTitle}>{copa.paisSede}</Text>

          <View style={s.detailLocalRow}>
            <Text style={s.detailLocalText}>Final em {copa.cidadeFinal}</Text>
            <View style={s.detailFaseBadge}>
              <Text style={s.detailFaseText}>{copa.fase}</Text>
            </View>
          </View>
        </View>

        <View style={s.rewardBox}>
          <View>
            <Text style={s.rewardLabel}>Recompensa por explorar</Text>
            <Text style={s.rewardText}>{copa.xp} desbloqueados</Text>
          </View>
          <View style={s.rewardIcon}>
            <Ionicons name="trophy-outline" size={20} color={colors.gold} />
          </View>
        </View>

        <View style={s.infoGrid}>
          <InfoCard label="Campeão" valor={copa.campeao} sub={`Vice: ${copa.vice}`} />
          <InfoCard label="Artilheiro" valor={copa.artilheiro} sub={`${copa.gols} gols no torneio`} />
          <InfoCard label="Seleções" valor={String(copa.selecoes)} sub={`${copa.jogos} jogos`} />
          <InfoCard label="Mascote" valor={copa.mascote} sub={copa.figurinha.coletada ? "Figurinha coletada" : "Figurinha pendente"} />
        </View>

        <View style={s.sobreSection}>
          <Text style={s.sobreTitulo}>SOBRE A EDIÇÃO</Text>
          <Text style={s.sobreTexto}>{copa.sobre}</Text>
        </View>

        <View style={s.curiosidadesSection}>
          <Text style={s.sobreTitulo}>CURIOSIDADES</Text>
          {copa.curiosidades.map((item, index) => (
            <View key={`${copa.id}-curiosidade-${index}`} style={s.curiosidadeItem}>
              <View style={s.curiosidadeDot} />
              <Text style={s.curiosidadeTexto}>{item}</Text>
            </View>
          ))}
        </View>

        {copa.momentos.length > 0 && (
          <View style={s.historicoSection}>
            <Text style={s.sobreTitulo}>MOMENTOS HISTÓRICOS</Text>
            {copa.momentos.map((momento, idx) => (
              <MomentoItem
                key={momento.id}
                momento={momento}
                isLast={idx === copa.momentos.length - 1}
                cor={copa.cor}
              />
            ))}
          </View>
        )}

        <View style={s.figurinhaSection}>
          <Text style={s.sobreTitulo}>FIGURINHA DA EDIÇÃO</Text>
          <TouchableOpacity style={s.figurinhaCard} activeOpacity={0.8} onPress={() => setModalVisible(true)}>
            <View style={s.figurinhaIcon}>
              <Text style={s.figurinhaIconTexto}>{copa.figurinha.numero}</Text>
            </View>
            <View style={s.figurinhaInfo}>
              <Text style={s.figurinhaNome}>Copa {copa.ano} · {copa.paisSede}</Text>
              <Text style={s.figurinhaSub}>{copa.campeao} campeão · Histórico</Text>
            </View>
            {copa.figurinha.coletada ? (
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

      <StickerModal copa={copa} visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}
