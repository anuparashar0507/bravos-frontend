import "../styles/globals.css";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultLayout from "@/lib/Layout";
// import { theme } from "@lib/theme";
export default function App({ Component, pageProps }) {
  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}
