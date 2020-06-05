import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions"
// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean } from "@storybook/addon-knobs"

import SwitchCo from "../../../components/swichtCo"

export default { title: "Swicht" }

export const SwichtCo = () => (
  <SwitchCo
    handleChange={action("clicked")}
    disabled={boolean("Set disabled", false)}
  />
)
