import { fork, all } from "redux-saga/effects";
import userSaga from "../../containers/UserTable/userSaga";
import productSaga from "../../containers/Shop/shopSaga";

function* rootSaga() {
  yield all([fork(productSaga), fork(userSaga)]);
}

export default rootSaga;
