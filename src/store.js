/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
