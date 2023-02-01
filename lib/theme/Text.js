export const Text = {
  baseStyle: {
    lineHeight: "160%",
    fontWeight: "400",
    fontSize: "1rem",
    fontFamily: "lightText",
  },
  variants: {
    normal: {
      color: "textBlack",
    },
    light: {
      color: "blue",
      fontSize: "0.875rem",
    },
    dark: {
      color: "textBlue",
      // fontSize: "0.875rem",
      // fontSize: "1.563rem",
    },
    subtitleDark: {
      color: "textBlue",
      // fontSize: "0.875rem",
      fontSize: "1rem",
    },
    subtitleLight: {
      color: "grayishBlue",
      fontSize: "1rem",
    },
    primaryBold: {
      color: "primary",
      fontSize: "1rem",
      fontFamily: "mediumText",
    },
    primaryLight: {
      color: "primary",
      fontSize: "1rem",
      fontFamily: "lightText",
    },
    primaryThin: {
      color: "primary",
      fontSize: "1rem",
      fontFamily: "thinText",
    },
  },
  defaultProps: {
    variant: "normal",
  },
};
