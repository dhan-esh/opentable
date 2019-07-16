import { all, fork } from "redux-saga/effects";

// Root
import { MainSaga } from "../home/Saga";

export default function* rootSaga() {
  yield all([
    // Root
    fork(MainSaga),
  ]);
}
