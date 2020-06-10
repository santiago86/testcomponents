import { some } from "lodash"
import "moment/locale/es"
import "moment/locale/pt"

import { setLocale } from "../actions/locale"

const configLanguage = (store) => {
  const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    "en"

  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

  const exitLanguage = some(
    ["en", "es", "pt"],
    (item) => item === languageWithoutRegionCode
  )
  const resultLanguage = exitLanguage ? languageWithoutRegionCode : "en"

  if (localStorage.alhubLang) {
    setLocale(localStorage.alhubLang, store)
  } else {
    localStorage.alhubLang = resultLanguage
    setLocale(resultLanguage, store)
  }
}

export default configLanguage
