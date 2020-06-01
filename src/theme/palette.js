import { colors } from "@material-ui/core"

const white = "#FFFFFF"
const black = "#000000"

export default {
  black,
  white,
  gold: "#8D7249",
  common: {
    black: "#000",
    white: "#fff",
  },
  background: {
    paper: "#fff",
    default: "rgba(239, 239, 238, 1)",
  },
  primary: {
    light: "rgba(0, 108, 179, 1)",
    main: "rgba(0, 96, 169, 1)",
    dark: "rgba(14, 74, 129, 1)",
    contrastText: "#fff",
  },
  secondary: {
    light: "rgba(224, 235, 242, 1)",
    main: "rgba(14, 74, 129, 1)",
    dark: "rgba(13, 48, 80, 1)",
    contrastText: "#fff",
  },
  warning: {
    main: "#FFC82C",
    contrastText: "rgba(51, 51, 51, 1)",
  },
  error: {
    main: "rgba(219, 49, 49, 1)",
    contrastText: "#fff",
  },
  success: {
    main: "rgba(13, 138, 68, 1)",
    contrastText: "#fff",
  },
  text: {
    primary: "rgba(51, 51, 51, 1)",
    secondary: "rgba(102, 102, 102, 1)",
    disabled: "rgba(219, 218, 216, 1)",
    hint: "rgba(102, 102, 102, 1)",
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  grey: {
    "50": "#FFFFFF",
    "100": "#EFEFEE",
    "200": "#DBDAD8",
    "300": "#CCCCCB",
    "400": "#AAAAAB",
    "500": "#999999",
    "600": "#666666",
    "700": "#333333",
    "800": "#121212",
    "900": "#0D3050",
  },
  orange: {
    dark: "#944E23",
    main: "#C37028",
    light: "#CB9938",
  },
  transparent: {
    tooltip: "rgba(18,18,18,0.6)",
    main: "transparent",
    text: "rgba(255, 255, 255, 0.5)",
    bg: "rgba(255, 255, 255, 0.3)",
    shadow: "rgba(0,0,0,0.15)",
  },
  gradients: {
    gradientGrey: "linear-gradient(180deg, #FFF 0%, #000 100%)",
    gradientDark: "linear-gradient(90deg, #0E4A81 0%, #0D3050 100%)",
    gradient2: "linear-gradient(90deg, #0060A9 0%, #0D3050 100%)",
    gradient3: "linear-gradient(270deg, #0060A9 0%, #0E4A81 100%)",
    gradient4: "linear-gradient(270deg, #0060A9 0%, #0D3050 100%);",
    gradient5: "linear-gradient(45deg, #0D3050 30%, #0E4A81 90%)",
  },
  selection: "#E0EBF2",
}
