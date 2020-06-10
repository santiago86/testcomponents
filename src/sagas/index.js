import { takeLatest } from "redux-saga/effects"
import { FETCH_DATA_SAGA } from "./sagaActions"
import { fetchFlightSaga } from "./flightSagas"

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA_SAGA, fetchFlightSaga)
}
