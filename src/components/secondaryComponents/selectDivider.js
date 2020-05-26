import React from "react"
import PropTypes from "prop-types"
import Divider from "@material-ui/core/Divider"
import { withStyles } from "@material-ui/core/styles"
// We can inject some CSS into the DOM.
const styles = {
  root: {
    margin: "0 1.0rem",
  },
}

function selectDivider(props) {
  const { className } = props

  return <Divider className={className} />
}

selectDivider.propTypes = {
  className: PropTypes.string.isRequired,
}

export default withStyles(styles)(selectDivider)
