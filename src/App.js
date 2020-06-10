import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"
import StepperSection from "./section/StepperSection"
import ButtonSection from "./section/ButtonSection"
import CheckboxSection from "./section/CheckboxSection"
import SliderSection from "./section/SliderSection"
import RadioButton from "./components/RadioButton/Form"
import PopperSection from "./section/PopperSection"
import AlertFull from "./components/AlertFullCo"
import AlertSection from "./section/AlertSection"
import ModalSection from "./section/ModalSection"
import ButtonLoading from "./section/ButtonLoading"

const text = "Cras mattis consectetur purus sit amet fermentum."
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
          <AlertSection />
          <PopperSection />
          <h2>Loading</h2>
          <ButtonLoading />
          <PillSection />
        </header>
      </Container>
    </div>
  )
}

export default App
