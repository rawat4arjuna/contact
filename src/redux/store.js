import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-sessionstorage";
import { createLogger } from "redux-logger";
import reducer from "./reducers/reducers";
// let devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production") {
//   devTools = a => a;
// }

const loggerMiddleware = createLogger();

export const Store = createStore(
  reducer,
  compose(persistState(), applyMiddleware(thunk, loggerMiddleware))
);
