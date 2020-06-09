import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import InfoIcon from "@material-ui/icons/Info"
import CheckIcon from "@material-ui/icons/Check"
import PhoneIcon from "@material-ui/icons/Phone"
import Autocomplete from "@material-ui/lab/Autocomplete"
import InputCo from "../components/UI/input/inputCo"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  inputTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    color: theme.palette.grey[600],
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    display: "flex",
  },
  column: {
    width: "32%",
    marginRight: 20,
  },
  fixMargin: {
    marginTop: 30,
  },
  inputWithoutLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    color: theme.palette.grey[600],
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 30,
  },
  warningInfo: {
    width: 12,
    marginRight: 5,
    height: "auto",
  },
}))

const TextfieldSection = () => {
  const classes = useStyles()

  const [values, handleChanges] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "Panamá",
    nine: "",
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
    handleChanges({ ...values, [prop]: event.target.value })
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
            handleChange={handleChange("one")}
            ariaLabel="Texto de Ejemplo"
          />
          <Typography className={classes.inputTitle}>
            con texto de ayuda
          </Typography>
          <InputCo
            id="second-input"
            placeholder="Texto de ejemplo"
            label="Label"
            value={values.two}
            handleChange={handleChange("two")}
            helperText="Este texto de ayuda es para ayudar"
            ariaLabel="Texto de Ejemplo"
          />
        </div>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>
            con icono izquierda
          </Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            ariaLabel="Texto de Ejemplo"
            label="Label"
            value={values.three}
            handleChange={handleChange("three")}
            InputProps={{
              startAdornment: (
                <InputAdornment disablePointerEvents position="start">
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
            ariaLabel="Texto de Ejemplo"
            label="Label"
            value={values.four}
            handleChange={handleChange("four")}
            InputProps={{
              endAdornment: (
                <InputAdornment disablePointerEvents position="end">
                  <InfoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.column}>
          <Typography className={classes.inputWithoutLabel}>
            sin label
          </Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            ariaLabel="Texto de Ejemplo"
            value={values.five}
            handleChange={handleChange("five")}
          />
          <Typography className={classes.inputTitle}>con dos iconos</Typography>
          <InputCo
            id="fourth-input"
            placeholder="Texto de ejemplo"
            ariaLabel="Texto de Ejemplo"
            label="Label"
            value={values.six}
            handleChange={handleChange("six")}
            InputProps={{
              startAdornment: (
                <InputAdornment disablePointerEvents position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment disablePointerEvents position="end">
                  <InfoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>Inhabilitado</Typography>
          <InputCo
            id="third-input"
            placeholder="Texto de Ejemplo"
            ariaLabel="Texto de Ejemplo"
            label="País"
            value={values.seven}
            handleChange={handleChange("seven")}
            disabled
          />
          <Typography className={classes.inputTitle}>Solo Lectura</Typography>
          <InputCo
            id="fourth-input"
            placeholder="Ingrese el Pais"
            ariaLabel="Texto de Ejemplo"
            label="País"
            defaultValue={values.eight}
            handleChange={handleChange("eight")}
            disabled
          />
        </div>
        <div className={classes.column}>
          <Typography className={classes.inputTitle}>validaciones</Typography>
          <InputCo
            id="second-input"
            placeholder="Ingrese el País"
            ariaLabel="Ingrese el País"
            label="País"
            value={country.name}
            handleChange={validateCountry}
            InputProps={
              country.validCountry && {
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckIcon style={{ color: "green", fontSize: "18px" }} />
                  </InputAdornment>
                ),
              }
            }
            hasErrors={!country.validCountry}
            helperText={!country.validCountry && country.error}
            component={<InfoIcon className={classes.warningInfo} />}
          />
          <Typography className={classes.inputTitle}>autocomplete</Typography>
          <Autocomplete
            id="combo-box-demo"
            options={countries}
            getOptionLabel={(c) => c.label}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <InputCo
                {...params}
                placeholder="Ingrese el País"
                ariaLabel="Seleccione el País"
                handleChange={handleChange("nine")}
                id="country-input"
                label="País"
                variant="outlined"
              />
            )}
          />
        </div>
      </div>
      <div className={classes.container} />
    </div>
  )
}

export default TextfieldSection
