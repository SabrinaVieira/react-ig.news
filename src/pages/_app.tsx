//import '../styles/globals.css'

import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { Provider as NextAuthProvider } from "next-auth/client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
