import React from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"

import Form from "./components/TextField/Form"
import SelectSection from "./section/SelectSection"
import SelectCSection from "./section/SelectCSection"
import TypographyCo from "./components/typographyCo"

import ButtonSection from "./section/ButtonSection"

function App() {
  const [check, setCheck] = React.useState(true)
  return (
    <div className="App">
      <Container max-width="lg">
        <header className="App-header">
          <TypographyCo component="span" variant="overline">
            Vuelo de ida
          </TypographyCo>
          <TypographyCo variant="h1" component="h1" color="primary">
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo variant="body2" component="span" color="primary">
            Hacia Buenos Aires
          </TypographyCo>
          <h2>Input</h2>
          <Form />
          <h2>Button </h2>
          <ButtonSection />
          <h2> Select </h2>
          <Switch checked={check} onChange={() => setCheck(!check)} />
          {!check && <SelectSection />}
          {check && <SelectCSection />}
        </header>
      </Container>
    </div>
  )
}

export default App
