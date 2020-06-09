import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"
import StepperSection from "./section/StepperSection"
import ButtonSection from "./section/ButtonSection"
import CheckboxSection from "./section/CheckboxSection"
import AccordionSection from "./section/AccordionSection"
import PillSection from "./section/PillSection"

function App() {
  const [check, setCheck] = useState(false)
  return (
    <div className="App">
      <Container max-width="lg">
        <header className="App-header">
          <Switch checked={check} onChange={() => setCheck(!check)} />
          <h2>Button </h2>
          <ButtonSection />
          <h2>Checkbox </h2>
          <CheckboxSection />
          <h2> Stepper </h2>
          <StepperSection />
          <h2> Accordion </h2>
          <AccordionSection />
          <h2> Alert Message </h2>
          <PillSection />
        </header>
      </Container>
    </div>
  )
}

export default App
