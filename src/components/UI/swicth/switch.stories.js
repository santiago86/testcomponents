import React from "react"

import { action } from "@storybook/addon-actions"
import { boolean, text } from "@storybook/addon-knobs"

import SwichtCo from "./swicthCo"

export default {
  title: "Components|Switch",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        ..... This component has no more styles .....
      `,
    },
  },
}

export const Basic = () => <SwichtCo />

export const Name = () => (
  <SwichtCo handleChange={action("clicked")} name={text("Set name", "Test")} />
)

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
