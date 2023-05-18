import { call, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess } from "./userslice";

function* workGetUserFetch():any {
  const users = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
  );
  const formattedUsers = yield users.json();
  yield put(getUserSuccess(formattedUsers));
}

function* userSaga() {
  yield takeEvery("userList/getUsersFetch", workGetUserFetch);
}
export default userSaga;
