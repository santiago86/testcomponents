import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from "./components/navigation"
import * as serviceWorker from "./serviceWorker"
import theme from "./theme"

import { ROUTES_CONFIG } from "./constants/routes"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Switch>
          {ROUTES_CONFIG.map((props, index) => (
            <Route key={props.path || index} {...props} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
