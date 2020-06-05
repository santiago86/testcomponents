import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import ButtonCo from "../../../components/buttonCo"

const cases = ["AlertCo", "ButtonCo"]
const stories = storiesOf("ButtonCo", module)
cases.forEach((label) =>
  stories.add(label, () => (
    <ButtonCo loading={boolean("Set Loading", false)}>{label}</ButtonCo>
  ))
)
