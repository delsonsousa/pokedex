import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
