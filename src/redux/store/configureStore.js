import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../Reducer/index";
// import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
    //   composeEnhancers(applyMiddleware(thunk))
  );
};
