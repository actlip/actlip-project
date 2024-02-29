import {
  legacy_createStore as createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import { createStoreHook, Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
