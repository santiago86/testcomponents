import { colors } from "@material-ui/core"

const white = "#FFFFFF"
const black = "#000000"

export default {
  black,
  white,
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
    main: "rgba(219, 49, 49, 1)",
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
  },
}
