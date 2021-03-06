import React from "react"

import { boolean, text } from "@storybook/addon-knobs"
import LanguageIcon from "@material-ui/icons/Language"
import theme from "../../../theme"
import SelectCo from "./selectCo"
import OptionCo from "./optionCo"

const icon = (
  <LanguageIcon
    style={{
      pointerEvents: "none",
      marginRight: theme.spacing(2),
      color: theme.palette.grey["600"],
      background: theme.palette.transparent.main,
      zIndex: 100,
    }}
  />
)
const style = { width: "50%", marginLeft: 16, marginTop: 16 }

export default {
  title: "Components|Select",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
       Copa Select
      `,
    },
  },
}

const smallArray = [
  <OptionCo value="Value1" key="1">
    Value 1
  </OptionCo>,
  <OptionCo value="Value2" key="2">
    Value 2
  </OptionCo>,
  <OptionCo value="Value3" key="3">
    Value 3
  </OptionCo>,
]

const longArray = [
  <OptionCo value="Value1" key="1">
    Value 1
  </OptionCo>,
  <OptionCo value="Value2" key="2">
    Value 2
  </OptionCo>,
  <OptionCo value="Value3" key="3">
    Value 3
  </OptionCo>,
  <OptionCo value="Value4" key="4">
    Value 4
  </OptionCo>,
  <OptionCo value="Value5" key="5">
    Value 5
  </OptionCo>,
  <OptionCo value="Value6" key="6">
    Value 6
  </OptionCo>,
  <OptionCo value="Value7" key="7">
    Value 7
  </OptionCo>,
  <OptionCo value="Value8" key="8">
    Value 8
  </OptionCo>,
  <OptionCo value="Value9" key="9">
    Value 9
  </OptionCo>,
]

/**
 * Basic functioning of the Select
 */
export const Basic = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        label="Label"
        value={value}
        onChange={handleChange}
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Basic functioning of the Select with a long set of options
 */
export const Long = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        value={value}
        onChange={handleChange}
      >
        {longArray}
      </SelectCo>
    </div>
  )
}

/**
 * Changing the appearance between long and short set of options
 */
export const ChangeShortAndLong = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        value={value}
        onChange={handleChange}
      >
        {boolean("Set long", true) && longArray}
        {!boolean("Set long", true) && smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Basic functioning of the Select with an icon
 */
export const Icon = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const startIcon = boolean("set Icon", false) ? icon : undefined
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        value={value}
        onChange={handleChange}
        startAdornment={startIcon}
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Change the label of the select
 */
export const Label = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        label={text("Set label", "Label")}
        value={value}
        onChange={handleChange}
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Change the text of the placeholder
 */
export const Placeholder = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <SelectCo
        placeholder={text("Set placeholder", "Selecciona...")}
        value={value}
        onChange={handleChange}
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Select with no placeholder
 */
export const NoPlaceholder = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <SelectCo value={value} onChange={handleChange}>
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Select with something already selected
 */
export const AlreadySelected = () => {
  const [value, setValue] = React.useState("Value1")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <SelectCo
        placeholder="Selecciona..."
        value={value}
        onChange={handleChange}
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Disabled Select
 */
export const Disabled = () => (
  <div>
    <SelectCo
      placeholder="Selecciona..."
      disabled={boolean("Set disabled", true)}
      value=""
    >
      {smallArray}
    </SelectCo>
  </div>
)

/**
 * Error select
 */
export const ErrorSelect = () => {
  return (
    <div style={style}>
      <SelectCo
        placeholder="Selecciona..."
        error={boolean("Set disabled", true)}
        value=""
      >
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Select with manual value change
 */
export const ChangeValue = () => {
  return (
    <div style={style}>
      <SelectCo placeholder="Selecciona..." value={text("Set Value", "Value1")}>
        {smallArray}
      </SelectCo>
    </div>
  )
}

/**
 * Sandbox
 */
export const Playground = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const startIcon = boolean("set Icon", false) ? icon : undefined
  return (
    <div style={style}>
      <SelectCo
        placeholder={text("Set placeholder", "Selecciona...")}
        value={value}
        disabled={boolean("Set disabled", false)}
        error={boolean("Set error", false)}
        label={text("Set label", "Label")}
        onChange={handleChange}
        startAdornment={startIcon}
      >
        {boolean("Set long", true) && longArray}
        {!boolean("Set long", true) && smallArray}
      </SelectCo>
    </div>
  )
}
