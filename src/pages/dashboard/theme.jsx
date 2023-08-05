import { createTheme } from "@mui/material";
const link = "https://coolors.co/264454-4c88a9-e40066-fae8eb-93a7b4";
const background = "#264454";
const largeText = "#93A7B4";
const buttonColor = "#E40066";
const smallText = "#4C88A9";
const invertedColor = "#FAE8EB";

const theme = createTheme({
  palette: {
    background: {
      paper: background,
      primary: invertedColor,
    },
    text: {
      primary: largeText,
      secondary: smallText,
      hint: buttonColor,
    },
    info: {
      main: largeText
    }
  },
  typography: {
    fontFamily: "'Roboto Slab', serif",
    h1: {
      fontSize: 40,
      fontWeight: 600,
      color: largeText,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      color: largeText,
      '@media (max-width:600px)': {
        fontSize: 24, // Font size for h6 on screens with width 600px or greater
      },
      '@media (max-width:400px)': {
        fontSize: 16, // Font size for h6 on screens with width 960px or greater
      },
    },
    h3: {
      fontWeight: 600,
      color: largeText,
    }, // for name in banner
    h4: {
      fontWeight: 600,
      color: largeText,
    }, // for Web Developer and Machine Learning Enthusiast
    h6: {
      color: smallText,
    }, // for hi, its me
    button: {
      color: buttonColor,
    }, // for buttons
    body1: {
      color: largeText,
    }, // for paragraphs
    subtitle2: {
      color: buttonColor,
    }, // for navbar
  },
});

export default theme;
