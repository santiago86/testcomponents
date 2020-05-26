import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CheckIcon from "@material-ui/icons/Check"
import PhoneIcon from "@material-ui/icons/Phone"
import InputCo from "./inputCo"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  inputTitle: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#666666",
    fontWeight: "600",
    marginTop: "10px",
  },
  container: {
    display: "flex",
  },
  column: {
    width: "40%",
    marginLeft: "5%",
  },
  fixMargin: {
    marginTop: "30px",
  },
  inputWithoutLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#666666",
    fontWeight: "600",
    marginTop: "10px",
    marginBottom: "30px",
  },
}))

const Form = () => {
  const classes = useStyles()

  const [values, setValues] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "Panamá",
  })
  const [country, setCountry] = useState({
    name: "",
    false: false,
    error: "",
  })

  const countries = [
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "US", label: "Estados Unidos", phone: "1" },
    { code: "PA", label: "Panamá", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
  ]

  const validateCountry = (event) => {
    const { value } = event.target
    const isValid = countries.find(
      (el) => el.label.toLocaleLowerCase() === value.toLocaleLowerCase()
    )
    setCountry({ ...country, name: value, validCountry: isValid })
    if (!isValid) {
      setCountry({
        ...country,
        name: value,
        validCountry: isValid,
        error: "País Invalido",
      })
    }
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>
            campo de texto básico
          </Typography>
          <InputCo
            id="first-input"
            placeholder="Texto de Ejemplo"
            label="Label"
            value={values.one}
            setValue={handleChange("one")}
          />
          <Typography className={classes.inputTitle}>
            con texto de ayuda
          </Typography>
          <InputCo
            id="second-input"
            placeholder="Texto de ejemplo"
            label="Label"
            value={values.two}
            setValue={handleChange("two")}
            helperText="Este texto de ayuda es para ayudar"
          />
        </div>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>
            con icono izquierda
          </Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            label="Label"
            value={values.three}
            setValue={handleChange("three")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography className={classes.inputTitle}>
            con icono derecha
          </Typography>
          <InputCo
            id="fourth-input"
            placeholder="Texto de ejemplo"
            label="Label"
            value={values.four}
            setValue={handleChange("four")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InfoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.column}>
          <Typography className={classes.inputWithoutLabel}>
            sin label
          </Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            value={values.five}
            setValue={handleChange("five")}
          />
          <Typography className={classes.inputTitle}>con dos iconos</Typography>
          <InputCo
            id="fourth-input"
            placeholder="Texto de ejemplo"
            label="Label"
            value={values.six}
            setValue={handleChange("six")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <InfoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>Inhabilitado</Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            label="País"
            value={values.seven}
            setValue={handleChange("seven")}
            disabled
          />
          <Typography className={classes.inputTitle}>Solo Lectura</Typography>
          <InputCo
            id="fourth-input"
            placeholder="Ingrese el Pais"
            label="País"
            defaultValue={values.eight}
            setValue={handleChange("eight")}
            disabled
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>validaciones</Typography>
          <InputCo
            id="second-input"
            placeholder="Ingrese el País"
            label="País"
            value={country.name}
            setValue={validateCountry}
            InputProps={
              country.validCountry && {
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckIcon style={{ color: "green" }} />
                  </InputAdornment>
                ),
              }
            }
            hasErrors={!country.validCountry}
            helperText={!country.validCountry && country.error}
          />
        </div>
      </div>
    </div>
  )
}

export default Form
