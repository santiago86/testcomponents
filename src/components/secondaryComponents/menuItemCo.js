import React from "react"
import PropTypes from "prop-types"
import MenuItem from "@material-ui/core/MenuItem"

function menuItemCo(props) {
  const { value, disabled } = props
  return <MenuItem value={value} disabled={disabled} />
}

menuItemCo.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

menuItemCo.defaultProps = {
  disabled: false,
}

export default menuItemCo
