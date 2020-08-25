import { all } from "redux-saga/effects";
import profileSaga from "store/profile/saga";

export default function* rootSaga() {
  yield all([profileSaga()]);
}
