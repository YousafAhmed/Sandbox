import { fork, all } from "redux-saga/effects";
import userSaga from "../../containers/UserTable/userRedux/userSaga";
import productSaga from "../../containers/Shop/shopRedux/productsSaga";

function* rootSaga() {
  yield all([fork(productSaga), fork(userSaga)]);
}

export default rootSaga;
