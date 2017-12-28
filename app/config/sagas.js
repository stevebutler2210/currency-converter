import { takeEvery } from "redux-saga/effects";

import {
  CHANGE_BASE_CURRENCY,
  SWAP_CURRENCY,
  GET_INITIAL_CONVERSION
} from "../actions/currencies";

function* fetchLatestConversionRates(action) {
  console.log("Get rates", action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
