import { create } from "zustand";
import { LanguageT } from "../lib/types";
import { LANGACTIONS, LANGLINKS } from "../lib/data";

type LanguageStore = {
  language: LanguageT;
  setLanguage: (newLanguage: LanguageT) => void;
  translations: {
    English: {
      [x: string]: string;
    };
    Español: {
      [x: string]: string;
    };
  };
};

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "English",
  setLanguage: (newLanguage: LanguageT) => set({ language: newLanguage }),
  translations: {
    English: {
      [LANGLINKS.HOME]: "Home",
      [LANGLINKS.USERS]: "Users",
      [LANGLINKS.NEWS]: "News",
      [LANGACTIONS.VIEW_USER]: "View User",
      [LANGACTIONS.VIEW_NEWS]: "View News",
      [LANGACTIONS.SAVE]: "Save",
      [LANGACTIONS.CREATE]: "Create",
    },
    Español: {
      [LANGLINKS.HOME]: "Inicio",
      [LANGLINKS.USERS]: "Usuarios",
      [LANGLINKS.NEWS]: "Noticias",
      [LANGACTIONS.VIEW_USER]: "Ver Usuario",
      [LANGACTIONS.VIEW_NEWS]: "Ver Noticia",
      [LANGACTIONS.SAVE]: "Guardar",
      [LANGACTIONS.CREATE]: "Crear",
    },
  },
}));

export default useLanguageStore;
