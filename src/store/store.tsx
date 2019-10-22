import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from 'store/history';
import reducers from 'sagas/reducers/index';
import appSagas from 'sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, routerMiddleware(history)));
sagaMiddleware.run(appSagas);

export default store;
