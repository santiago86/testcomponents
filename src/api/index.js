import axios from "axios"

export default {
  user: {
    todo: () => axios.post("/triphub/add-ssr", {}).then(({ data }) => data),
  },
}
