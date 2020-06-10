import { createSlice } from "@reduxjs/toolkit"

// Slice
const flightSlice = createSlice({
  name: "flight",
  initialState: {
    list: [],
  },
  reducers: {
    fetchFlightList: (state, action) => {
      return {
        list: action.payload,
      }
    },
  },
})

export default flightSlice.reducer

// Actions
export const { fetchFlightList } = flightSlice.actions

// export const login = ({ username, password }) => async (dispatch) => {
//   try {
//     // await api.post('/api/auth/login/', { username, password })
//     dispatch(loginSuccess({ username }))
//   } catch (e) {
//     return console.error(e.message)
//   }
// }

// export const logout = () => async (dispatch) => {
//   try {
//     // await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess())
//   } catch (e) {
//     return console.error(e.message)
//   }
// }
