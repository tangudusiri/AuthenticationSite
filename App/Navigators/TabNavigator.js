import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../Components/HomePage";
import ProfilePage from "../Components/Profile";
import SettingPage from "../Components/Settings";
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/MaterialIcons';
import PhoneIcon from 'react-native-vector-icons/FontAwesome'
import MyPage from "../Components/MyPage";
import Pcm from "../Components/Pcm";
import PcmTable from "../Components/PcmTable";

const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen testID={'HomeScreen'} name="Home" component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (<HomeIcon name={'home'} size={20} />)
        }} />
      <Tab.Screen name="Profile" component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (<UserIcon name={'user'} size={20} />)
        }} />
      <Tab.Screen name="Me" component={MyPage}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: () => (<UserIcon name={'user'} size={20} />)
        }} />
      <Tab.Screen name="Pcm" component={Pcm}
        options={{
          tabBarLabel: 'Pcm',
          tabBarIcon: () => (<PhoneIcon name={'mobile-phone'} size={20} />)
        }} />
      <Tab.Screen name="PcmTable" component={PcmTable}
        options={{
          tabBarLabel: 'PcmTable',
          tabBarIcon: () => (<SettingIcon name={'settings'} size={20} />)
        }} />
    </Tab.Navigator>
  )
}
export default HomeNavigator