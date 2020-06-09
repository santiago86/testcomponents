import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LanguageIcon from "@material-ui/icons/Language"
import TypographyCo from "../components/UI/typography/typographyCo"
import states from "../assets/states"
import theme from "../theme"
import SelectCoC from "../components/custom/selectCoC"
import OptionCoC from "../components/custom/optionCoC"

const selectSubtitle = {
  textTransform: "uppercase",
  marginBottom: theme.spacing(2),
}

const MappedStatesOption = () => {
  return states.map((state) => (
    <OptionCoC key={state} value={state}>
      {state}
    </OptionCoC>
  ))
}

function SelectSection() {
  const [state, setState] = React.useState({
    valueEmpty: "",
    value2: "",
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
    <Box m={2}>
      <TypographyCo mt={3} variant="h1" component="h1" color="primary">
        Campos de selección (Custom)
      </TypographyCo>
      <Box my={4}>
        <TypographyCo variant="h3">Variaciones de Contenido</TypographyCo>
      </Box>
      <Grid container spacing={8}>
        {/* Caja de selección básica */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Caja de selección básica
          </TypographyCo>
          <SelectCoC
            label="Label"
            value={state.valueEmpty}
            placeholder="Selecciona..."
          />
        </Grid>

        {/* Selección con Icono */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Selección con Icono
          </TypographyCo>
          <SelectCoC
            label="Label"
            value={state.value2}
            placeholder="Selecciona..."
            onSelect={(e) => handleChange(e, "value2")}
            icon={<LanguageIcon />}
          >
            {MappedStatesOption()}
          </SelectCoC>
        </Grid>

        {/* Sin Label */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Sin Label
          </TypographyCo>
          <Box mt={5.6}>
            <SelectCoC value={state.valueEmpty} placeholder="Selecciona..." />
          </Box>
        </Grid>
        <Grid item xs={3} />

        {/* Lista de opciones corta */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Lista de opción corta
          </TypographyCo>
          <SelectCoC
            label="Pasaporte a utilizar"
            placeholder="Selecciona..."
            value={state.value4}
            onSelect={(e) => handleChange(e, "value4")}
          >
            <OptionCoC value="A">VEN - 0212877948</OptionCoC>
            <OptionCoC value="B">PAN - PA08994100</OptionCoC>
            <OptionCoC value="C">COL - 3592790723</OptionCoC>
          </SelectCoC>
        </Grid>

        {/* Lista de opciones larga */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Lista de opción larga
          </TypographyCo>
          <SelectCoC
            label="Provincia/Estado"
            placeholder="Selecciona..."
            value={state.value5}
            onSelect={(e) => handleChange(e, "value5")}
          >
            {MappedStatesOption()}
          </SelectCoC>
        </Grid>
      </Grid>

      <Box my={4}>
        <TypographyCo variant="h3">Estados</TypographyCo>
      </Box>
      <Grid container spacing={8}>
        {/* Con error */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Con error
          </TypographyCo>
          <SelectCoC
            label="Label"
            error
            placeholder="Selecciona..."
            value={state.valueEmpty}
          />
        </Grid>

        {/* Activo */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Activo
          </TypographyCo>
          <SelectCoC
            label="Pasaporte a utilizar"
            value={state.value7}
            placeholder="Selecciona..."
            onSelect={(e) => handleChange(e, "value7")}
          >
            <OptionCoC value="A">VEN - 0212877948</OptionCoC>
            <OptionCoC value="B">PAN - PA08994100</OptionCoC>
            <OptionCoC value="C">COL - 3592790723</OptionCoC>
          </SelectCoC>
        </Grid>

        {/* Con Selección */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Con Selección
          </TypographyCo>
          <SelectCoC
            label="Provincia/Estado"
            value={state.value8}
            placeholder="Selecciona..."
            onSelect={(e) => handleChange(e, "value8")}
          >
            {MappedStatesOption()}
          </SelectCoC>
        </Grid>

        {/* Inhabilitado */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Inhabilitado
          </TypographyCo>
          <SelectCoC
            label="Pasaporte a utilizar"
            placeholder="Selecciona..."
            value={state.valueEmpty}
            disabled
          >
            <OptionCoC value="A">VEN - 0212877948</OptionCoC>
            <OptionCoC value="B">PAN - PA08994100</OptionCoC>
            <OptionCoC value="C">COL - 3592790723</OptionCoC>
          </SelectCoC>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SelectSection
