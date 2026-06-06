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

import { colors } from "../../src/theme/colors";

// ─── componentes ──────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "destinos",
    title: "Destinos",
    subtitle: "Cidades sede da Copa",
    xp: "+30 XP",
    icon: "location-sharp",
    borderColor: "#3a3a38",
    bg: colors.bgCard,
    route: "/(tabs)/explorar",
  },
  {
    id: "paises",
    title: "Países",
    subtitle: "Seleções participantes",
    xp: "+25 XP",
    icon: "earth",
    borderColor: colors.green,
    bg: colors.greenDark,
    route: "/(tabs)/explorar",
  },
  {
    id: "estadios",
    title: "Estádios",
    subtitle: "Arenas do mundial",
    xp: "+30 XP",
    icon: "football",
    borderColor: "#5E292E", // Mantendo um tom de vinho mas alinhado
    bg: "#3A191C",
    route: "/(tabs)/explorar",
  },
  {
    id: "mascotes",
    title: "Mascotes",
    subtitle: "Mascotes anteriores",
    xp: "+20 XP",
    icon: "happy",
    borderColor: colors.purple,
    bg: colors.purpleDark,
    route: "/(tabs)/explorar",
  },
  {
    id: "historico",
    title: "Copas Anteriores",
    subtitle: "Histórico completo do mundial",
    xp: "+40 XP",
    icon: "trophy",
    borderColor: colors.gold,
    bg: colors.goldDark,
    fullWidth: true,
    route: "/(tabs)/explorar",
  },
];

function CategoryCard({ item }: { item: typeof CATEGORIES[0] }) {
  const router = useRouter();
  const iconColor = item.id === "historico" ? colors.goldLight : item.id === "destinos" ? colors.gold : "#fff";
  
  return (
    <TouchableOpacity
      style={[
        s.categoryCard,
        { backgroundColor: item.bg, borderColor: item.borderColor },
        item.fullWidth && s.categoryCardFull,
      ]}
      activeOpacity={0.8}
      onPress={() => {
        if (item.id === "estadios") {
          router.push("/estadios");
        }
      }}
    >
      <View style={s.categoryTop}>
        <View style={[s.categoryIconContainer, { backgroundColor: "rgba(255,255,255,0.08)" }]}>
          <Ionicons 
            name={item.icon as any} 
            size={22} 
            color={iconColor} 
          />
        </View>
        <View style={s.categoryXpBadge}>
          <Text style={s.categoryXpText}>{item.xp}</Text>
        </View>
      </View>

      <View style={s.categoryBottom}>
        <View style={{ flex: 1 }}>
          <Text style={s.categoryTitle}>{item.title}</Text>
          <Text style={s.categorySubtitle}>{item.subtitle}</Text>
        </View>
        <Ionicons name="arrow-forward" size={14} color={colors.textFaint} style={s.categoryArrow} />
      </View>
    </TouchableOpacity>
  );
}

// ─── tela principal ────────────────────────────────────────────────────────────

export default function ExplorarScreen() {
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

        <View style={s.section}>
          <Text style={s.sectionTitle}>CATEGORIAS</Text>
          
          <View style={s.categoriesGrid}>
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} item={cat} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
