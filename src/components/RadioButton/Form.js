import React from "react"
import RadioGroup from "@material-ui/core/RadioGroup"
import RadioButtonCo from "../radioButtonCO"

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
    label: "Quiero suscribirme a los correos de Copa",
  },
  {
    id: "radioButton4",
    value: "cuatro",
    label: "Disable",
    disabled: true,
  },
  {
    id: "radioButton5",
    value: "Cinco",
    label: "Disable checked",
    disabled: true,
  },
]

function Form() {
  return (
    <RadioGroup
      defaultValue="radioButton5"
      aria-label="gender"
      name="customized-radios"
    >
      {RADIO_BUTTONS.map((element) => {
        return (
          <RadioButtonCo
            value={element.value}
            label={element.label}
            disabled={element.disabled || false}
            defaultChecked={element.defaultChecked || false}
          />
        )
      })}
    </RadioGroup>
  )
}

export default Form
