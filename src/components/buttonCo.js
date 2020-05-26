import React from "react"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"

function ButtonCo(props) {
  const { children } = props
  return <Button {...props}> {children} </Button>
}

ButtonCo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonCo
