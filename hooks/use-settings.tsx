import { create } from "zustand";

interface SettingsStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
