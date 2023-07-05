import { call, put, takeEvery } from "redux-saga/effects";
import { getApiFetch } from "./previewSlice";
import { getApiSuccess } from "./previewSlice";

function* workGetPreviewApiFetch(): any {
  console.log("apiget")

  const product = yield call(() => fetch("https://fakestoreapi.com/products"));
  const formattedProduct = yield product.json();
  yield put(getApiSuccess(formattedProduct));
  
}

function* previewSaga() {
  yield takeEvery("preview/getApiFetch", workGetPreviewApiFetch);
  console.log("apiget")
}
export default previewSaga;
