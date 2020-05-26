import React from "react"
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import { withStyles } from "@material-ui/core/styles"
import InputLabelCo from "./secondaryComponents/inputLabelCo"
import theme from "../theme"

const styledBy = (property, mapping) => (props) => mapping[props[property]]

const styles = {
  root: {
    color: styledBy("color", {
      empty: theme.palette.grey["600"],
    }),
  },
  select: {
    marginLeft: styledBy("starticon", {
      true: -theme.spacing(6.2),
    }),
    paddingLeft: styledBy("starticon", {
      true: theme.spacing(6.2),
    }),
  },
}

const defaultProps = {
  fullWidth: true,
  autoWidth: true,
  variant: "outlined",
  displayEmpty: true,
  MenuProps: {
    PaperProps: {
      style: {
        maxHeight: theme.spacing(27),
        minWidth: theme.spacing(30),
      },
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
  },
}

const StyledSelect = withStyles(styles)(({ classes, color, ...other }) => (
  <Select classes={{ root: classes.root, select: classes.select }} {...other} />
))

function SelectCo(props) {
  const { children, label, value, startAdornment } = props
  const color = value === "" ? "empty" : "primary"
  const currentProps = { ...defaultProps, ...props }
  const starticon = startAdornment !== undefined
  return (
    <div>
      {label !== "" && <InputLabelCo>{label}</InputLabelCo>}
      <StyledSelect
        color={color}
        starticon={starticon.toString()}
        {...currentProps}
        label={undefined}
      >
        {children}
      </StyledSelect>
    </div>
  )
}

SelectCo.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  startAdornment: PropTypes.node,
}

SelectCo.defaultProps = {
  label: "",
  startAdornment: undefined,
}

export default SelectCo
