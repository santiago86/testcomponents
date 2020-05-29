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
  /**
   * Information that will display inside the option
   */
  children: PropTypes.node.isRequired,

  /**
   * Value corresponding to the current option.
   * `value`can be either a string or a number
   * It is required. It cannot be empty ("")
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default OptionCoC
