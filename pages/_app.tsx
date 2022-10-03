import { ChakraProvider } from "@chakra-ui/react";
import { css } from "@emotion/css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div
        className={css({
          label: "chuj",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--chakra-colors-pink-300)",
        })}
      >
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
