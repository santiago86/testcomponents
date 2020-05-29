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
      primary: theme.typography.body1.color,
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

styles.rootSet = theme.typography.body1.color

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

const StyledSelect = withStyles(styles)(({ classes, color, ...other }) => {
  const root = color === "primary" ? classes.rootSet : classes.root
  return <Select classes={{ root, select: classes.select }} {...other} />
})
const getPlaceholder = (placeholder) => (
  <MenuItemCo style={{ display: "none" }} value="" disabled>
    {placeholder}
  </MenuItemCo>
)

function SelectCo(props) {
  const {
    children,
    label,
    value,
    startAdornment,
    placeholder,
    onChange,
  } = props

  const [color, setColor] = React.useState(value === "" ? "empty" : "primary")

  const handleChange = (e) => {
    setColor(e.target.value === "" ? "empty" : "primary")
    onChange(e)
  }
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
        onChange={(e) => handleChange(e)}
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
  onChange: PropTypes.func,
}

SelectCo.defaultProps = {
  label: "",
  startAdornment: undefined,
  placeholder: "",
  children: undefined,
  onChange: () => {},
}

export default SelectCo
