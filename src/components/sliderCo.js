import React from "react"
import Slider from "@material-ui/core/Slider"
import InputLabel from "@material-ui/core/InputLabel"
// import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import TooltipCO from "./tooltipCo"

// const useStyles = makeStyles(() => ({}))

const SliderCo = ({ value, handleChange, label, ...props }) => {
  // const classes = useStyles()
  const onChange = (event, newValue) => {
    handleChange(newValue)
  }
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
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
}

export default SliderCo
