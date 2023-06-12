import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "./App/Components/SignInPage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import DashBoard from "./App/Components/HomePage";
import { Provider } from "react-redux";
import {store} from './App/store'
const Stack = createNativeStackNavigator();


const App = () =>{
  return(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={SignIn}
      />
     <Stack.Screen
          name="Home"
          component={DashBoard}
      />
    </Stack.Navigator>
    <Toast/>
    </NavigationContainer>
    </Provider>
  )
}
export default App;