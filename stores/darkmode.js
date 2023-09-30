import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const darkMode = atom({
  key: "dark-mode-atom",
  default: {
    dark: true,
    bgColor: "#222222",
    textPrimary: "#ffffff",
    textSecondary: "#eeeeee",
  },
  effects_UNSTABLE: [persistAtom],
});
