import React, { useRef, useState } from "react"
import { boolean, select } from "@storybook/addon-knobs"
import PropTypes from "prop-types"

import PopperCo from "./popperCo"
import ButtonCo from "../../buttonCo"
import TypographyCo from "../../typographyCo"

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

export default {
  title: "Components | Popper",
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

const PopperDefault = ({ placement, color, flip, shine, arrow }) => {
  const buttonRef = useRef()
  const [open, setOpen] = useState(false)
  return (
    <>
      <TypographyCo
        variant="h1"
        style={{
          padding: 50,
          backgroundColor: "#f6f6f6",
          borderBottom: "1px solid #ccc",
          marginBottom: 40,
        }}
      >
        Popper
      </TypographyCo>
      <div
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        <ButtonCo
          variant="contained"
          color="primary"
          ref={buttonRef}
          onClick={() => setOpen(!open)}
        >
          Click me to toggle
        </ButtonCo>
      </div>
      <PopperCo
        open={open}
        anchorEl={buttonRef.current}
        placement={placement}
        flip={flip}
        color={color}
        arrow={arrow}
        shine={shine}
      >
        <TypographyCo
          component="body1"
          style={
            color === "primary"
              ? { color: "white", fontSize: 14 }
              : { fontSize: 14 }
          }
        >
          Well, the way they make shows is, they make one show. That shows
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they´re going to
          make more shows
        </TypographyCo>
      </PopperCo>
    </>
  )
}

export const PopperPlacement = () => {
  return (
    <PopperDefault
      placement={select("Placement:", options, "bottom")}
      color="white"
      arrow
    />
  )
}

export const PopperColor = () => {
  return <PopperDefault color={select("Color:", optionsColor, "white")} arrow />
}

export const PopperShine = () => {
  return (
    <PopperDefault
      color="primary"
      arrow
      shine={boolean("Shine", false)}
      placement="bottom-end"
    />
  )
}

export const PopperFlip = () => {
  return <PopperDefault color="white" arrow flip={boolean("Flip", false)} />
}

export const PopperArrow = () => {
  return <PopperDefault color="white" arrow={boolean("Arrow", false)} />
}

PopperDefault.propTypes = {
  placement: PropTypes.string,
  arrow: PropTypes.bool,
  flip: PropTypes.bool,
  color: PropTypes.string,
  shine: PropTypes.bool,
}

PopperDefault.defaultProps = {
  placement: "bottom",
  arrow: true,
  flip: false,
  color: "white",
  shine: false,
}
