import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageTransition from "@/components/common/layouts/PageTransition";
import WizardProvider from "@/context/WizardsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <WizardProvider>
        <Component {...pageProps} />
      </WizardProvider>
    </PageTransition>
  );
}
