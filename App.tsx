import React from "react";
import { Provider } from "react-redux";
import persistance from './App/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootNavigator from "./RootNavigator";
import HomeNavigator from "./App/Navigators/TabNavigator";

const {store, persistor} = persistance();


const App = () =>{
  
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>       
      <RootNavigator/>
      {/* <HomeNavigator/> */}
      </PersistGate>
    </Provider>
  )
}

export default App;