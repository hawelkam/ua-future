import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const SwitchLanguagePanel = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="fixed top-0 right-0">
      <button
        onClick={() => switchLanguage("PL")}
        className={`${i18n.language === "pl" ? "bg-red-300 " : "bg-white"}`}
      >
        <ReactCountryFlag
          countryCode="PL"
          style={{
            fontSize: "2em",
          }}
          aria-label="Polski"
        />
      </button>
      <button
        onClick={() => switchLanguage("EN")}
        className={`${i18n.language === "en" ? "bg-red-300 " : "bg-white"}`}
      >
        <ReactCountryFlag
          countryCode="GB"
          style={{
            fontSize: "2em",
          }}
          aria-label="English"
        />
      </button>
      <button
        onClick={() => switchLanguage("UK")}
        className={`${i18n.language === "uk" ? "bg-red-300 " : "bg-white"}`}
      >
        <ReactCountryFlag
          countryCode="UA"
          style={{
            fontSize: "2em",
          }}
          aria-label="Ukrainian"
        />
      </button>
    </div>
  );
};

export default SwitchLanguagePanel;
