import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import DoneIcon from "@material-ui/icons/Done"
import InfoIcon from "@material-ui/icons/InfoOutlined"

const useStyles = makeStyles({
  root: {
    padding: (props) => (props.small ? "2px 8px" : "2px 16px"),
  },
  label: {
    padding: 0,
    fontSize: (props) => (props.small ? "0.857rem" : "1rem"),
  },
  icon: {
    marginLeft: 0,
    marginRight: 2,
    height: 16,
  },
  colorPrimary: {
    backgroundColor: (props) => props.customColor,
  },
})

const PillCo = (props) => {
  const classes = useStyles(props)
  const { label, check, info, small, outlined, color, disabled } = props
  const chipProps = {
    icon: (check && <DoneIcon />) || (info && <InfoIcon />) || null,
    size: small ? "small" : "medium",
    variant: outlined ? "outlined" : "default",
    label,
    classes,
    color: color || "primary",
    disabled,
  }
  return <Chip {...chipProps} />
}

PillCo.propTypes = {
  label: PropTypes.string.isRequired,
  check: PropTypes.bool,
  info: PropTypes.bool,
  small: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  customColor: PropTypes.string,
}

PillCo.defaultProps = {
  check: false,
  info: false,
  small: false,
  outlined: false,
  disabled: false,
  color: "primary",
  customColor: "",
}

export default PillCo
