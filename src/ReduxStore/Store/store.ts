import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../containers/UserTable/userslice";
import shopReducer from "../../containers/Shop/shopSlice";
import cartReducer from "../../containers/Cart/cartslice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../RootSaga/rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
    product: shopReducer,
    cart: cartReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
