import {createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from './redux/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';
const sagaMiddleware = createSagaMiddleware();
import storage from '@react-native-async-storage/async-storage';
 const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['login'],
 }

 const rootReducer = combineReducers ({
     login : userReducer,
    })
    
 const persistedReducer = persistReducer(persistConfig, rootReducer)
 export default () => {
     const store = createStore(
         persistedReducer,
         applyMiddleware(sagaMiddleware)
         )
         const persistor = persistStore(store)
         sagaMiddleware.run(rootSaga)
    return {store, persistor}
}

 

