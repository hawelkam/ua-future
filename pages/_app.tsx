import "../styles/globals.css";
import "./services/i18n";
import type { AppProps } from "next/app";

function UaFutureWebsite({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default UaFutureWebsite;
