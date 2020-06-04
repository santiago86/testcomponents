import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions"
import SwitchCo from "../../../components/swichtCo"

export default { title: "Swicht" }

export const ToStorybook = () => <SwitchCo handleChange={action("clicked")} />
