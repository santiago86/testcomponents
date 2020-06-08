import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import { boolean, select } from "@storybook/addon-knobs"

import PopperCo from "../../../components/popperCo"
import ButtonCo from "../../../components/buttonCo"

const stories = storiesOf("PopperCo", module)

const options = {
  Bottom: "bottom",
  BottomStart: "bottom-start",
  BottomEnd: "bottom-end",
  Left: "left",
  LeftStart: "left-start",
  LeftEnd: "left-end",
  Right: "right",
  RightStart: "right-start",
  RightEnd: "right-end",
  Top: "top",
  TopStart: "top-start",
  TopEnd: "top-end",
}

const optionsColor = {
  White: "white",
  Primary: "primary",
}

stories.add("PopperCo", () => {
  const buttonRef = useRef()
  return (
    <>
      <ButtonCo variant="contained" color="primary" ref={buttonRef}>
        Popper
      </ButtonCo>
      <PopperCo
        open={boolean("Open Popper:", false)}
        anchorEl={buttonRef.current}
        placement={select("Placement:", options, "bottom")}
        flip={boolean("Flip:", false)}
        color={select("Color:", optionsColor, "white")}
        arrow={boolean("Arrow:", true)}
        shine={boolean("Shine", false)}
      >
        Do you see any Teletubbies in here? Do you see a slender plastic tag
        clipped to my shirt with my name printed on it?
      </PopperCo>
    </>
  )
})
