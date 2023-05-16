import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userslice";
import userSaga from "./saga";
import createSagaMiddleware from "redux-saga"

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [saga],
});
saga.run(userSaga)

export default store;
