import React from "react"
import Grid from "@material-ui/core/Grid"

import StepperCo from "../components/stepperCo"

const STEPPERS = [
  {
    id: "stepper-1",
    label: "VALOR MÍNIMO",
    initialValue: 0,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: "stepper-2",
    label: "VALOR INTERMEDIO",
    initialValue: 3,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: "stepper-3",
    label: "VALOR MÁXIMO",
    initialValue: 5,
    maxValue: 5,
    minValue: 0,
  },
  {
    id: "stepper-4",
    label: "ESTADO DE ERROR",
    initialValue: 5,
    maxValue: 3,
    minValue: 0,
  },
  {
    id: "stepper-5",
    label: "INHABILITADO",
    disabled: true,
  },
]

const StepperSection = () => (
  <>
    <Grid container alignItems="center" justify="space-around">
      {STEPPERS.map(({ id, ...props }) => (
        <div key={id}>
          <StepperCo id={id} {...props}>
            Label
          </StepperCo>
        </div>
      ))}
    </Grid>
  </>
)

export default StepperSection
