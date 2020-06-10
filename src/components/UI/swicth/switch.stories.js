import React from "react"
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

export const Name = () => <SwichtCo name={text("Set name", "Test")} />

export const Label = () => <SwichtCo label={text("Set label", "Test")} />

export const Checked = () => (
  <SwichtCo checked={boolean("Set checked", false)} />
)

export const Disabled = () => (
  <SwichtCo disabled={boolean("Set disabled", false)} />
)

export const Playground = () => (
  <SwichtCo
    name={text("Set name", "")}
    label={text("Set label", "")}
    checked={boolean("Set checked", false)}
    disabled={boolean("Set disabled", false)}
  />
)
