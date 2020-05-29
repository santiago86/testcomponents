import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Container from "@material-ui/core/Container"
import Radio from "@material-ui/core/Radio"
import Checkbox from "@material-ui/core/Checkbox"

import InputCo from "../components/TextField/inputCo"
import TypographyCo from "../components/typographyCo"
import ButtonCo from "../components/buttonCo"
import LOGO from "../assets/images/connectMiles_white.svg"
import palette from "../theme/palette"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleTop: {
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  containerBottom: {
    marginBottom: 40,
    paddingLeft: 120,
    paddingRight: 120,
  },
  space: {
    padding: 30,
  },
  main: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  radio: {
    fontSize: "0.875rem",
    fontWeight: 400,
    color: theme.palette.grey[600],
  },
  label: {
    paddingRight: 20,
    fontSize: "0.875rem",
    fontWeight: 400,
    color: theme.palette.grey[600],
  },
  middle: {
    lineHeight: 9,
  },
  inputWithoutLabel: {
    color: palette.transparent.main,
    padding: 3,
  },
  subtitle: {
    fontWeight: 400,
  },
  h3: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  h4: {
    color: palette.common.white,
    size: 16,
    textAlign: "center",
    fontWeight: 400,
  },
  banner: {
    background: palette.gradients.gradient5,
    padding: 20,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: palette.primary.main,
    padding: 27,
    borderRadius: 8,
  },
}))

const PassengerForm = () => {
  const classes = useStyles()

  const [values, setValues] = useState({
    one: "",
    two: "",
    three: "Titulo",
    four: "day",
    five: "month",
    six: "year",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "loyaltyProgram",
  })

  const day = Array(31)
    .fill()
    .map((x, i) => ({
      id: (i + 1).toString(),
      label: (i + 1).toString(),
    }))

  const year = Array(3)
    .fill()
    .map((x, i) => ({
      id: (i + 2020).toString(),
      label: (i + 2020).toString(),
    }))

  const month = [
    { id: "01", label: "Enero" },
    { id: "02", label: "Febrero" },
    { id: "03", label: "Marzo" },
    { id: "04", label: "Abril" },
    { id: "05", label: "Mayo" },
    { id: "06", label: "Junio" },
    { id: "07", label: "Julio" },
    { id: "08", label: "Agosto" },
    { id: "09", label: "Septiembre" },
    { id: "10", label: "Octubre" },
    { id: "11", label: "Noviembre" },
    { id: "12", label: "Diciembre" },
  ]

  const title = [
    { code: "01", label: "Señor" },
    { code: "02", label: "Señora" },
    { code: "03", label: "Señorita" },
    { code: "04", label: "Señorito" },
    { code: "05", label: "Dr." },
    { code: "06", label: "Ing." },
  ]

  const loyaltyProgram = [
    { code: "01", label: "Copa Airlines - ConnectMiles" },
    { code: "02", label: "Copa Airlines - ConnectMiles" },
  ]
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value })
  }

  const [selectedValue, setSelectedValue] = useState("a")

  const handleRadio = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div className={classes.root}>
      <Divider variant="fullWidth" />
      <Container maxWidth="lg" className={classes.containerBottom}>
        <TypographyCo
          component="h1"
          variant="h1"
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
        <div className={classes.banner}>
          <img src={LOGO} alt="Connect Miles" width="126" />
          <TypographyCo component="h4" variant="h4" className={classes.h4}>
            Inicia sesión en ConnectMiles para completar este paso más rápido
          </TypographyCo>
          <ButtonCo variant="outlined" color="inverted">
            Iniciar Sesión
          </ButtonCo>
        </div>
        <Grid container spacing={2} className={classes.main}>
          <Grid item xs={12} sm={6}>
            <div className={classes.option}>
              <TypographyCo
                variant="subtitle1"
                color="secondary"
                className={classes.subtitle}
              >
                Pasajero 1
              </TypographyCo>
              <TypographyCo
                variant="button"
                color="textPrimary"
                className={classes.label}
              >
                Adulto
              </TypographyCo>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <></>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" className={classes.space}>
        <TypographyCo component="span" variant="overline">
          Adulto
        </TypographyCo>
        <TypographyCo
          component="h2"
          variant="h2"
          color="secondary"
          className={classes.title}
        >
          Pasajero 1
        </TypographyCo>
        <Divider variant="fullWidth" />
        <Grid container spacing={2} className={classes.main}>
          <Grid item xs={12} sm={6}>
            <InputCo
              id="name"
              placeholder="Ingresa Nombre"
              label="Nombre"
              value={values.one}
              setValue={handleChange("one")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputCo
              id="lastName"
              placeholder="Ingresa Apellido"
              label="Apellidos"
              value={values.one}
              setValue={handleChange("two")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="titleName"
              options={title}
              getOptionLabel={(c) => c.label}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <InputCo
                  {...params}
                  placeholder="Seleccionar"
                  setValue={handleChange("three")}
                  id="title-input"
                  label="Título"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.middle}>
            <TypographyCo
              id="gener"
              variant="button"
              display="inline"
              color="textPrimary"
              className={classes.label}
            >
              Género:
            </TypographyCo>
            <FormControlLabel
              value="end"
              className={classes.radio}
              control={
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleRadio}
                  color="primary"
                  value="a"
                  name="male"
                  inputProps={{ "aria-label": "A" }}
                />
              }
              label="Male"
            />
            <FormControlLabel
              value="end"
              className={classes.radio}
              control={
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleRadio}
                  value="b"
                  name="female"
                  color="primary"
                  inputProps={{ "aria-label": "B" }}
                />
              }
              label="Female"
            />
          </Grid>

          <Grid item xs={6} sm={2}>
            <Autocomplete
              id="combo-box-demo"
              options={day}
              getOptionLabel={(c) => c.label}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <InputCo
                  {...params}
                  placeholder="Dia"
                  setValue={handleChange("four")}
                  id="day-input"
                  label="Día"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Autocomplete
              id="month"
              options={month}
              getOptionLabel={(c) => c.label}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <InputCo
                  {...params}
                  placeholder="Mes"
                  setValue={handleChange("Five")}
                  id="month-input"
                  label="Mes"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Autocomplete
              id="year"
              options={year}
              getOptionLabel={(c) => c.label}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <InputCo
                  {...params}
                  placeholder="Año"
                  setValue={handleChange("six")}
                  id="year-input"
                  label="Año"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <></>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputCo
              id="email"
              placeholder="Ingresa un correo electrónico"
              label="Correo electrónico"
              value={values.seven}
              setValue={handleChange("seven")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputCo
              id="email-repeat"
              placeholder="Ingresa un correo electrónico"
              label="Confirmar Correo electrónico"
              value={values.eight}
              setValue={handleChange("eight")}
            />
            <Checkbox
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />{" "}
            <TypographyCo
              variant="button"
              color="textPrimary"
              className={classes.label}
            >
              Usar este correo para todos los pasajeros
            </TypographyCo>
          </Grid>
          <Grid item xs={6} sm={3}>
            <InputCo
              id="code-input"
              placeholder="Código"
              label="Número de teléfono"
              value={values.nine}
              setValue={handleChange("nine")}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TypographyCo className={classes.inputWithoutLabel}>
              teléfono
            </TypographyCo>
            <InputCo
              id="phone-input"
              placeholder="Ingresar número"
              value={values.ten}
              setValue={handleChange("ten")}
            />
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
        <TypographyCo component="h3" variant="h3" className={classes.h3}>
          Programa de Viajero Frecuente
        </TypographyCo>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="loyaltyProgram"
              options={loyaltyProgram}
              getOptionLabel={(c) => c.label}
              style={{ width: "100%" }}
              renderInput={(params) => (
                <InputCo
                  {...params}
                  placeholder="Copa Airlines - ConnectMiles"
                  setValue={handleChange("eleven")}
                  id="loyaltyProgram-input"
                  label="Programa de lealtad"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputCo
              id="numberTravel-input"
              placeholder="Ingresa el número de viajero frecuente"
              label="Número de viajero frecuente"
              value={values.twelve}
              setValue={handleChange("twelve")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <></>
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <ButtonCo variant="contained" color="secondary">
              Guardar información del pasajero
            </ButtonCo>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PassengerForm
