import React from "react"
import { action } from "@storybook/addon-actions"
import { boolean } from "@storybook/addon-knobs"

import SwitchCo from "../../../components/swichtCo"

export default { title: "Swicht" }

export const SwichtCo = () => (
  <SwitchCo
    handleChange={action("clicked")}
    disabled={boolean("Set disabled", false)}
  />
)
