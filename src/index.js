import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Provider } from "react-redux"

import App from "./App"
import * as serviceWorker from "./serviceWorker"
import theme from "./theme"

import store from "./store"
import history from "./utils/history"

// utils
import setBaseUrl from "./utils/setBaseUrl"

if (process.env.REACT_APP_API_URL) {
  setBaseUrl(process.env.REACT_APP_API_URL)
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route component={App} />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
