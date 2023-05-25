import { call, put, takeEvery } from "redux-saga/effects";
import { getApiSuccess } from "./shopSlice";

function* workGetApiFetch(): any {
  const product = yield call(() => fetch("https://fakestoreapi.com/products"));
  const formattedProduct = yield product.json();
  yield put(getApiSuccess(formattedProduct));
}

function* productSaga() {
  yield takeEvery("itemList/getApiFetch", workGetApiFetch);
}
export default productSaga;
