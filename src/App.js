import React from "react"
import Container from "@material-ui/core/Container"

import InputCo from "./components/inputCo"
import SelectCo from "./components/selectCo"
import TypographyCo from "./components/typographyCo"

import ButtonSection from "./section/ButtonSection"
import SliderSection from "./section/SliderSection"

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
          <InputCo />
          <h2>Button </h2>
          <ButtonSection />
          <h2> Select </h2>
          <SelectCo />
          <h2> Slider </h2>
          <SliderSection />
        </header>
      </Container>
    </div>
  )
}

export default App
