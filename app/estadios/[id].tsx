import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { s } from "../../src/theme/estadiosStyles";
import { ESTADIOS, Estadio } from "../../src/data/estadios";
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
          <Ionicons name={momento.icone} size={18} color={momento.emBreve ? "#E13A3E" : colors.gold} />
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
  estadio,
  visible,
  onClose,
}: {
  estadio: Estadio;
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
        <Pressable style={[s.modalContent, { backgroundColor: estadio.iconico ? "#332512" : "#2A2A28" }]}>
          <TouchableOpacity style={s.modalClose} onPress={onClose}>
            <Ionicons name="close" size={20} color="#FFF" />
          </TouchableOpacity>

          <View style={s.modalImageContainer}>
            <Image
              source={estadio.figurinha.foto}
              style={s.modalImage}
              resizeMode="cover"
            />
          </View>

          <Text style={s.modalName}>{estadio.figurinha.nome} {estadio.figurinha.numero}</Text>
          <Text style={s.modalSelection}>
            {estadio.nomePais} · {estadio.cidade}
          </Text>

          <View style={s.modalInfoRow}>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Capacidade</Text>
              <Text style={s.modalInfoValue}>
                {estadio.capacidade}
              </Text>
            </View>
            <View style={s.modalInfoBadge}>
              <Text style={s.modalInfoLabel}>Tipo</Text>
              <Text style={s.modalInfoValue}>Estádio</Text>
            </View>
          </View>

          <View style={[s.modalRarityBadge, { backgroundColor: estadio.iconico ? colors.gold : colors.purpleDark }]}>
            <Text style={[s.modalRarityText, { color: estadio.iconico ? colors.bg : "#CECBF6" }]}>
              {estadio.iconico ? "LENDÁRIO" : "RARO"}
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function EstadioDetalheScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const estadio = ESTADIOS.find((e) => e.id === id);

  if (!estadio) return null;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
        {/* header com imagem real */}
        <View style={{ height: 250, width: '100%' }}>
          <Image source={estadio.foto} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
          
          <View style={{ position: 'absolute', top: 20, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>
            {estadio.iconico && (
              <View style={[s.estadioBadgeIconico, { backgroundColor: colors.gold, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, flexDirection: "row", alignItems: "center", gap: 4 }]}>
                <Ionicons name="star" size={12} color={colors.bg} />
                <Text style={[s.estadioBadgeTextoIconico, { color: colors.bg }]}>ICÔNICO</Text>
              </View>
            )}
          </View>

          <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
            <Text style={[s.headerSub, { color: '#fff', opacity: 0.8 }]}>ESTÁDIO</Text>
            <Text style={[s.detailTitle, { marginTop: 5, fontSize: 28 }]}>{estadio.nome}</Text>
            <View style={s.detailLocalRow}>
              <Text style={[s.detailPais, { color: '#fff' }]}>{estadio.pais} · {estadio.nomePais}</Text>
              <Text style={[s.detailCidade, { color: '#fff', opacity: 0.8 }]}>{estadio.cidade}</Text>
            </View>
          </View>
        </View>

        {/* recompensa */}
        <View style={[s.rewardBox, { marginTop: 20 }]}>
          <View>
            <Text style={s.rewardLabel}>Recompensa por explorar</Text>
            <Text style={s.rewardText}>{estadio.xp} desbloqueados</Text>
          </View>
          <View style={s.rewardIcon}>
            <Ionicons name="trophy-outline" size={20} color={colors.gold} />
          </View>
        </View>

        {/* info grid */}
        <View style={s.infoGrid}>
          <InfoCard label="Capacidade" valor={estadio.capacidade.split(' ')[0]} sub="lugares" />
          <InfoCard label="Inauguração" valor={estadio.inauguracao} sub={estadio.anosInauguracao} />
          <InfoCard label="Copas Sediadas" valor={estadio.copasSediadas.toString()} sub={estadio.anosCopas} />
          <InfoCard label="Recorde Público" valor={estadio.recordePublico} sub={estadio.copaRecorde} />
        </View>

        {/* sobre */}
        <View style={s.sobreSection}>
          <Text style={s.sobreTitulo}>SOBRE O ESTÁDIO</Text>
          <Text style={s.sobreTexto}>{estadio.sobre}</Text>
        </View>

        {/* momentos */}
        {estadio.momentos.length > 0 && (
          <View style={s.historicoSection}>
            <Text style={s.sobreTitulo}>MOMENTOS HISTÓRICOS</Text>
            {estadio.momentos.map((m, idx) => (
              <MomentoItem key={m.id} momento={m} isLast={idx === estadio.momentos.length - 1} />
            ))}
          </View>
        )}

        {/* figurinha interativa */}
        <View style={s.figurinhaSection}>
          <Text style={s.sobreTitulo}>FIGURINHA DO ESTÁDIO</Text>
          <TouchableOpacity 
            style={s.figurinhaCard} 
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
          >
            <View style={[s.figurinhaIcon, { overflow: 'hidden' }]}>
              <Image source={estadio.figurinha.foto} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            </View>
            <View style={s.figurinhaInfo}>
              <Text style={s.figurinhaNome}>{estadio.figurinha.nome} {estadio.figurinha.numero}</Text>
              <Text style={s.figurinhaSub}>Figurinha rara · Estádios</Text>
            </View>
            {estadio.figurinha.coletada ? (
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
        estadio={estadio} 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </SafeAreaView>
  );
}
