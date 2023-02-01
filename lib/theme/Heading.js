export const Heading = {
  baseStyle: {
    color: "textBlack",
    // fontWeight: "700",
    fontFamily: "Gotham",
  },
  sizes: {
    md: {
      fontSize: "2.25rem",
      lineHeight: "41.58px",
      fontFamily: "heading",
      color: "textBlue",
    },
    lg: {
      fontSize: "3.25rem",
      lineHeight: "41.58px",
      fontFamily: "heading",
      color: "grayishBlue",
    },
    xl: {
      lineHeight: "41.58px",
      fontSize: "3.875rem",
      fontFamily: "heading",
      color: "#fff",
    },
  },
  variants: {
    card: {
      color: "#000",
      fontSize: "1.125rem",
      lineHeight: "26px",
    },
  },
  defaultProps: {
    size: "xl",
  },
};
