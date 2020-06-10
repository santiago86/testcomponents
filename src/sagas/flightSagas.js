import { call, put } from "redux-saga/effects"
import { fetchFlightList } from "../store/flight"

import Api from "../api"
export function* fetchFlightSaga() {
  try {

    // const dataLogin = yield call(Api.user.todo, {})

    yield put(fetchFlightList([{id:'uno',title:'uno'},{id:'dos',title:'dos'}]))
  } catch (e) {
    yield put({ type: "FLIGHT_FETCH_FAILED" })
  }
}

