import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "@/src/theme/colors";

export default function AlbumScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.center}>
        <Text style={s.texto}>Álbum — em breve</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  texto:  { color: colors.textMuted, fontSize: 14 },
});