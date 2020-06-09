import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import { number, text, boolean, action } from "@storybook/addon-knobs"

import palette from "../../../theme/palette"
import AlertCo from "./AlertCo"
import ButtonCo from "../../buttonCo"

export default {
  title: "Components|Alert",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
    },
  },
}

const sampleText =
  "¡Lo sentimos! No pudimos encontrar tu reserva con la información proporcionada. Por favor, revisa tus datos y vuelve a intentarlo."

export const Info = () => (
  <AlertCo
    severity="info"
    variant="filled"
    alertTitle={text("alertTitle", "")}
    width={`${number("width", 80)}%`}
    closeIcon={boolean("closeIcon", false)}
  >
    {text("Content", sampleText)}
  </AlertCo>
)

export const Success = () => (
  <AlertCo
    severity="success"
    variant="filled"
    fontSize={number("fontSize", 16)}
    alertTitle={text("alertTitle", "Success")}
    width={`${number("width", 80)}%`}
    closeIcon={boolean("closeIcon", false)}
  >
    {text("Content", sampleText)}
  </AlertCo>
)

export const Warning = () => (
  <AlertCo
    severity="warning"
    variant="filled"
    fontSize={number("fontSize", 16)}
    alertTitle={text("alertTitle", "Warning")}
    width={`${number("width", 80)}%`}
    closeIcon={boolean("closeIcon", true)}
  >
    {text("Content", sampleText)}
  </AlertCo>
)

export const Error = () => (
  <AlertCo
    severity="error"
    variant="filled"
    fontSize={number("fontSize", 16)}
    alertTitle={text("alertTitle", "Error")}
    width={`${number("width", 80)}%`}
    closeIcon={boolean("closeIcon", true)}
  >
    {text("Content", sampleText)}
  </AlertCo>
)

export const CustomAlert = () => (
  <AlertCo
    icon={<InfoIcon />}
    bgColor={text("bgColor", palette.white)}
    fontSize={number("fontSize", 16)}
    fontColor={text("fontColor", palette.black)}
    alertTitle={text("alertTitle", "Pago Requerido")}
    variant="filled"
    width={`${number("width", 80)}%`}
    alertAction={() => action("clicked")}
    closeIcon
  >
    <>
      <p>{text("Content", sampleText)}</p>
      <ButtonCo style={{ margin: "auto" }} variant="outlined">
        {text("alertActionText", "Pagar reserva")}
      </ButtonCo>
    </>
  </AlertCo>
)
