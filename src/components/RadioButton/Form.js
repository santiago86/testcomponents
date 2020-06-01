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
    <div>
      <RadioGroup
        aria-label="gender"
        name="customized-radios"
        defaultValue="Cinco"
      >
        {RADIO_BUTTONS.map((element) => {
          return (
            <div>
              <RadioButtonCo
                value={element.value}
                label={element.label}
                disabled={element.disabled || false}
              />
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default Form
