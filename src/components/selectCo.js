import React from "react"
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import { withStyles } from "@material-ui/core/styles"
import InputLabelCo from "./secondaryComponents/inputLabelCo"

const styledBy = (property, mapping) => (props) => mapping[props[property]]

const styles = {
  root: {
    color: styledBy("color", {
      empty: "#666",
    }),
  },
}

const StyledSelect = withStyles(styles)(({ classes, color, ...other }) => (
  <Select className={classes.root} {...other} />
))

function SelectCo(props) {
  const { children, toplabel, value } = props
  const color = value === "" ? "empty" : "primary"
  return (
    <div>
      {toplabel !== "" && <InputLabelCo>{toplabel}</InputLabelCo>}
      <StyledSelect color={color} {...props}>
        {children}
      </StyledSelect>
    </div>
  )
}

SelectCo.propTypes = {
  children: PropTypes.node.isRequired,
  toplabel: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

SelectCo.defaultProps = {
  toplabel: "",
}

export default SelectCo
