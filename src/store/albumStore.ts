import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AlbumStore = {
  desbloqueadas: string[];
  xp: number;
  desbloquear: (id: string, xpGanho: number) => void;
  carregarProgresso: () => Promise<void>;
};

export const useAlbumStore = create<AlbumStore>((set, get) => ({
  desbloqueadas: [],
  xp: 0,

  desbloquear: async (id, xpGanho) => {
    const { desbloqueadas, xp } = get();
    if (desbloqueadas.includes(id)) return;
    const novas = [...desbloqueadas, id];
    const novoXp = xp + xpGanho;
    set({ desbloqueadas: novas, xp: novoXp });
    await AsyncStorage.setItem("desbloqueadas", JSON.stringify(novas));
    await AsyncStorage.setItem("xp", String(novoXp));
  },

  carregarProgresso: async () => {
    const salvas = await AsyncStorage.getItem("desbloqueadas");
    const xpSalvo = await AsyncStorage.getItem("xp");
    set({
      desbloqueadas: salvas ? JSON.parse(salvas) : [],
      xp: xpSalvo ? Number(xpSalvo) : 0,
    });
  },
}));