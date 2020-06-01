import React from "react"

import ColorPaletteCo from "../components/colorsCo/colorPaletteCo"
import palette from "../theme/palette"

const {
  primary,
  secondary,
  orange,
  grey,
  error,
  warning,
  success,
  gradients,
} = palette

const colorThemePalette = [
  {
    name: "Navy",
    code: "#0D3050",
    color: secondary.dark,
  },
  {
    name: "Dark Blue",
    code: "#0E4A81",
    color: primary.dark,
  },
  {
    name: "Light Blue",
    code: "#006CB3",
    color: primary.light,
  },
  {
    name: "Dark Orange",
    code: orange.dark,
    color: orange.dark,
  },
  {
    name: "Orange",
    code: orange.main,
    color: orange.main,
  },
  {
    name: "Light Orange",
    code: orange.light,
    color: orange.light,
  },
]

const colorBrandPalette = [
  {
    name: "Copa Blue",
    code: "#0060A9",
    color: primary.main,
  },
  {
    name: "Copa Gold",
    code: palette.gold,
    color: palette.gold,
  },
]

const greyScalePalette = [
  {
    name: "C 800",
    code: grey[800],
    color: grey[800],
  },
  {
    name: "C 700",
    code: grey[700],
    color: grey[700],
  },
  {
    name: "C 600",
    code: grey[600],
    color: grey[600],
  },
  {
    name: "C 500",
    code: grey[500],
    color: grey[500],
  },
  {
    name: "C 400",
    code: grey[400],
    color: grey[400],
  },
  {
    name: "C 300",
    code: grey[300],
    color: grey[300],
  },
  {
    name: "C 200",
    code: grey[200],
    color: grey[200],
  },
  {
    name: "C 100",
    code: grey[100],
    color: grey[100],
  },
]

const systemColorsPalette = [
  {
    name: "Error",
    code: "#E62021",
    color: error.main,
  },
  {
    name: "Warning",
    code: warning.main,
    color: warning.main,
  },
  {
    name: "Confirmation",
    code: "#008918",
    color: success.main,
  },
]

const gradientsPalette = [
  {
    name: "Image",
    code: "gradient",
    color: gradients.gradientGrey,
  },
  {
    name: "Background",
    code: "gradient 1",
    color: gradients.gradientDark,
  },
  {
    name: "Background",
    code: "gradient 2",
    color: gradients.gradient2,
  },
]

const ColorPalletteSection = () => (
  <>
    <h2> Color palettes </h2>
    <ColorPaletteCo title="Color theme" colors={colorThemePalette} />
    <ColorPaletteCo title="Brand colors" colors={colorBrandPalette} />
    <ColorPaletteCo title="Brand colors" colors={greyScalePalette} />
    <ColorPaletteCo title="System colors" colors={systemColorsPalette} />
    <ColorPaletteCo title="Gradients" colors={gradientsPalette} />
  </>
)

export default ColorPalletteSection
