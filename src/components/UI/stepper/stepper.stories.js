import React from "react"

import { boolean, text, number } from "@storybook/addon-knobs"

import StepperCo from "./stepperCo"

export default {
  title: "Components|Stepper",
}

export const Basic = () => (
  <StepperCo
    id="stepper-1"
    label="Stepper Basic"
    initialValue={1}
    maxValue={5}
  />
)

export const MinValue = () => (
  <StepperCo
    id="stepper-2"
    label="Stepper set in min value"
    initialValue={0}
    maxValue={5}
  />
)

export const MaxValue = () => (
  <StepperCo
    id="stepper-3"
    label="Stepper set in max value"
    initialValue={5}
    maxValue={5}
  />
)

export const WithError = () => (
  <StepperCo
    id="stepper-4"
    label="Stepper set with initial value over the max value"
    initialValue={8}
    maxValue={5}
  />
)

export const Disabled = () => (
  <StepperCo id="stepper-5" label="Stepper disabled" disabled />
)

export const Playground = () => (
  <StepperCo
    id="stepper-6"
    label={text("Set label", "Stepper")}
    initialValue={0}
    minValue={number("Set min value", 0)}
    maxValue={number("Set max value", 5)}
    disabled={boolean("Disabled", false)}
  />
)
