import { ThemeProvider } from "next-themes";
import { ContextProvider } from "../context/ContextProvider";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
