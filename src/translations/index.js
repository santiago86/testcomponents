import en from "./languages/en"
import es from "./languages/es"
import pt from "./languages/pt"
import { flatten } from "../helpers/flatten"

export default {
  en: flatten({ ...en }),
  es: flatten({ ...es }),
  pt: flatten({ ...pt }),
}
