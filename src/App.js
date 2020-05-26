import React from "react"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"

import InputCo from "./components/inputCo"
import ButtonCo from "./components/buttonCo"
import SelectCo from "./components/selectCo"
import TypographyCo from "./components/typographyCo"

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
          <h2> Select </h2>
          <SelectCo />
          <br />
          <ButtonCo variant="contained" size="small" color="primary">
            Primary Small
          </ButtonCo>{" "}
          <ButtonCo variant="contained" color="secondary">
            Secondary Medium
          </ButtonCo>{" "}
          <ButtonCo variant="contained" size="large" color="secondary">
            Secondary Large
          </ButtonCo>{" "}
          <ButtonCo variant="contained" size="large" color="secondary" disabled>
            Disabled Large
          </ButtonCo>{" "}
          <ButtonCo variant="contained">Default</ButtonCo> <br />
          <ButtonCo variant="outlined" color="primary">
            Outlined Primary
          </ButtonCo>{" "}
          <ButtonCo color="secondary" variant="outlined">
            Outlined Secondary
          </ButtonCo>{" "}
          <ButtonCo variant="outlined" color="primary" disabled>
            Outlined Primary
          </ButtonCo>{" "}
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="primary.main"
            p={3}
            my={3}
          >
            <ButtonCo variant="outlined" size="medium">
              Outlined Invert
            </ButtonCo>
            <ButtonCo variant="outlined" disabled>
              Outlined Invert Disabled
            </ButtonCo>{" "}
          </Box>
          <br />
          <ButtonCo>defaul</ButtonCo>
          <ButtonCo color="secondary">Hello</ButtonCo>
          <ButtonCo color="primary">Hello</ButtonCo>{" "}
          <ButtonCo color="secondary" disabled>
            Hello
          </ButtonCo>
        </header>
      </Container>
    </div>
  )
}

export default App
