import { call, put, takeLatest } from 'redux-saga/effects';
import { generateNewNumber } from "../api";
import { numberRequestCompletedAction } from "../actions";
import { actionIds } from "../common";


export function* watchNewGeneratedNumberRequestStart() {
  yield takeLatest(
    actionIds.GET_NUMBER_REQUEST_START,
    requestNewGeneratedNumber
  );
}

function* requestNewGeneratedNumber() {
  const generatedNumber = yield call(generateNewNumber);
  yield put(numberRequestCompletedAction(generatedNumber));
}
