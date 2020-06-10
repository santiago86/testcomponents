import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { combineReducers } from "redux"

import saga from "../sagas"
import flight from "./flight"
import general from "./general"

const reducer = combineReducers({
  flight,
  general,
})

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer,
  middleware,
})

sagaMiddleware.run(saga)

export default store
