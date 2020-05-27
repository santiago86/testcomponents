import React from "react"
import Container from "@material-ui/core/Container"

import Form from "./components/TextField/Form"
import SelectCo from "./components/selectCo"
import TypographyCo from "./components/typographyCo"
import ButtonSection from "./section/ButtonSection"
import PassengerForm from "./section/PassengerForm"

function App() {
  return (
    <div className="App">
      <PassengerForm />
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
          <SelectCo />
        </header>
      </Container>
    </div>
  )
}

export default App
