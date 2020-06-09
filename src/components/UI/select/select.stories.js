import React from "react"

import { action } from "@storybook/addon-actions"
import { boolean, text } from "@storybook/addon-knobs"

import SelectCo from "./selectCo"
import OptionCo from "./optionCo"

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

export const Basic = () => (
  <SelectCo placeholder="Selecciona..." value="">
    <OptionCo value="Value">Value</OptionCo>
  </SelectCo>
)

export const Disabled = () => (
  <SelectCo
    placeholder="Selecciona..."
    disabled={boolean("Set disabled", false)}
    value=""
  >
    <OptionCo value="Value">Value</OptionCo>
  </SelectCo>
)

export const Name = () => (
  <SelectCo onChange={action("clicked")} name={text("Set name", "Test")} />
)
/*
export const Label = () => (
  <SwichtCo
    handleChange={action("clicked")}
    label={text("Set label", "Test")}
  />
)

export const Checked = () => (
  <SwichtCo
    handleChange={action("clicked")}
    checked={boolean("Set checked", false)}
  />
)

export const Disabled = () => (
  <SwichtCo
    handleChange={action("clicked")}
    disabled={boolean("Set disabled", false)}
  />
)

export const Playground = () => (
  <SwichtCo
    handleChange={action("clicked")}
    name={text("Set name", "")}
    label={text("Set label", "")}
    checked={boolean("Set checked", false)}
    disabled={boolean("Set disabled", false)}
  />
)
*/
