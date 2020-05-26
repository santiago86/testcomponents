import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Form from './components/TextField/Form'
import ButtonCo from './components/buttonCo'
import SelectCo from './components/selectCo'

function App() {
  return (
    <div className="App">
      <Container max-width="lg">
        <header className="App-header">
          <Typography component="span" variant="overline">
            Vuelo de ida
          </Typography>
          <Typography variant="h1" component="h1" color="primary">
            Hacia Buenos Aires
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Hacia Buenos Aires
          </Typography>
          <h2>Input</h2>
          <Form />
          <h2>Button </h2>
          <ButtonCo />
          <h2> Select </h2>
          <SelectCo />
          <br />
          <Button variant="contained" size="small" color="primary">
            Primary Small
          </Button>{' '}
          <Button variant="contained" color="secondary">
            Secondary Medium
          </Button>{' '}
          <Button variant="contained" size="large" color="secondary">
            Secondary Large
          </Button>{' '}
          <Button variant="contained" size="large" color="secondary" disabled>
            Disabled Large
          </Button>{' '}
          <Button variant="contained">Default</Button> <br />
          <Button variant="outlined" color="primary">
            Outlined Primary
          </Button>{' '}
          <Button color="secondary" variant="outlined">
            Outlined Secondary
          </Button>{' '}
          <Button variant="outlined" color="primary" disabled>
            Outlined Primary
          </Button>{' '}
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="primary.main"
            p={3}
            my={3}
          >
            <Button variant="outlined" size="medium">
              Outlined Invert
            </Button>
            <Button variant="outlined" disabled>
              Outlined Invert Disabled
            </Button>{' '}
          </Box>
          <br />
          <Button>defaul</Button>
          <Button color="secondary">Hello</Button>
          <Button color="primary">Hello</Button>{' '}
          <Button color="secondary" disabled>
            Hello
          </Button>
        </header>
      </Container>
    </div>
  )
}

export default App
