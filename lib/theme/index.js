import { extendTheme } from "@chakra-ui/react";
// import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { FormLabel } from "./FormLabel";
import { Radio } from "./Radio";
const breakpoints = {
  base: "0",
  xs: "600px",
  sm: "1024px",
  md: "1280px",
  lg: "1440px",
  xl: "1920px",
  "2xl": "2560px",
};
const fontSizes = {
  xs: "16px",
  sm: "24px",
  md: "36px",
  lg: "50px",
  xl: "62px",
};
const colors = {
  primary: "#DE0029",
  secondary: "#457B9D",
  bgDark: "#f0f0f0",
  dawnPink: "#F2E8E4",
  blue: "#1D3557",
  textBlue: "#1D3557",
  grayishBlue: "#457B9D",
  lightGrayishBlue: "#E4E7F2",
  background: "#F8F9FB",
  textBlack: "#00162E",
  textGray: "#777F8E",
  lightGreen: "#EFF8F1",
  lightBlue: "#E0F2FF",
  lightBorder: "#D6DEFF",
  glassBlue: "#E0E6FF",
  dirtyBlue: "#3F5160",
  tagGray: "#8e8e8e",
  slateGray: "#343B3E",
  dimGray: "#6a6a6a",
  error: "#ef5350",
  intGray: "#808080",
  questionTabBg: "#F2F7FC",
  videoLayoutBg: "#171E34",
  timeStampBg: "rgba(255, 130, 130, 0.43)",
  whatsAppGreen: "#25D366",
  btnGray: "#E7ECFF",
  btnGrayDark: "#DEE1EC",
  success: "#4BB543",
};

export const theme = extendTheme({
  colors,
  fonts: {
    // Gotham: "Gotham",
    sans: "Source Sans Pro",
    heading: `"GothamMedium", sans-serif`,
    body: `"GothamLight", sans-serif`,
    boldText: `"GothamBold", sans-serif`,
    mediumText: `"GothamMedium", sans-serif`,
    lightText: `"GothamLight", sans-serif`,
    thinText: `"GothamThin", sans-serif`,
  },
  // fontSizes,
  // breakpoints,
  components: { Button, Heading, Text, FormLabel, Radio },
});
