import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../../public/themes/fluent-light/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
