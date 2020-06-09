import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InfoIcon from "@material-ui/icons/Info"

import theme from "../theme"
import palette from "../theme/palette"
import AlertCo from "../components/alertCo"

import ButtonCo from "../components/buttonCo"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alertAction: {
    backgroundColor: palette.primary.main,
    padding: 40,
  },
}))

const AlertSection = () => {
  const classes = useStyles()
  const sampleText =
    "¡Lo sentimos! No pudimos encontrar tu reserva con la información proporcionada. Por favor, revisa tus datos y vuelve a intentarlo."
  const sampleText1 =
    "Esta reserva expirará en XXhXXm. Para que no se cancele, recuerde completar tu compra."

  const actionBtn = () => console.log("hello")

  return (
    <div className={classes.root}>
      <div className={classes.alertAction}>
        <AlertCo
          icon={<InfoIcon />}
          bgColor={palette.white}
          fontColor={palette.black}
          alertTitle="Pago Requerido"
          alerActionText="Pagar reserva"
          variant="filled"
          alertAction={actionBtn}
          closeIcon
        >
          <>
            <p>{sampleText1}</p>
            <ButtonCo style={{ margin: "auto" }} variant="outlined">
              Pagar Reserva
            </ButtonCo>
          </>
        </AlertCo>
      </div>
      <AlertCo
        icon={<InfoIcon />}
        fontSize={22}
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
