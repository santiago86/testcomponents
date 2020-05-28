import React from "react"
import Grid from "@material-ui/core/Grid"

import StepperCo from "../components/stepperCo"

const STEPPERS = [
  {
    id: 1,
    label: "VALOR MÍNIMO",
    initialValue: 0,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: 2,
    label: "VALOR INTERMEDIO",
    initialValue: 3,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: 3,
    label: "VALOR MÁXIMO",
    initialValue: 5,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: 4,
    label: "ESTADO DE ERROR",
    initialValue: 5,
    maxValue: 3,
    minValue: 0,
  },
  {
    id: 5,
    label: "INHABILITADO",
    disabled: true,
  },
]

const ButtonSection = () => (
  <>
    <Grid container alignItems="center" justify="space-around">
      {STEPPERS.map(({ id, ...props }) => (
        <div key={id}>
          <StepperCo {...props}>Label</StepperCo>
        </div>
      ))}
    </Grid>
  </>
)

export default ButtonSection
