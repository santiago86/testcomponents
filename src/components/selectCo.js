import React from "react"
import {
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Typography,
  Box,
  Divider,
} from "@material-ui/core"
import LanguageIcon from "@material-ui/icons/Language"
import states from "../assets/states"

const selectSubtitle = {
  textTransform: "uppercase",
  marginBottom: "1.0rem",
}
const MappedStates = () => {
  return states.map((state) => [
    <MenuItem key={state} value={state}>
      {state}
    </MenuItem>,
    <Divider />,
  ])
}

const Placeholder = (
  <MenuItem value="" disabled>
    Selecciona...
  </MenuItem>
)

function SelectCo() {
  const [state, setState] = React.useState({
    valueEmpty: "",
    value4: "",
    value5: "",
    value7: "",
    value8: "Oklahoma",
  })
  const handleChange = (event, changed) => {
    const newState = { ...state }
    newState[changed] = event.target.value
    setState(newState)
  }
  return (
    <Box m={8}>
      <Typography mt={3} variant="h1" component="h1" color="primary">
        Campos de selección
      </Typography>
      <Box my={4}>
        <Typography variant="h3">Variaciones de Contenido</Typography>
      </Box>
      <Grid container spacing={8}>
        {/* Caja de selección básica */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Caja de selección básica
          </Typography>
          <InputLabel id="select1-label">Label</InputLabel>
          <Select
            labelId="select1-label"
            value={state.valueEmpty}
            displayEmpty
            inputProps={{ readOnly: true }}
          >
            {Placeholder}
          </Select>
        </Grid>

        {/* Selección con Icono */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Selección con Icono
          </Typography>
          <InputLabel id="select2-label">Label</InputLabel>
          <Select
            labelId="select2-label"
            value={state.valueEmpty}
            inputProps={{ readOnly: true }}
            startAdornment={
              <LanguageIcon
                style={{ marginRight: "1.0rem", color: "#666666" }}
              />
            }
          >
            {Placeholder}
          </Select>
        </Grid>

        {/* Sin Label */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Sin Label
          </Typography>
          <Box mt={5.8}>
            <Select value={state.valueEmpty} inputProps={{ readOnly: true }}>
              {Placeholder}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={3} />

        {/* Lista de opciones corta */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Lista de opción corta
          </Typography>
          <InputLabel id="select4-label">Pasaporte a utilizar</InputLabel>
          <Select
            labelId="select4-label"
            value={state.value4}
            onChange={(e) => handleChange(e, "value4")}
          >
            {Placeholder}
            <MenuItem value="A">VEN - 0212877948</MenuItem>
            <Divider />
            <MenuItem value="B">PAN - PA08994100</MenuItem>
            <Divider />
            <MenuItem value="C">COL - 3592790723</MenuItem>
          </Select>
        </Grid>

        {/* Lista de opciones larga */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Lista de opción larga
          </Typography>
          <InputLabel id="select5-label">Provincia/Estado</InputLabel>
          <Select
            labelId="select5-label"
            value={state.value5}
            onChange={(e) => handleChange(e, "value5")}
          >
            {Placeholder}
            {MappedStates()}
          </Select>
        </Grid>
      </Grid>

      <Box my={4}>
        <Typography variant="h3">Estados</Typography>
      </Box>
      <Grid container spacing={8}>
        {/* Por defecto */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Por defecto
          </Typography>
          <InputLabel id="select6-label">Label</InputLabel>
          <Select labelId="select6-label" value={state.valueEmpty}>
            {Placeholder}
          </Select>
        </Grid>

        {/* Activo */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Activo
          </Typography>
          <InputLabel id="select7-label">Pasaporte a utilizar</InputLabel>
          <Select
            labelId="select7-label"
            value={state.value7}
            onChange={(e) => handleChange(e, "value7")}
          >
            {Placeholder}
            <MenuItem value="A">VEN - 0212877948</MenuItem>
            <Divider />
            <MenuItem value="B">PAN - PA08994100</MenuItem>
            <Divider />
            <MenuItem value="C">COL - 3592790723</MenuItem>
          </Select>
        </Grid>

        {/* Con Selección */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Con Selección
          </Typography>
          <InputLabel id="select8-label">Provincia/Estado</InputLabel>
          <Select
            labelId="select8-label"
            value={state.value8}
            onChange={(e) => handleChange(e, "value8")}
          >
            {Placeholder}
            {MappedStates()}
          </Select>
        </Grid>

        {/* Inhabilitado */}
        <Grid item xs={3}>
          <Typography variant="h4" style={selectSubtitle}>
            Inhabilitado
          </Typography>
          <InputLabel id="select9-label">Pasaporte a utilizar</InputLabel>
          <Select labelId="select9-label" value={state.valueEmpty} disabled>
            {Placeholder}
            <MenuItem value="A">VEN - 0212877948</MenuItem>
            <Divider />
            <MenuItem value="B">PAN - PA08994100</MenuItem>
            <Divider />
            <MenuItem value="C">COL - 3592790723</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SelectCo
