import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
      dark: "#c51162",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#f9f9f9",
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shortest: 150,
    },
  },
  zIndex: {
    appBar: 1200,
  },
});

export default theme;
