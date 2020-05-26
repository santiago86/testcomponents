import React, { useState } from "react"
import Add from "@material-ui/icons/Add"
import Left from "@material-ui/icons/ChevronLeft"
import Right from "@material-ui/icons/ChevronRight"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import InputCo from "./components/inputCo"
import ButtonCo from "./components/buttonCo"
import SelectCo from "./components/selectCo"

const BUTTONS = [
  {
    id: 1,
    color: "primary",
    variant: "contained",
    start: Add,
  },
  {
    id: 2,
    color: "primary",
    variant: "contained",
    end: Right,
  },
  {
    id: 3,
    color: "primary",
    variant: "contained",
    start: Left,
    end: Right,
  },
  {
    id: 4,
    color: "primary",
    variant: "contained",
    loading: true,
  },
  { id: 5, color: "primary", variant: "contained" },
  { id: 6, color: "secondary", variant: "contained" },
  { id: 7, color: "primary", variant: "outlined" },
  { id: 8, color: "secondary", variant: "outlined" },
  { id: 9, color: "grey", variant: "outlined" },
  { id: 10, color: "inverted", variant: "outlined", background: true },
  { id: 11, color: "primary", variant: "shadow", background: true },
  { id: 12, color: "confirm", variant: "contained" },
]

const BUTTON_SIZES = ["small", "medium", "large"]

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonSize, setButtonSize] = useState("medium")
  return (
    <div className="App">
      <Container max-width="lg">
        <header className="App-header">
          <Typography component="span" variant="overline">
            Vuelo de ida
          </Typography>
          <Typography variant="h1" component="h1" color="primary">
            Hacia Buenos Aires
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Hacia Buenos Aires
          </Typography>
          <InputCo />
          <h2>Button </h2>
          <Container
            maxWidth="xs"
            style={{
              background: "linear-gradient(to bottom, #ccc 30%, #9e9e9e 90%)",
              marginLeft: 0,
              borderRadius: 5,
            }}
          >
            <FormControlLabel
              control={
                <Select
                  value={buttonSize}
                  onChange={(event) => setButtonSize(event.target.value)}
                >
                  {BUTTON_SIZES.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              }
              label="Button size"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={buttonDisabled}
                  onChange={() => setButtonDisabled((v) => !v)}
                  color="primary"
                />
              }
              label="Button disabled"
            />
          </Container>
          {BUTTONS.map(({ id, background, ...button }) => (
            <div
              key={id}
              style={{
                background: background
                  ? "linear-gradient(45deg, #0D3050 30%, #0E4A81 90%)"
                  : null,
              }}
            >
              <ButtonCo {...button} size={buttonSize} disabled={buttonDisabled}>
                Label
              </ButtonCo>
            </div>
          ))}
          <h2> Select </h2>
          <SelectCo />
        </header>
      </Container>
    </div>
  )
}

export default App
