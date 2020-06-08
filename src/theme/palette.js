import { colors } from "@material-ui/core"

const white = "#FFFFFF"
const black = "#000000"

export default {
  black,
  white,
  oldGold: "#CB9938",
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
    tooltip: "rgba(18,18,18,0.8)",
    main: "transparent",
    text: "rgba(255, 255, 255, 0.5)",
    bg: "rgba(255, 255, 255, 0.3)",
    bg2: "rgba(255, 255, 255, 0.1)",
    alertIcons: "rgba(0,0,0,0.2)",
    shadow: "rgba(0,0,0,0.15)",
    dimmer: "rgba(0,0,0,0.64)",
  },
  gradients: {
    gradientGrey: "linear-gradient(180deg, #FFF 0%, #000 100%)",
    gradientDark: "linear-gradient(90deg, #0E4A81 0%, #0D3050 100%)",
    gradient2: "linear-gradient(90deg, #0060A9 0%, #0D3050 100%)",
    gradient3: "linear-gradient(270deg, #0060A9 0%, #0E4A81 100%)",
    gradient4: "linear-gradient(270deg, #0060A9 0%, #0D3050 100%);",
    gradient5: "linear-gradient(45deg, #0D3050 30%, #0E4A81 90%)",
    "100": "linear-gradient(90deg, #0E4A81 0%, #0D3050 100%)",
    "200": "linear-gradient(90deg, #0060A9 0%, #0D3050 100%)",
    "300": "linear-gradient(270deg, #0060A9 0%, #0E4A81 100%)",
    "400": "linear-gradient(270deg, #0060A9 0%, #0D3050 100%)",
    "500": "linear-gradient(270deg, #12416e 0%, #0d3050 100%)",
    "600": "linear-gradient(270deg, #006cb3 0%, #12416e 100%)",
  },
  alternative: {
    copaGold: "#8D7249",
    orange: "#C27028",
    darkOrange: "#9E4E23",
    lightOrange: "#CB9938",
  },
  shadows: {
    tiny:
      "0 1px 1px 0 rgba(0,0,0,0.1), 0 2px 1px -1px rgba(0,0,0,0.04), 0 1px 3px 0 rgba(0,0,0,0.08)",
    small: "0 2px 4px 0 rgba(0,0,0,0.15)",
    medium:
      "0 4px 5px 0 rgba(0,0,0,0.07), 0 3px 15px 0 rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.12)",
    large:
      "0 12px 17px 2px rgba(0,0,0,0.06), 0 5px 22px 4px rgba(0,0,0,0.06), 0 7px 8px -4px rgba(0,0,0,0.1)",
    modal: "0 24px 24px 12px rgba(0,0,0,0.1)",
    tooltip: "0 -2px 10px 0 rgba(0,0,0,0.05), 0 4px 5px 0 rgba(0,0,0,0.07)",
  },
  selection: "#E0EBF2",
}
