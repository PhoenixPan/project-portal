import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../sagas/reducers/index";
import appSagas from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(appSagas);

export default store;
