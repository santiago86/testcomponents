import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"

import ColorSquareCo from "./colorSquareCo"

const ColorPaletteCo = ({ title, colors }) => (
  <>
    <h3> {title} </h3>
    <Grid container>
      {colors.map((color) => (
        <ColorSquareCo {...color} />
      ))}
    </Grid>
  </>
)

ColorPaletteCo.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}

ColorPaletteCo.defaultProps = {
  title: "",
}

export default ColorPaletteCo
