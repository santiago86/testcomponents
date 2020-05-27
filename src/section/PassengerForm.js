import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"

import TypographyCo from "../components/typographyCo"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  titleTop: {
    marginTop: 20,
  },
  containerBottom: {
    marginBottom: 40,
  },
  space: {
    padding: 60,
  },
}))

const PassengerForm = () => {
  const classes = useStyles()

  const [name, setName] = React.useState("")
  const handleChange = (event) => {
    setName(event.target.value)
  }
  const [surname, setSurname] = useState("")
  const handleLastName = (e) => {
    setSurname(e.target.value)
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.containerBottom}>
        <TypographyCo
          component="h2"
          variant="h2"
          color="primary"
          className={classes.titleTop}
        >
          Información de los pasajeros
        </TypographyCo>
        <TypographyCo variant="subtitle1">
          Por favor, ingresa la información de cada pasajero en esta reserva.
        </TypographyCo>
      </Container>
      <Divider variant="fullWidth" />
      <Container maxWidth="md" className={classes.space}>
        <TypographyCo component="span" variant="overline">
          Adulto
        </TypographyCo>
        <TypographyCo
          component="h2"
          variant="h2"
          color="primary"
          className={classes.title}
        >
          Pasajero 1
        </TypographyCo>
        <Divider variant="fullWidth" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                id="standard-name"
                label="Nombre"
                placeholder="Ingresa Nombres"
                value={name}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                id="standard-name"
                label="Apellidos"
                placeholder="Ingresa Apellidos"
                value={surname}
                onChange={handleLastName}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                id="standard-name"
                label="Apellidos"
                value={surname}
                onChange={handleLastName}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>s</FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PassengerForm
