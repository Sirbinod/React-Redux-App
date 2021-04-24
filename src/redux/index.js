import {applyMiddleware, createStore, compose} from "redux";
import reducer from "./Reducer/reducer";
// import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers()
  //   composeEnhancers(applyMiddleware(thunk))
);
export default store;
