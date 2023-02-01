export const Button = {
  baseStyle: {
    outline: 0,
    transition: "all ease 0.3s",
    borderRadius: "8px",
    fontFamily: "body",
    fontSize: ".875rem",
    height: "auto !important",
    width: "auto",
    boxShadow: "none",
    cursor: "pointer",
    border: "2px solid",
    borderColor: "transparent",
    "&:active": {
      transform: "scale(0.9)",
    },
    "&:hover[disabled]": {
      background: "#7c7e85 !important",
    },
  },
  sizes: {
    sm: {
      px: "1rem",
      py: "5px",
    },
    md: {
      px: "1.5rem",
      py: "1rem",
    },
    lg: {
      px: "2.5rem",
      py: "1.5rem",
    },
  },
  variants: {
    primary: {
      backgroundColor: "primary",
      color: "white",
      borderRadius: "25px",
      // _disabled: {
      //   opacity: 0.6,
      // },
    },
    blueSolid: {
      color: "white",
      backgroundColor: "blue",
    },
    grayBlueSolid: {
      color: "white",
      backgroundColor: "grayishBlue",
      borderRadius: "25px",
    },
    blackSolid: {
      color: "white",
      backgroundColor: "black",
    },
    blue: {
      backgroundColor: "grayishBlue",
      fontWeight: "600",
    },
    outline: {
      borderColor: "primary",
      color: "primary",
      fontSize: ".875rem",
      backgroundColor: "transparent",
    },
    blueOutline: {
      borderColor: "blue",
      color: "blue",
      backgroundColor: "transparent",
    },
    noStyle: {
      backgroundColor: "transparent",
    },
    glass: {
      w: "8.6875rem",
      h: "2.375rem",
      my: "auto",
      fontSize: "0.6875rem",
      fontWeight: "500",
      color: "black",
      backgroundColor: "glassBlue",
      border: "0rem solid transparent",
    },
    option: {
      padding: "15px 0px 15px 0px",
      color: "#718096",
      display: "inline-flex",
      fontSize: "0.875rem",
      fontWeight: "700",
      fontFamily: "Noto Sans JP",
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
