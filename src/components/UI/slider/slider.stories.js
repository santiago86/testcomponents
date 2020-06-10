import React from "react"
import { array, text, number, boolean } from "@storybook/addon-knobs"

import SliderCo from "./sliderCo"

export default {
  title: "Components|Slider",
  decorators: [(storyFn) => <div style={{ margin: 20 }}>{storyFn()}</div>],
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        ..... placeholder.....
      `,
    },
  },
}

export const OneNode = () => {
  return (
    <SliderCo
      value={number("Set slide", 2000)}
      label={text("Set label", "Slider")}
      aria-label={text("Set aria-label", "Slider to something")}
      min={number("Minimum value", 1000)}
      max={number("Maximum value", 10000)}
      step={number("Step value", 10000)}
      disabled={boolean("Set Disabled", false)}
    />
  )
}

export const DoubleNode = () => (
  <SliderCo
    value={array("Set slide", [200, 400])}
    label={text("Set label", "Slider")}
    aria-label={text("Set aria-label", "Slider to something")}
    min={number("Minimum value", 100)}
    max={number("Maximum value", 1000)}
    step={number("Step value", 100)}
    disabled={boolean("Set Disabled", false)}
  />
)
