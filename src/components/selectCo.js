import React from "react"
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import Box from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"
import MenuItemCo from "./menuItemCo"
import theme from "../theme"
import { ReactComponent as down } from "../assets/icons/down.svg"

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
  outlined: {
    borderColor: "red",
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
      {label && <Box variant="body2">{label}</Box>}
      <StyledSelect
        color={color}
        starticon={starticon.toString()}
        {...currentProps}
        label={undefined}
        IconComponent={down}
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
