import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";

import reducers from "../sagas/reducers/index";
import appSagas from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(ReduxPromise, thunk, sagaMiddleware)
);
sagaMiddleware.run(appSagas);

export default store;
