import React from "react"

import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import InfoIcon from "@material-ui/icons/Info"
import CheckIcon from "@material-ui/icons/Check"
import PhoneIcon from "@material-ui/icons/Phone"
import Autocomplete from "@material-ui/lab/Autocomplete"

import InputCo from "./inputCo"

export default {
  title: "Components|Input",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        Custom Textfild 
      `,
    },
  },
}

export const Basic = () => (
  <InputCo
    id="first-input"
    placeholder="Texto de Ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="Label"
    value=""
  />
)

export const HelperText = () => (
  <InputCo
    id="second-input"
    placeholder="Texto de ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="Label"
    helperText="Este texto de ayuda es para ayudar"
  />
)

export const LeftIcon = () => (
  <InputCo
    id="third-input"
    placeholder="Texto de Ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="Label"
    InputProps={{
      startAdornment: (
        <InputAdornment disablePointerEvents position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
)

export const RightIcon = () => (
  <InputCo
    id="fourth-input"
    placeholder="Texto de ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="Label"
    InputProps={{
      endAdornment: (
        <InputAdornment disablePointerEvents position="end">
          <InfoOutlinedIcon />
        </InputAdornment>
      ),
    }}
  />
)

export const TwoIcons = () => (
  <InputCo
    id="fourth-input"
    placeholder="Texto de ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="Label"
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
)

export const WithoutLabel = () => (
  <InputCo
    id="third-input"
    ariaLabel="Texto de Ejemplo"
    placeholder="Texto de Ejemplo"
  />
)

export const Disabled = () => (
  <InputCo
    id="third-input"
    placeholder="Texto de Ejemplo"
    ariaLabel="Texto de Ejemplo"
    label="País"
    disabled
  />
)

export const ReadOnly = () => (
  <InputCo
    id="fourth-input"
    placeholder="Ingrese el Pais"
    ariaLabel="Texto de Ejemplo"
    label="País"
    defaultValue="Colombia"
    disabled
  />
)

export const PassedValidation = () => (
  <InputCo
    id="second-input"
    placeholder="Ingrese el País"
    ariaLabel="Texto de Ejemplo"
    label="País"
    defaultValue="Colombia"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <CheckIcon style={{ color: "green", fontSize: "18px" }} />
        </InputAdornment>
      ),
    }}
  />
)

export const FailedValidation = () => (
  <InputCo
    id="second-input"
    placeholder="Ingrese el País"
    ariaLabel="Texto de Ejemplo"
    label="País"
    defaultValue="Gringolandia"
    hasErrors
    helperText={true && "País Invalido"}
    component={
      <InfoIcon style={{ width: 12, marginRight: 5, height: "auto" }} />
    }
  />
)

export const WithAutocomplete = () => {
  const countries = [
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "US", label: "Estados Unidos", phone: "1" },
    { code: "PA", label: "Panamá", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
  ]
  return (
    <Autocomplete
      id="combo-box-demo"
      options={countries}
      getOptionLabel={(c) => c.label}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <InputCo
          {...params}
          placeholder="Ingrese el País"
          ariaLabel="Texto de Ejemplo"
          id="country-input"
          label="País"
          variant="outlined"
        />
      )}
    />
  )
}
