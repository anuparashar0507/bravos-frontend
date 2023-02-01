import "../styles/globals.css";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import "@fontsource/montserrat";
import { theme } from "@lib/theme";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{ initialColorMode: "dark", useSystemColorMode: true }}
      />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}
