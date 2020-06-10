import React from "react"

import { text, boolean } from "@storybook/addon-knobs"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../../theme"

import TypographyCo from "./typographyCo"

const useStyles = makeStyles({
  banner: {
    background: theme.palette.gradients.gradient3,
    padding: theme.spacing(2),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  display: {
    padding: theme.spacing(2),
  },
  dark: {
    color: theme.palette.common.white,
  },
  h1Small: {
    fontSize: theme.typography.h1["@media (min-width:600px)"].fontSize,
  },
  h1Medium: {
    fontSize: theme.typography.h1["@media (min-width:960px)"].fontSize,
  },
  h1Def: {
    fontSize: theme.typography.h1.fontSize,
  },
  h2Small: {
    fontSize: theme.typography.h2["@media (min-width:600px)"].fontSize,
  },
  h2Medium: {
    fontSize: theme.typography.h2["@media (min-width:960px)"].fontSize,
  },
  h2Def: {
    fontSize: theme.typography.h2.fontSize,
  },
  h3Def: {
    fontSize: theme.typography.h3.fontSize,
  },
  h5Small: {
    fontSize: theme.typography.h5["@media (min-width:600px)"].fontSize,
  },
  h5Medium: {
    fontSize: theme.typography.h5["@media (min-width:960px)"].fontSize,
  },
  h5Def: {
    fontSize: theme.typography.h5.fontSize,
  },
  h6Small: {
    fontSize: theme.typography.h6["@media (min-width:600px)"].fontSize,
  },
  h6Medium: {
    fontSize: theme.typography.h6["@media (min-width:960px)"].fontSize,
  },
  h6Def: {
    fontSize: theme.typography.h6.fontSize,
  },
})

export default {
  title: "Components|Typography",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
       Copa Typography
      `,
    },
  },
}

export const Heading1Primary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h1" display="block" gutterBottom color="primary">
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h1Medium}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h1Small}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h1Def}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
    </div>
  )
}

export const Heading1Default = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h1" display="block" gutterBottom>
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={classes.h1Medium}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={classes.h1Small}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={classes.h1Def}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
    </div>
  )
}

export const Heading1Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h1Medium}`}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h1Small}`}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
      <TypographyCo
        variant="h1"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h1Def}`}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
    </div>
  )
}

export const Heading2Primary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h2" display="block" gutterBottom color="primary">
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h2Medium}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h2Small}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h2Def}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
    </div>
  )
}

export const Heading2Secondary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h2" display="block" gutterBottom color="secondary">
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h2Medium}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h2Small}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h2Def}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
    </div>
  )
}

export const Heading2Default = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h2" display="block" gutterBottom>
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={classes.h2Medium}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={classes.h2Small}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={classes.h2Def}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
    </div>
  )
}

export const Heading2Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h2Medium}`}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h2Small}`}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
      <TypographyCo
        variant="h2"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h2Def}`}
      >
        {text("Set Display", "Pasajeros a la reserva")}
      </TypographyCo>
    </div>
  )
}

export const Heading3Primary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h3" display="block" gutterBottom color="primary">
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
      <TypographyCo
        variant="h3"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h3Def}
      >
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
    </div>
  )
}

export const Heading3Secondary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h3" display="block" gutterBottom color="secondary">
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
      <TypographyCo
        variant="h3"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h3Def}
      >
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
    </div>
  )
}

export const Heading3Default = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h3" display="block" gutterBottom>
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
      <TypographyCo
        variant="h3"
        display="block"
        gutterBottom
        className={classes.h3Def}
      >
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
    </div>
  )
}

export const Heading3Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h3"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
      <TypographyCo
        variant="h3"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h3Def}`}
      >
        {text("Set Display", "Añade extras de viaje")}
      </TypographyCo>
    </div>
  )
}

export const Heading4Primary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h4" display="block" gutterBottom color="primary">
        {text("Set Display", "Leyenda de asientos")}
      </TypographyCo>
    </div>
  )
}

export const Heading4Secondary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h4" display="block" gutterBottom color="secondary">
        {text("Set Display", "Leyenda de asientos")}
      </TypographyCo>
    </div>
  )
}

export const Heading4Default = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h4" display="block" gutterBottom>
        {text("Set Display", "Leyenda de asientos")}
      </TypographyCo>
    </div>
  )
}

export const Heading4Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h4"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "Leyenda de asientos")}
      </TypographyCo>
    </div>
  )
}

export const DisplayLargePrimary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h5" display="block" gutterBottom color="primary">
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h5Medium}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h5Small}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h5Def}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
    </div>
  )
}

export const DisplayLargeSecondary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h5" display="block" gutterBottom color="secondary">
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h5Medium}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h5Small}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h5Def}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
    </div>
  )
}

export const DisplayLargeDefault = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h5" display="block" gutterBottom>
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={classes.h5Medium}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={classes.h5Small}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={classes.h5Def}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
    </div>
  )
}

export const DisplayLargeBanner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h5Medium}`}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h5Small}`}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
      <TypographyCo
        variant="h5"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h5Def}`}
      >
        {text("Set Display", "¿Deseas continuar?")}
      </TypographyCo>
    </div>
  )
}

export const DisplayPrimary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h6" display="block" gutterBottom color="primary">
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h6Medium}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h6Small}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="primary"
        className={classes.h6Def}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
    </div>
  )
}

export const DisplaySecondary = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h6" display="block" gutterBottom color="secondary">
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h6Medium}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h6Small}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        color="secondary"
        className={classes.h6Def}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
    </div>
  )
}

export const DisplayDefault = () => {
  const classes = useStyles()
  return (
    <div className={classes.display}>
      <TypographyCo variant="h6" display="block" gutterBottom>
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={classes.h6Medium}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={classes.h6Small}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={classes.h6Def}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
    </div>
  )
}

export const DisplayBanner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={classes.dark}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h6Medium}`}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h6Small}`}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
      <TypographyCo
        variant="h6"
        display="block"
        gutterBottom
        className={`${classes.dark} ${classes.h6Def}`}
      >
        {text("Set Display", "Auto Check-In disponible")}
      </TypographyCo>
    </div>
  )
}

export const Playground = () => {
  const classes = useStyles()
  const darkTheme = boolean("Set Dark", false)
    ? [classes.banner, classes.dark]
    : [classes.display, undefined]
  return (
    <div className={darkTheme[0]}>
      <TypographyCo
        variant={text("Set variant", "h1")}
        display="block"
        gutterBottom
        color={text("Set color", "primary")}
        className={darkTheme[1]}
      >
        {text("Set Display", "Hacia Buenos Aires")}
      </TypographyCo>
    </div>
  )
}
