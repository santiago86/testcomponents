import React from "react"
import Button from "@material-ui/core/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> h1 </h1>
        <h2> h2 </h2>
        <h2> h3 </h2>
        <h2> h4 </h2>
        <h2> h5 </h2>
        <h2> h6 </h2>
        <Button variant="contained" color="primary">
          primary
        </Button>{" "}
        <Button variant="contained" color="secondary">
          secondary
        </Button>{" "}
        <Button variant="contained" color="secondary" disabled>
          secondary
        </Button>{" "}
        <Button variant="contained">defaul</Button> <br />
        <Button variant="outlined" color="secondary">
          Hello
        </Button>
        <Button variant="outlined" color="primary">
          Hello
        </Button>{" "}
        <Button color="secondary" variant="outlined" disabled>
          Hello
        </Button>{" "}
        <br />
        <Button>defaul</Button>
        <Button color="secondary">Hello</Button>
        <Button color="primary">Hello</Button>{" "}
        <Button color="secondary" disabled>
          Hello
        </Button>{" "}
      </header>
    </div>
  )
}

export default App
