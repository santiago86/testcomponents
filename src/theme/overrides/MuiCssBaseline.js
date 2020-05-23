import SuisseIntlLight from "../../assets/fonts/SuisseIntl-Light-WebS.woff2"
import SuisseIntlRegular from "../../assets/fonts/SuisseIntl-Regular-WebS.woff2"
import SuisseIntlMedium from "../../assets/fonts/SuisseIntl-Medium-WebS.woff2"
import SuisseIntlSemibold from "../../assets/fonts/SuisseIntl-SemiBold-WebS.woff2"
import palette from "../palette"

const suisseLight = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    url(${SuisseIntlLight}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseRegular = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${SuisseIntlRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseMedium = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    url(${SuisseIntlMedium}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseSemibold = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
    url(${SuisseIntlSemibold}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

export default {
  "@global": {
    "@font-face": [suisseLight, suisseRegular, suisseMedium, suisseSemibold],
    body: {
      backgroundColor: palette.background.paper,
    },
  },
}
