import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { linkTo } from "@storybook/addon-links"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Welcome } from "@storybook/react/demo"

export default {
  title: "Welcome",
  component: Welcome,
}

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />

ToStorybook.story = {
  name: "to Storybook",
}
