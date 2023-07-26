import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./App/Components/SignInPage";
import DashBoard from "./App/Components/HomePage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { connect } from "react-redux";
import { BackHandler, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import HomeNavigator from "./App/Navigators/TabNavigator";
import Test from "./App/Components/Test";
const Stack = createNativeStackNavigator();


const RootNavigator = ({
  securityToken,
}) => {

  if (securityToken) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} >
          {/* <Stack.Screen
						name="Home"
						component={DashBoard}
						options={{
							headerStyle: {
								backgroundColor: 'red'
							},
							headerLeft:()=>(
							  <TouchableOpacity onPress={()=>BackHandler.exitApp()}>
							      <Icon1 style = {{margin : 10}} name="arrowleft" size={26} color="black" />
							  </TouchableOpacity>
							)
						}}
					/> */}
          <Stack.Screen
            testID={'HomeScreen'}
            name="HomeNavigator"
            component={HomeNavigator}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          testID={'SplashScreen'}
          name="Splash"
          component={Test}
        /> */}
        <Stack.Screen
          testID={'LoginScreen'}
          name="Login"
          component={SignIn}
        />
        <Stack.Screen
            testID={'HomeScreen'}
            name="HomeScreen"
            component={HomeNavigator}
          />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

export default connect(
  (state) => {
    console.log('state data in RootNavigator----------------->', state?.login?.user?.accessToken);

    return {
      securityToken: state?.login?.user?.accessToken || null,
    }
  }, {

}
)(RootNavigator);