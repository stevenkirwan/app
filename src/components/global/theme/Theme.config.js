const size = {
  small: "600px",
  medium: "768px",
  large: "1024px",
  extraLarge: "1200px"
};

export const theme = {
  color: {
    primary: {
      base: "#3498db",
      white: "#FFFFFF",
      dark: "#2980b9"
    }
  },
  grid: {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    extraLarge: `(min-width: ${size.extraLarge})`
  }
};
export default theme;
