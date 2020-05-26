import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LanguageIcon from "@material-ui/icons/Language"
import TypographyCo from "../components/typographyCo"
import MenuItemCo from "../components/secondaryComponents/menuItemCo"
import SelectDividerCo from "../components/secondaryComponents/selectDividerCo"
import SelectCo from "../components/selectCo"
import states from "../assets/states"

const selectSubtitle = {
  textTransform: "uppercase",
  marginBottom: "1.0rem",
}
const MappedStates = () => {
  return states.map((state) => [
    <MenuItemCo key={state} value={state}>
      {state}
    </MenuItemCo>,
    <SelectDividerCo />,
  ])
}

const Placeholder = (
  <MenuItemCo value="" disabled>
    Selecciona...
  </MenuItemCo>
)

function SelectSection() {
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
      <TypographyCo mt={3} variant="h1" component="h1" color="primary">
        Campos de selección
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
          <SelectCo
            toplabel="Label"
            value={state.valueEmpty}
            displayEmpty
            inputProps={{ readOnly: true }}
          >
            {Placeholder}
          </SelectCo>
        </Grid>

        {/* Selección con Icono */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Selección con Icono
          </TypographyCo>
          <SelectCo
            toplabel="Label"
            value={state.valueEmpty}
            inputProps={{ readOnly: true }}
            startAdornment={
              <LanguageIcon
                style={{ marginRight: "1.0rem", color: "#666666" }}
              />
            }
          >
            {Placeholder}
          </SelectCo>
        </Grid>

        {/* Sin Label */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Sin Label
          </TypographyCo>
          <Box mt={5.8}>
            <SelectCo value={state.valueEmpty} inputProps={{ readOnly: true }}>
              {Placeholder}
            </SelectCo>
          </Box>
        </Grid>
        <Grid item xs={3} />

        {/* Lista de opciones corta */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Lista de opción corta
          </TypographyCo>
          <SelectCo
            toplabel="Pasaporte a utilizar"
            value={state.value4}
            onChange={(e) => handleChange(e, "value4")}
          >
            {Placeholder}
            <MenuItemCo value="A">VEN - 0212877948</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="B">PAN - PA08994100</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="C">COL - 3592790723</MenuItemCo>
          </SelectCo>
        </Grid>

        {/* Lista de opciones larga */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Lista de opción larga
          </TypographyCo>
          <SelectCo
            toplabel="Provincia/Estado"
            value={state.value5}
            onChange={(e) => handleChange(e, "value5")}
          >
            {Placeholder}
            {MappedStates()}
          </SelectCo>
        </Grid>
      </Grid>

      <Box my={4}>
        <TypographyCo variant="h3">Estados</TypographyCo>
      </Box>
      <Grid container spacing={8}>
        {/* Por defecto */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Por defecto
          </TypographyCo>
          <SelectCo toplabel="Label" value={state.valueEmpty}>
            {Placeholder}
          </SelectCo>
        </Grid>

        {/* Activo */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Activo
          </TypographyCo>
          <SelectCo
            toplabel="Pasaporte a utilizar"
            value={state.value7}
            onChange={(e) => handleChange(e, "value7")}
          >
            {Placeholder}
            <MenuItemCo value="A">VEN - 0212877948</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="B">PAN - PA08994100</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="C">COL - 3592790723</MenuItemCo>
          </SelectCo>
        </Grid>

        {/* Con Selección */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Con Selección
          </TypographyCo>
          <SelectCo
            toplabel="Provincia/Estado"
            value={state.value8}
            onChange={(e) => handleChange(e, "value8")}
          >
            {Placeholder}
            {MappedStates()}
          </SelectCo>
        </Grid>

        {/* Inhabilitado */}
        <Grid item xs={3}>
          <TypographyCo variant="h4" style={selectSubtitle}>
            Inhabilitado
          </TypographyCo>
          <SelectCo
            toplabel="Pasaporte a utilizar"
            labelId="select9-label"
            value={state.valueEmpty}
            disabled
          >
            {Placeholder}
            <MenuItemCo value="A">VEN - 0212877948</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="B">PAN - PA08994100</MenuItemCo>
            <SelectDividerCo />
            <MenuItemCo value="C">COL - 3592790723</MenuItemCo>
          </SelectCo>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SelectSection
