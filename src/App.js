import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Switch from "@material-ui/core/Switch"

import SelectSection from "./section/SelectSection"
import SelectCSection from "./section/SelectCSection"
import TypographyCo from "./components/typographyCo"

import StepperSection from "./section/StepperSection"
import ButtonSection from "./section/ButtonSection"
import CheckboxSection from "./section/CheckboxSection"

import SliderSection from "./section/SliderSection"
import AlertFull from "./components/AlertFullCo"
import AlertSection from "./section/AlertSection"
import ModalSection from "./section/ModalSection"
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
          <TypographyCo component="span" variant="overline">
            Vuelo de ida
          </TypographyCo>
          <TypographyCo variant="h1" component="h1" color="primary">
            Hacia Buenos Aires
          </TypographyCo>
          <TypographyCo variant="body2" component="span" color="primary">
            Hacia Buenos Aires
          </TypographyCo>
          <Switch checked={check} onChange={() => setCheck(!check)} />
          <h2>Button </h2>
          <ButtonSection />
          <h2>Checkbox </h2>
          <CheckboxSection />
          <h2> Select </h2>
          <SelectSection />
          <h2> Stepper </h2>
          <StepperSection />
          <h2> Select </h2>
          <Switch checked={check} onChange={() => setCheck(!check)} />
          {!check && <SelectSection />}
          {check && <SelectCSection />}
          <h2> Slider </h2>
          <SliderSection />
          <h2> Modal </h2>
          <ModalSection />
          <h2> Accordion </h2>
          <AccordionSection />
          <h2> Alert Message </h2>
          <AlertSection />
          <h2> Attribute Pill </h2>
          <PillSection />
        </header>
      </Container>
    </div>
  )
}

export default App
