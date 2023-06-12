import {createStore, combineReducers, applyMiddleware} from 'redux';

import UserReducer from './redux/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';
const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers ({
    login : UserReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

