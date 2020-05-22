import React from "react"
import Button from "@material-ui/core/Button"
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
        <Button variant="contained" color="primary">
          primary
        </Button>{" "}
        <Button variant="contained" color="secondary">
          secondary
        </Button>{" "}
        <Button variant="contained" color="secondary" disabled>
          secondary
        </Button>{" "}
        <Button variant="contained">defaul</Button> <br />
        <Button variant="outlined" color="secondary">
          Hello
        </Button>
        <Button variant="outlined" color="primary">
          Hello
        </Button>{" "}
        <Button color="secondary" variant="outlined" disabled>
          Hello
        </Button>{" "}
        <br />
        <Button>defaul</Button>
        <Button color="secondary">Hello</Button>
        <Button color="primary">Hello</Button>{" "}
        <Button color="secondary" disabled>
          Hello
        </Button>
      </header>
    </div>
  )
}

export default App
