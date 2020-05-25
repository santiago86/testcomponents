import React, { useState } from "react"
import Add from "@material-ui/icons/Add"
import Left from "@material-ui/icons/ChevronLeft"
import Right from "@material-ui/icons/ChevronRight"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
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
    id: 1,
    color: "primary",
    variant: "contained",
    end: Right,
  },
  {
    id: 1,
    color: "primary",
    variant: "contained",
    start: Left,
    end: Right,
  },
  {
    id: 1,
    color: "primary",
    variant: "contained",
    loading: true,
  },
  { id: 1, color: "primary", variant: "contained" },
  { id: 1, color: "secondary", variant: "contained" },
  { id: 1, color: "primary", variant: "outlined" },
  { id: 1, color: "secondary", variant: "outlined" },
  { id: 1, color: "grey", variant: "outlined" },
  { id: 1, color: "inverted", variant: "outlined", background: true },
  { id: 1, color: "primary", variant: "shadow", background: true },
  { id: 1, color: "confirm", variant: "contained" },
]

const BUTTON_SIZES = ["small", "medium", "large"]

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonSize, setButtonSize] = useState("medium")
  return (
    <div className="App">
      <header className="App-header">
        <h1> Input </h1>
        <InputCo />
        <h2>Buttons</h2>
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

        {BUTTONS.map(({ id, background, ...button }) => (
          <div
            key={id}
            style={{
              background: background
                ? "linear-gradient(45deg, #0D3050 30%, #0E4A81 90%)"
                : null,
            }}
          >
            <ButtonCo // eslint-disable-next-line react/jsx-props-no-spreading
              {...button}
              size={buttonSize}
              disabled={buttonDisabled}
            >
              Label
            </ButtonCo>
          </div>
        ))}
        <h2> Select </h2>
        <SelectCo />
        <br />
      </header>
    </div>
  )
}

export default App
