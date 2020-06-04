import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InfoIcon from "@material-ui/icons/Info"

import theme from "../theme"
import palette from "../theme/palette"
import AlertCo from "../components/alertCo"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const AlertSection = () => {
  const classes = useStyles()
  const sampleText =
    "¡Lo sentimos! No pudimos encontrar tu reserva con la información proporcionada. Por favor, revisa tus datos y vuelve a intentarlo."

  return (
    <div className={classes.root}>
      <AlertCo
        backgroundColor={palette.primary.main}
        icon={<InfoIcon />}
        severity="info"
        variant="filled"
        width="50%"
      >
        {sampleText}
      </AlertCo>
      <AlertCo
        fontWeight={500}
        closeIcon
        alertTitle="Error"
        severity="error"
        variant="filled"
      >
        {sampleText}
      </AlertCo>
      <AlertCo severity="warning" variant="filled">
        {sampleText}
      </AlertCo>
      <AlertCo severity="info" variant="filled">
        {sampleText}
      </AlertCo>
      <AlertCo severity="success" variant="filled">
        {sampleText}
      </AlertCo>
    </div>
  )
}

export default AlertSection
