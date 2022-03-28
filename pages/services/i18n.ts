import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslations from "./locales/en/common.json";
import polishTranslations from "./locales/pl/common.json";
import ukrainianTranslations from "./locales/uk/common.json";

const resources = {
  en: {
    translation: englishTranslations,
  },
  pl: {
    translation: polishTranslations,
  },
  uk: {
    translation: ukrainianTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
