import React from "react"
import InputCo from "./components/inputCo"
import ButtonCo from "./components/buttonCo"
import SelectCo from "./components/selectCo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Input </h1>
        <InputCo />
        <h2>Button </h2>
        <ButtonCo />
        <h2> Select </h2>
        <SelectCo />
        <br />
      </header>
    </div>
  )
}

export default App
