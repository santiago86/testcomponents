import React from "react"
import { useSelector } from "react-redux"
import { Switch } from "react-router-dom"
import PropTypes from "prop-types"
import { IntlProvider } from "react-intl"

import localeData from "./translations"

import { Main as MainLayout } from "./components/layouts"
import UserRoute from "./components/routes/UserRoute"
import ResultPage from "./components/pages/resultPage/resultPage"

function App({ location }) {
  const lang = useSelector((state) => state.general.lang)

  const messages = localeData[lang] || localeData.en

  return (
    <IntlProvider locale={lang} messages={messages}>
      <IntlProvider locale={lang} messages={messages}>
        <Switch>
          <UserRoute
            location={location}
            path="/"
            exact
            layout={MainLayout}
            component={ResultPage}
          />
        </Switch>
      </IntlProvider>
    </IntlProvider>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default App
