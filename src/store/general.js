import { createSlice } from "@reduxjs/toolkit"

// Slice
const generalSlice = createSlice({
  name: "general",
  initialState: {
    lang: "en",
  },
  reducers: {
    fetchLang: (state, action) => {
      return {
        lang: action.payload,
      }
    },
  },
})

export default generalSlice.reducer

// Actions
export const { fetchLang } = generalSlice.actions
