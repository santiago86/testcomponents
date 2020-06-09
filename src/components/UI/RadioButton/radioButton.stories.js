import React from "react"

import { boolean, text } from "@storybook/addon-knobs"

import RadioGroupMa from "@material-ui/core/RadioGroup"
import RadioButtonCo from "./radioButtonCo"

export default {
  title: "Components|RadioButton",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `custom RadioButton`,
    },
  },
}

const RADIO_BUTTONS = [
  {
    id: "radioButton1",
    value: "uno",
    label: "Label1",
  },

  {
    id: "radioButton2",
    value: "dos",
    label: "Label2",
  },

  {
    id: "radioButton3",
    value: "tres",
    label: "Label3",
  },
]

export const Basic = () => <RadioButtonCo label={text("Set label", "Label")} />

export const Checked = () => (
  <RadioButtonCo
    label={text("Set label", "Label")}
    checked={boolean("Set checked", true)}
  />
)

export const Disabled = () => (
  <RadioButtonCo
    label={text("Set label", "Label")}
    disabled={boolean("Set disabled", true)}
  />
)

export const DisabledChecked = () => (
  <RadioButtonCo
    label={text("Set label", "Label")}
    disabled={boolean("Set disabled", true)}
    checked={boolean("Set checked", true)}
  />
)

export const LabelMultiLine = () => (
  <RadioButtonCo
    label={text("Set label", "Quiero suscribirme a los correos de Copa")}
  />
)

export const RadioGroup = () => (
  <RadioGroupMa>
    {RADIO_BUTTONS.map((element) => {
      return (
        <div>
          <RadioButtonCo
            id={element.id}
            value={element.value}
            label={element.label}
          />
        </div>
      )
    })}
  </RadioGroupMa>
)
