import { createTheme } from "@mui/material/styles";

// Create a custom theme with magenta colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60", // Magenta
    },
    secondary: {
      main: "#c2185b", // Darker Magenta
    },
    text: {
      primary: "#880e4f", // Dark Magenta Text
      secondary: "#000", // black Text
      disabled: "#a0a0a0", // Disabled Text Color
    },
    background: {
      default: "#fce4ec", // Light Magenta Background
    },
  },
});

export default theme;
