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
import { s } from "../../src/theme/mascotesStyles";
import { MASCOTES, Mascote } from "../../src/data/mascotes";
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
            color={momento.emBreve ? "#E13A3E" : colors.purple}
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
  mascote,
  visible,
  onClose,
}: {
  mascote: Mascote;
  visible: boolean;
  onClose: () => void;
}) {
  const raridade = mascote.atual
    ? "LENDÁRIO"
    : mascote.raro
    ? "RARO"
    : "COMUM";

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

          <View style={s.modalEmojiContainer}>
            {mascote.imagem ? (
              <Image source={mascote.imagem} style={s.modalEmojiImage} resizeMode="contain" />
            ) : (
              <Text style={s.modalEmoji}>{mascote.emoji}</Text>
            )}
          </View>

          <Text style={s.modalName}>{mascote.nome}</Text>
          <Text style={s.modalSelection}>
            {mascote.copa} · {mascote.pais}
          </Text>

          <View style={s.modalInfoRow}>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Animal</Text>
              <Text style={s.modalInfoValue}>{mascote.animal.split(" ")[0]}</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Ano</Text>
              <Text style={s.modalInfoValue}>{mascote.ano}</Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Número</Text>
              <Text style={s.modalInfoValue}>{mascote.figurinha.numero}</Text>
            </View>
          </View>

          <View style={s.modalRarityBadge}>
            <Text style={s.modalRarityText}>{raridade}</Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function MascoteDetalheScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const mascote = MASCOTES.find((m) => m.id === id);
  if (!mascote) return null;

  const heroBg = mascote.atual
    ? colors.purpleDark
    : mascote.raro
    ? "#1A1A3A"
    : colors.bgCard;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* hero */}
        <View style={[s.detailHero, { backgroundColor: heroBg }]}>
          <View style={s.detailHeroOverlay} />

          <TouchableOpacity style={s.detailBackBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>

          {mascote.imagem ? (
            <Image source={mascote.imagem} style={s.detailEmojiGrandeImage} resizeMode="contain" />
          ) : (
            <Text style={s.detailEmojiGrande}>{mascote.emoji}</Text>
          )}
          <Text style={s.detailSub}>MASCOTE OFICIAL</Text>
          <Text style={s.detailTitle}>{mascote.nome}</Text>

          <View style={s.detailLocalRow}>
            <Text style={s.detailPais}>{mascote.pais}</Text>
            <View style={s.detailAnoBadge}>
              <Text style={s.detailAnoBadgeText}>{mascote.ano}</Text>
            </View>
          </View>
        </View>

        {/* recompensa */}
        <View style={[s.rewardBox, { marginTop: 20 }]}>
          <View>
            <Text style={s.rewardLabel}>Recompensa por explorar</Text>
            <Text style={s.rewardText}>{mascote.xp} desbloqueados</Text>
          </View>
          <View style={s.rewardIcon}>
            <Ionicons name="happy-outline" size={20} color={colors.gold} />
          </View>
        </View>

        {/* info grid */}
        <View style={s.infoGrid}>
          <InfoCard label="Animal" valor={mascote.animal.split(" ")[0]} sub={mascote.animal} />
          <InfoCard label="Copa" valor={String(mascote.ano)} sub={mascote.copa} />
          <InfoCard label="País-sede" valor={mascote.pais.split("/")[0].trim()} sub={mascote.pais} />
          <InfoCard
            label="Figurinha"
            valor={mascote.figurinha.numero}
            sub={mascote.figurinha.coletada ? "Coletada ✓" : "Não coletada"}
          />
        </View>

        {/* sobre */}
        <View style={s.sobreSection}>
          <Text style={s.sobreTitulo}>SOBRE O MASCOTE</Text>
          <Text style={s.sobreTexto}>{mascote.sobre}</Text>
        </View>

        {/* curiosidades */}
        {mascote.curiosidades.length > 0 && (
          <View style={s.curiosidadesSection}>
            <Text style={s.sobreTitulo}>CURIOSIDADES</Text>
            {mascote.curiosidades.map((c, i) => (
              <View key={i} style={s.curiosidadeItem}>
                <View style={s.curiosidadeDot} />
                <Text style={s.curiosidadeTexto}>{c}</Text>
              </View>
            ))}
          </View>
        )}

        {/* momentos */}
        {mascote.momentos.length > 0 && (
          <View style={s.historicoSection}>
            <Text style={s.sobreTitulo}>MOMENTOS HISTÓRICOS</Text>
            {mascote.momentos.map((m, idx) => (
              <MomentoItem
                key={m.id}
                momento={m}
                isLast={idx === mascote.momentos.length - 1}
              />
            ))}
          </View>
        )}

        {/* figurinha */}
        <View style={s.figurinhaSection}>
          <Text style={s.sobreTitulo}>FIGURINHA DO MASCOTE</Text>
          <TouchableOpacity
            style={s.figurinhaCard}
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
          >
            <View style={s.figurinhaIcon}>
              {mascote.imagem ? (
                <Image source={mascote.imagem} style={s.figurinhaEmojiImage} resizeMode="contain" />
              ) : (
                <Text style={s.figurinhaIconText}>{mascote.emoji}</Text>
              )}
            </View>
            <View style={s.figurinhaInfo}>
              <Text style={s.figurinhaNome}>
                {mascote.nome} {mascote.figurinha.numero}
              </Text>
              <Text style={s.figurinhaSub}>
                {mascote.atual ? "Figurinha lendária" : mascote.raro ? "Figurinha rara" : "Figurinha comum"} · Mascotes
              </Text>
            </View>
            {mascote.figurinha.coletada ? (
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
        mascote={mascote}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}