import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Divider } from "@material-ui/core"
import theme from "../theme"
import TypographyCo from "../components/UI/typography/typographyCo"

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
export default function Types() {
  const classes = useStyles()
  return (
    <div style={{ padding: theme.spacing(10) }}>
      <TypographyCo variant="overline" display="block" gutterBottom>
        Heading 1
      </TypographyCo>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            color="primary"
          >
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h1Medium}
          >
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h1Small}
          >
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h1Def}
          >
            Hacia Buenos Aires
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <TypographyCo variant="h1" display="block" gutterBottom>
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            className={classes.h1Medium}
          >
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            className={classes.h1Small}
          >
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo
            variant="h1"
            display="block"
            gutterBottom
            className={classes.h1Def}
          >
            Hacia Buenos Aires
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h1"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              Hacia Buenos Aires
            </TypographyCo>
            <TypographyCo
              variant="h1"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h1Medium}`}
            >
              Hacia Buenos Aires
            </TypographyCo>
            <TypographyCo
              variant="h1"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h1Small}`}
            >
              Hacia Buenos Aires
            </TypographyCo>
            <TypographyCo
              variant="h1"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h1Def}`}
            >
              Hacia Buenos Aires
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <TypographyCo variant="overline" display="block" gutterBottom>
        Heading 2
      </TypographyCo>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="primary"
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h2Medium}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h2Small}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h2Def}
          >
            Pasajeros a la reserva
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="secondary"
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h2Medium}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h2Small}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h2Def}
          >
            Pasajeros a la reserva
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <br />
          <TypographyCo variant="h2" display="block" gutterBottom>
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            className={classes.h2Medium}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            className={classes.h2Small}
          >
            Pasajeros a la reserva
          </TypographyCo>
          <TypographyCo
            variant="h2"
            display="block"
            gutterBottom
            className={classes.h2Def}
          >
            Pasajeros a la reserva
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h2"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              Pasajeros a la reserva
            </TypographyCo>
            <TypographyCo
              variant="h2"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h2Medium}`}
            >
              Pasajeros a la reserva
            </TypographyCo>
            <TypographyCo
              variant="h2"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h2Small}`}
            >
              Pasajeros a la reserva
            </TypographyCo>
            <TypographyCo
              variant="h2"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h2Def}`}
            >
              Pasajeros a la reserva
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <TypographyCo variant="overline" display="block" gutterBottom>
        Heading 3
      </TypographyCo>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <br />
          <TypographyCo
            variant="h3"
            display="block"
            gutterBottom
            color="primary"
          >
            Añade extras de viaje
          </TypographyCo>
          <TypographyCo
            variant="h3"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h3Def}
          >
            Añade extras de viaje
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <br />
          <TypographyCo
            variant="h3"
            display="block"
            gutterBottom
            color="secondary"
          >
            Añade extras de viaje
          </TypographyCo>
          <TypographyCo
            variant="h3"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h3Def}
          >
            Añade extras de viaje
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <br />
          <TypographyCo variant="h3" display="block" gutterBottom>
            Añade extras de viaje
          </TypographyCo>
          <TypographyCo
            variant="h3"
            display="block"
            gutterBottom
            className={classes.h3Def}
          >
            Añade extras de viaje
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h3"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              Añade extras de viaje
            </TypographyCo>
            <TypographyCo
              variant="h3"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h3Def}`}
            >
              Añade extras de viaje
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <TypographyCo variant="overline" display="block" gutterBottom>
        Heading 4
      </TypographyCo>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <br />
          <TypographyCo
            variant="h4"
            display="block"
            gutterBottom
            color="primary"
          >
            Leyenda de asientos
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <br />
          <TypographyCo
            variant="h4"
            display="block"
            gutterBottom
            color="secondary"
          >
            Leyenda de asientos
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <br />
          <TypographyCo variant="h4" display="block" gutterBottom>
            Leyenda de asientos
          </TypographyCo>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h4"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              Leyenda de asientos
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <TypographyCo variant="overline" display="block" gutterBottom>
        Display Large
      </TypographyCo>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="primary"
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h5Medium}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h5Small}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h5Def}
          >
            ¿Deseas continuar?
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="secondary"
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h5Medium}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h5Small}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h5Def}
          >
            ¿Deseas continuar?
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <br />
          <TypographyCo variant="h5" display="block" gutterBottom>
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            className={classes.h5Medium}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            className={classes.h5Small}
          >
            ¿Deseas continuar?
          </TypographyCo>
          <TypographyCo
            variant="h5"
            display="block"
            gutterBottom
            className={classes.h5Def}
          >
            ¿Deseas continuar?
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h5"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              ¿Deseas continuar?
            </TypographyCo>
            <TypographyCo
              variant="h5"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h5Medium}`}
            >
              ¿Deseas continuar?
            </TypographyCo>
            <TypographyCo
              variant="h5"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h5Small}`}
            >
              ¿Deseas continuar?
            </TypographyCo>
            <TypographyCo
              variant="h5"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h5Def}`}
            >
              ¿Deseas continuar?
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <TypographyCo variant="overline" display="block" gutterBottom>
        Display Large
      </TypographyCo>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="primary"
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h6Medium}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h6Small}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="primary"
            className={classes.h6Def}
          >
            Auto Check-In disponible
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="secondary"
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h6Medium}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h6Small}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            color="secondary"
            className={classes.h6Def}
          >
            Auto Check-In disponible
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <br />
          <TypographyCo variant="h6" display="block" gutterBottom>
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            className={classes.h6Medium}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            className={classes.h6Small}
          >
            Auto Check-In disponible
          </TypographyCo>
          <TypographyCo
            variant="h6"
            display="block"
            gutterBottom
            className={classes.h6Def}
          >
            Auto Check-In disponible
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.banner}>
            <TypographyCo
              variant="h6"
              display="block"
              gutterBottom
              className={classes.dark}
            >
              Auto Check-In disponible
            </TypographyCo>
            <TypographyCo
              variant="h6"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h6Medium}`}
            >
              Auto Check-In disponible
            </TypographyCo>
            <TypographyCo
              variant="h6"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h6Small}`}
            >
              Auto Check-In disponible
            </TypographyCo>
            <TypographyCo
              variant="h6"
              display="block"
              gutterBottom
              className={`${classes.dark} ${classes.h6Def}`}
            >
              Auto Check-In disponible
            </TypographyCo>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
