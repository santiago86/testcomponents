import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/IconButton"
import InputLabel from "@material-ui/core/InputLabel"
import Grid from "@material-ui/core/Grid"
import Plus from "@material-ui/icons/Add"
import Minus from "@material-ui/icons/Remove"

import TypographyCo from "./UI/typography/typographyCo"
import theme from "../theme/index"

const { palette } = theme

const useStyles = makeStyles(() => ({
  root: {
    margin: "1rem",
  },
  label: {
    fontSize: "0.875rem",
    marginBottom: "1rem",
    color: palette.grey[700],
  },
  button: {
    border: "1.5px solid",
    borderColor: palette.primary.light,
    padding: "0.25rem",
    color: palette.primary.light,
    "&:hover": {
      background: palette.common.white,
      color: palette.primary.dark,
      borderColor: palette.primary.dark,
    },
    "&:focus": {
      background: palette.secondary.light,
    },
    "&:active": {
      background: palette.primary.dark,
      color: palette.grey[200],
    },
    "&:disabled": {
      color: palette.grey[400],
      borderColor: palette.grey[400],
    },
    "&.error": {
      color: palette.error.main,
      borderColor: palette.error.main,
    },
  },
  icon: {
    width: "1.25rem",
    height: "1.25rem",
  },
  step: {
    margin: "0 1.5rem",
    fontSize: "1.4rem",
    width: "1.5rem",
    textAlign: "center",
    color: palette.grey[700],
    userSelect: "none",
    "&.error": {
      color: palette.error.main,
    },
    "&.disabled": {
      color: palette.grey[400],
    },
  },
}))

const StepperCo = ({
  id,
  label,
  initialValue,
  maxValue,
  minValue,
  onChange,
  disabled,
  ...props
}) => {
  const classes = useStyles()
  const [step, setStep] = useState(initialValue || 0)

  useEffect(() => onChange(step), [onChange, step])

  const minHasError = step < (minValue || 0)
  const minDisabled = step <= (minValue || 0)

  const maxHasError = step > maxValue
  const maxDisabled = step >= maxValue

  const incrementStep = () => setStep(maxDisabled ? step : step + 1)
  const decrementStep = () => setStep(minDisabled ? step : step - 1)

  return (
    <div className={classes.root} {...props}>
      {label && (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <Grid container alignItems="center">
        <Button
          className={clsx(maxHasError && "error", classes.button)}
          onClick={decrementStep}
          disabled={disabled || minDisabled}
          aria-label="decrement"
        >
          <Minus className={classes.icon} />
        </Button>
        <TypographyCo
          id={id}
          className={clsx(
            (minHasError || maxHasError) && "error",
            classes.step,
            disabled && "disabled"
          )}
        >
          {step}
        </TypographyCo>
        <Button
          className={clsx(minHasError && "error", classes.button)}
          onClick={incrementStep}
          disabled={disabled || maxDisabled}
          aria-label="increment"
        >
          <Plus className={classes.icon} />
        </Button>
      </Grid>
    </div>
  )
}

StepperCo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  initialValue: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

StepperCo.defaultProps = {
  label: "",
  initialValue: 0,
  maxValue: undefined,
  minValue: undefined,
  onChange: () => {},
  disabled: false,
}

export default StepperCo
