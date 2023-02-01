export const Radio = {
  components: {
    Radio: {
      baseStyle: {
        control: {
          borderColor: "red",
          bg: "blue",
          color: "#000",
        },
        _hover: {
          borderColor: "#999",
        },
      },
      variants: {
        outline: {
          field: {
            border: "2px solid",
            _focus: {
              borderColor: "#9280FF",
              boxShadow: "none",
            },
          },
        },

        solid: {
          field: {
            border: "3px solid",
            borderColor: "#130080",
            _focus: {
              borderColor: "#9280ff",
              boxShadow: "none",
            },
          },
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
  },
};

// border={"2px solid"}
// borderColor={"red"}
// bg={"red"}
