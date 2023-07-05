import { fork, all } from "redux-saga/effects";
import userSaga from "../../containers/UserTable/userSaga";
import productSaga from "../../containers/Shop/shopSaga";
import previewSaga from "../../containers/Homepage/previewSaga";

function* rootSaga() {
  yield all([fork(productSaga), fork(userSaga), fork(previewSaga)]);
}

export default rootSaga;
