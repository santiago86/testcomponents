import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean, select } from "@storybook/addon-knobs"
import ButtonCo from "../../../components/buttonCo"

const cases = ["AlertCo", "ButtonCo"]
const stories = storiesOf("ButtonCo", module)
cases.forEach((label) =>
  stories.add(label, () => (
    <ButtonCo
      loading={boolean("Set Loading", false)}
      color={select("color", ["primary", "secondary"], "primary")}
    >
      {label}
    </ButtonCo>
  ))
)
