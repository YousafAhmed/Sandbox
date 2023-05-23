import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../containers/UserTable/userRedux/userslice";
import shopReducer from "../../containers/Shop/shopRedux/productSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../RootSaga/rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
    product: shopReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
