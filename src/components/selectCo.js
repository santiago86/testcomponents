import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import {
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Typography,
  CssBaseline,
  Box,
  Divider,
} from "@material-ui/core"
import LanguageIcon from "@material-ui/icons/Language"
import Suisse from "../assets/fonts/SuisseIntl"
import states from "../assets/states"

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 60,
      color: "#0060A9",
      fontWeight: "bold",
    },
    h2: {
      color: "#232323",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: "3.0rem",
      marginBottom: "3.0rem",
    },
    h3: {
      color: "#666",
      fontSize: 12,
      fontHeight: "1.0rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      marginBottom: "2.0rem",
    },
    body1: {
      color: "#333",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Suisse],
      },
    },
    MuiInputLabel: {
      root: {
        marginBottom: "1.0rem",
      },
    },
    MuiDivider: {
      root: {
        margin: "0 1.0rem",
      },
    },
    MuiMenuItem: {
      root: {
        "&$selected": {
          backgroundColor: "#E0EBF2",
        },
        "&:hover": {
          backgroundColor: "#E0EBF2",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#0060A9",
        },
        "&$focused $notchedOutline": {
          borderColor: "#0060A9",
          borderWidth: 1,
        },
        "&$disabled": {
          color: "#999999",
          backgroundColor: "#EFEFEE",
        },
      },
    },
  },
  props: {
    MuiSelect: {
      fullWidth: true,
      variant: "outlined",
      displayEmpty: true,
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: "13.75rem",
          },
        },
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      },
    },
  },
})

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
    <ThemeProvider theme={theme}>
      <Box m={8}>
        <CssBaseline />
        <Typography variant="h1" style={{ fontFamily: "Suisse Int'l Regular" }}>
          Campos de selección
        </Typography>
        <Typography variant="h2">Variaciones de Contenido</Typography>
        <Grid container spacing={8}>
          {/* Caja de selección básica */}
          <Grid item xs={3}>
            <Typography variant="h3">Caja de selección básica</Typography>
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
            <Typography variant="h3">Selección con Icono</Typography>
            <InputLabel id="select2-label">Label</InputLabel>
            <Select
              labelId="select2-label"
              value={state.valueEmpty}
              inputProps={{ readOnly: true }}
              startAdornment={
                <LanguageIcon
                  style={{ marginRight: theme.spacing(2), color: "#666666" }}
                />
              }
            >
              {Placeholder}
            </Select>
          </Grid>

          {/* Sin Label */}
          <Grid item xs={3}>
            <Typography variant="h3">Sin Label</Typography>
            <Select
              value={state.valueEmpty}
              style={{ marginTop: theme.spacing(3.9) }}
              inputProps={{ readOnly: true }}
            >
              {Placeholder}
            </Select>
          </Grid>
          <Grid item xs={3} />

          {/* Lista de opciones corta */}
          <Grid item xs={3}>
            <Typography variant="h3">Lista de opción corta</Typography>
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
            <Typography variant="h3">Lista de opción larga</Typography>
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

        <Typography variant="h2">Estados</Typography>
        <Grid container spacing={8}>
          {/* Por defecto */}
          <Grid item xs={3}>
            <Typography variant="h3">Por defecto</Typography>
            <InputLabel id="select6-label">Label</InputLabel>
            <Select labelId="select6-label" value={state.valueEmpty}>
              {Placeholder}
            </Select>
          </Grid>

          {/* Activo */}
          <Grid item xs={3}>
            <Typography variant="h3">Activo</Typography>
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
            <Typography variant="h3">Con Selección</Typography>
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
            <Typography variant="h3">Inhabilitado</Typography>
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
    </ThemeProvider>
  )
}

export default SelectCo
