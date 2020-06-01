import React from "react"
import PropTypes from "prop-types"
import MenuItem from "@material-ui/core/MenuItem"

const MenuItemCo = React.forwardRef((props, ref) => {
  const { children } = props
  return (
    <MenuItem ref={ref} {...props}>
      {children}
    </MenuItem>
  )
})

MenuItemCo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuItemCo
