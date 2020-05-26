import React from "react"
import PropTypes from "prop-types"
import InputLabel from "@material-ui/core/InputLabel"

function InputLabelCo(props) {
  const { children } = props
  return <InputLabel {...props}>{children}</InputLabel>
}

InputLabelCo.propTypes = {
  children: PropTypes.node.isRequired,
}
export default InputLabelCo
