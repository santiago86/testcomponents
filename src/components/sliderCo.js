import React from "react"
import Slider from "@material-ui/core/Slider"
import InputLabel from "@material-ui/core/InputLabel"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import TooltipCO from "./tooltipCo"

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: props.width || "11.25rem",
  }),
  label: {
    fontSize: "0.875rem",
    marginBottom: "1rem",
    color: theme.palette.grey[700],
  },
}))

const SliderCo = ({
  value,
  styles,
  handleChange,
  minRange,
  label,
  step,
  ...props
}) => {
  const classes = useStyles(styles)
  const onChange = (event, newValue) => {
    if (Array.isArray(newValue)) {
      if (Math.abs(newValue[1] - newValue[0]) > (minRange || step)) {
        handleChange(newValue)
      }
    } else {
      handleChange(newValue)
    }
  }
  return (
    <div className={classes.root}>
      {label && <InputLabel className={classes.label}>{label}</InputLabel>}
      <Slider
        {...props}
        value={value}
        onChange={onChange}
        ValueLabelComponent={TooltipCO}
      />
    </div>
  )
}

SliderCo.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  minRange: PropTypes.number,
  styles: PropTypes.shape({}),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  handleChange: PropTypes.func.isRequired,
}

SliderCo.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  label: "",
  value: 10,
  styles: {},
  minRange: null,
}

export default SliderCo
