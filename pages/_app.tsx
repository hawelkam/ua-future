import "../styles/globals.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishCommonTranslations from "../locales/en/common.json";
import polishCommonTranslations from "../locales/pl/common.json";
import ukrainianCommonTranslations from "../locales/uk/common.json";
import englishNavbarTranslations from "../locales/en/navbar.json";
import polishNavbarTranslations from "../locales/pl/navbar.json";
import ukrainianNavbarTranslations from "../locales/uk/navbar.json";
import type { AppProps } from "next/app";

const resources = {
  en: {
    common: englishCommonTranslations,
    navbar: englishNavbarTranslations,
  },
  pl: {
    common: polishCommonTranslations,
    navbar: polishNavbarTranslations,
  },
  uk: {
    common: ukrainianCommonTranslations,
    navbar: ukrainianNavbarTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: ["common", "navbar"],
  defaultNS: "common",
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

function UaFutureWebsite({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default UaFutureWebsite;
