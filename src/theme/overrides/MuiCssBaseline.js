import SuisseIntlLightWoff2 from "../../assets/fonts/SuisseIntl-Light.woff2"
import SuisseIntlRegularWoff2 from "../../assets/fonts/SuisseIntl-Regular.woff2"
import SuisseIntlMediumWoff2 from "../../assets/fonts/SuisseIntl-Medium.woff2"
import SuisseIntlSemiboldWoff2 from "../../assets/fonts/SuisseIntl-SemiBold.woff2"

import SuisseIntlLightWoff from "../../assets/fonts/SuisseIntl-Light.woff"
import SuisseIntlRegularWoff from "../../assets/fonts/SuisseIntl-Regular.woff"
import SuisseIntlMediumWoff from "../../assets/fonts/SuisseIntl-Medium.woff"
import SuisseIntlSemiboldWoff from "../../assets/fonts/SuisseIntl-SemiBold.woff"

import SuisseIntlLightTTF from "../../assets/fonts/SuisseIntl-Light.ttf"
import SuisseIntlRegularTTF from "../../assets/fonts/SuisseIntl-Regular.ttf"
import SuisseIntlMediumTTF from "../../assets/fonts/SuisseIntl-Medium.ttf"
import SuisseIntlSemiboldTTF from "../../assets/fonts/SuisseIntl-SemiBold.ttf"

import SuisseIntlLightEOT from "../../assets/fonts/SuisseIntl-Light.eot"
import SuisseIntlRegularEOT from "../../assets/fonts/SuisseIntl-Regular.eot"
import SuisseIntlMediumEOT from "../../assets/fonts/SuisseIntl-Medium.eot"
import SuisseIntlSemiboldEOT from "../../assets/fonts/SuisseIntl-SemiBold.eot"

import palette from "../palette"

const suisseLight = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `url('${SuisseIntlLightEOT}?#iefix') format('embedded-opentype'), 
        url('${SuisseIntlLightWoff2}') format('woff2'), 
        url('${SuisseIntlLightWoff}') format('woff'), 
        url('${SuisseIntlLightTTF}') format('truetype')`,
}

const suisseRegular = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url('${SuisseIntlRegularEOT}?#iefix') format('embedded-opentype'), 
        url('${SuisseIntlRegularWoff2}') format('woff2'), 
        url('${SuisseIntlRegularWoff}') format('woff'), 
        url('${SuisseIntlRegularTTF}') format('truetype')`,
}

const suisseMedium = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `url('${SuisseIntlMediumEOT}?#iefix') format('embedded-opentype'), 
        url('${SuisseIntlMediumWoff2}') format('woff2'), 
        url('${SuisseIntlMediumWoff}') format('woff'), 
        url('${SuisseIntlMediumTTF}') format('truetype')`,
}

const suisseSemibold = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `url('${SuisseIntlSemiboldEOT}?#iefix') format('embedded-opentype'), 
        url('${SuisseIntlSemiboldWoff2}') format('woff2'), 
        url('${SuisseIntlSemiboldWoff}') format('woff'), 
        url('${SuisseIntlSemiboldTTF}') format('truetype')`,
}

export default {
  "@global": {
    "@font-face": [suisseLight, suisseRegular, suisseMedium, suisseSemibold],
    body: {
      backgroundColor: palette.background.paper,
    },
  },
}
