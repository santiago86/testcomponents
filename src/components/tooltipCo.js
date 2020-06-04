import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.transparent.tooltip,
    fontWeight: 500,
    fontSize: "12px",
  },
}))

const TooltipCO = ({ children, value, ...props }) => {
  const styles = useStyles()

  return (
    <Tooltip classes={{ tooltip: styles.root }} title={value} {...props}>
      {children}
    </Tooltip>
  )
}

TooltipCO.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top",
  ]),
}

TooltipCO.defaultProps = {
  children: null,
  value: "",
  placement: "bottom",
}

export default TooltipCO
