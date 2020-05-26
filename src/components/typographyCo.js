import React from "react"
import PropTypes from "prop-types"

import Typography from "@material-ui/core/Typography"

function TypographyCo(props) {
  const { children } = props
  return <Typography {...props}>{children}</Typography>
}

TypographyCo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TypographyCo
