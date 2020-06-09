import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"
import StepperSection from "./section/StepperSection"
import ButtonSection from "./section/ButtonSection"
import CheckboxSection from "./section/CheckboxSection"

import SliderSection from "./section/SliderSection"
import AlertFull from "./components/AlertFullCo"
import AccordionSection from "./section/AccordionSection"
import PillSection from "./section/PillSection"

const text = "Cras mattis consectetur purus sit amet fermentum."

function App() {
  const [check, setCheck] = useState(false)
  return (
    <div className="App">
      <Container max-width="lg">
        <AlertFull
          type="info"
          visible={check}
          message={text}
          onClose={() => setCheck(!check)}
        />
        <header className="App-header">
          <Switch checked={check} onChange={() => setCheck(!check)} />
          <h2>Button </h2>
          <ButtonSection />
          <h2>Checkbox </h2>
          <CheckboxSection />
          <h2> Stepper </h2>
          <StepperSection />
          <h2> Slider </h2>
          <SliderSection />
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
