import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { s } from "@/src/theme/rankingStyles";
import { colors } from "@/src/theme/colors";

// ─── Dados Mockados ────────────────────────────────────────────────────────────

const TOP_PLAYERS = [
  { id: "2", nome: "Julia G.", iniciais: "JG", xp: 3915, pos: 2 },
  { id: "1", nome: "Matheus A.", iniciais: "MA", xp: 4280, pos: 1 },
  { id: "3", nome: "Carlos R.", iniciais: "CR", xp: 3540, pos: 3 },
];

const RANKING_LIST = [
  { id: "4", nome: "Beatriz M.", iniciais: "BM", xp: 3120, lvl: 24 },
  { id: "5", nome: "Rodrigo F.", iniciais: "RF", xp: 2980, lvl: 22 },
  { id: "6", nome: "Ana Paula", iniciais: "AP", xp: 2850, lvl: 21 },
  { id: "7", nome: "Lucas S.", iniciais: "LS", xp: 2740, lvl: 20 },
  { id: "8", nome: "Sofia (você)", iniciais: "SO", xp: 2140, lvl: 15, isUser: true },
  { id: "9", nome: "Daniel K.", iniciais: "DK", xp: 1950, lvl: 14 },
  { id: "10", nome: "Fernanda L.", iniciais: "FL", xp: 1820, lvl: 13 },
];

// ─── Componentes ──────────────────────────────────────────────────────────────

function PodiumItem({ player }: { player: typeof TOP_PLAYERS[0] }) {
  const isFirst = player.pos === 1;
  const avatarStyle = [
    s.podiumAvatar,
    player.pos === 1 ? s.podiumAvatar1 : player.pos === 2 ? s.podiumAvatar2 : s.podiumAvatar3,
  ];

  const badgeColor = player.pos === 1 ? colors.gold : player.pos === 2 ? "#C0C0C0" : "#CD7F32";

  return (
    <View style={s.podiumItem}>
      {isFirst && <Ionicons name="ribbon" size={24} color={colors.gold} style={{ marginBottom: 4 }} />}
      <View style={avatarStyle}>
        <Text style={[s.rankAvatarText, isFirst && { fontSize: 18 }]}>{player.iniciais}</Text>
        <View style={[s.podiumBadge, { borderColor: badgeColor }]}>
          <Text style={[s.rankAvatarText, { fontSize: 10, color: badgeColor }]}>{player.pos}º</Text>
        </View>
      </View>
      <Text style={s.podiumName}>{player.nome}</Text>
      <Text style={s.podiumXP}>{player.xp} XP</Text>
    </View>
  );
}

// ─── Tela Principal ────────────────────────────────────────────────────────────

export default function RankingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} contentContainerStyle={s.container} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={s.header}>
          <Text style={s.headerSub}>GLOBAL</Text>
          <Text style={s.headerTitle}>Ranking Mundial</Text>
        </View>

        {/* Podium */}
        <View style={s.podiumContainer}>
          <PodiumItem player={TOP_PLAYERS[0]} />
          <PodiumItem player={TOP_PLAYERS[1]} />
          <PodiumItem player={TOP_PLAYERS[2]} />
        </View>

        {/* Quiz CTA */}
        <TouchableOpacity 
          style={s.quizCTA} 
          activeOpacity={0.8}
          onPress={() => router.push("/quiz")}
        >
          <View style={s.quizCTAIcon}>
            <Ionicons name="flash" size={20} color="#7F77DD" />
          </View>
          <View style={s.quizCTATexts}>
            <Text style={s.quizCTATitle}>Suba no Ranking!</Text>
            <Text style={s.quizCTASub}>Responda o quiz diário e ganhe até 100 XP.</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.textFaint} />
        </TouchableOpacity>

        {/* List */}
        <View style={s.listContainer}>
          {RANKING_LIST.map((item, index) => (
            <View 
              key={item.id} 
              style={[
                s.rankItem, 
                item.isUser && s.rankItemUser,
                index === RANKING_LIST.length - 1 && s.rankItemLast
              ]}
            >
              <Text style={[s.rankPos, item.isUser && { color: colors.gold }]}>
                {parseInt(item.id)}º
              </Text>
              <View style={s.rankAvatar}>
                <Text style={s.rankAvatarText}>{item.iniciais}</Text>
              </View>
              <View style={s.rankInfo}>
                <Text style={[s.rankName, item.isUser && { color: colors.goldLight }]}>{item.nome}</Text>
                <Text style={s.rankLevel}>Level {item.lvl}</Text>
              </View>
              <View style={s.rankScore}>
                <Text style={[s.rankXP, item.isUser && { color: colors.gold }]}>{item.xp.toLocaleString()}</Text>
                <Text style={s.rankSubText}>XP TOTAL</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
