import React from "react"
import Container from "@material-ui/core/Container"

import SelectSection from "./section/SelectSection"
import Form from "./components/TextField/Form"
import TypographyCo from "./components/typographyCo"

import ButtonSection from "./section/ButtonSection"

function App() {
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
          <SelectSection />
        </header>
      </Container>
    </div>
  )
}

export default App
