import React from "react"
import PropTypes from "prop-types"

const OptionCoC = (props) => {
  const { children } = props
  return (
    <option {...props} style={{ display: "none" }}>
      {children}
    </option>
  )
}

OptionCoC.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OptionCoC
