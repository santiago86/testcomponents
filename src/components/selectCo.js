import React from "react"
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import { withStyles } from "@material-ui/core/styles"
import MenuItemCo from "./secondaryComponents/menuItemCo"
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

const getPlaceholder = (placeholder) => (
  <MenuItemCo style={{ display: "none" }} value="" disabled>
    {placeholder}
  </MenuItemCo>
)

function SelectCo(props) {
  const { children, label, value, startAdornment, placeholder } = props
  const color = value === "" ? "empty" : "primary"
  const currentProps = { ...defaultProps, ...props }
  const starticon = startAdornment !== undefined
  const placeholderCo = getPlaceholder(placeholder)
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledSelect
        color={color}
        starticon={starticon.toString()}
        {...currentProps}
        label={undefined}
      >
        {placeholderCo}
        {children}
      </StyledSelect>
    </div>
  )
}

SelectCo.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
}

SelectCo.defaultProps = {
  label: "",
  startAdornment: undefined,
  placeholder: "",
  children: undefined,
}

export default SelectCo
