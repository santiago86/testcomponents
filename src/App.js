import React from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"

import Form from "./components/TextField/Form"
import SelectSection from "./section/SelectSection"
import SelectCSection from "./section/SelectCSection"
import TypographyCo from "./components/typographyCo"
import SelectCo from "./components/selectCo"

import StepperSection from "./section/StepperSection"
import TypographySection from "./section/TypographySection"
import ButtonSection from "./section/ButtonSection"
import CheckboxSection from "./section/CheckboxSection"
import SwichtSection from "./section/SwichtSection"
import BreakpointsCo from "./components/breakpointsCo"

import PassengerForm from "./section/PassengerForm"
import SliderSection from "./section/SliderSection"

function App() {
  const [check, setCheck] = React.useState(false)
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
          <h2>Breakpoints</h2>
          <BreakpointsCo />
          <h2>Input</h2>
          <Form />
          <h2>Button </h2>
          <ButtonSection />
          <h2>Checkbox </h2>
          <CheckboxSection />
          <h2> Select </h2>
          <SelectSection />
          <h2> Select </h2>
          <SelectCo />
          <h2> Swicht Component </h2>
          <SwichtSection />
          <h2> Stepper </h2>
          <StepperSection />
          <h2> Switch </h2>
          <Switch checked={check} onChange={() => setCheck(!check)} />
          {!check && <SelectSection />}
          {check && <SelectCSection />}
          <h2> Typography </h2>
          <TypographySection />
          <h2> Slider </h2>
          <SliderSection />
        </header>

        <h2> Page PassengerForm</h2>
        <PassengerForm />
      </Container>
    </div>
  )
}

export default App
