import { Tabs } from "expo-router";
import { colors } from "@/src/theme/colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: { backgroundColor: "#151513", borderTopColor: "#2c2c2a" },
      tabBarActiveTintColor: colors.gold,
      tabBarInactiveTintColor: colors.textFaint,
      headerShown: false,
    }}>
      <Tabs.Screen name="index"    options={{ title: "início" }} />
      <Tabs.Screen name="album"    options={{ title: "álbum" }} />
      <Tabs.Screen name="explorar" options={{ title: "explorar" }} />
      <Tabs.Screen name="ranking"  options={{ title: "ranking" }} />
      <Tabs.Screen name="perfil"   options={{ title: "perfil" }} />
    </Tabs>
  );
}