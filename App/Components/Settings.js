import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import RightArrow from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import UserIcon from 'react-native-vector-icons/Feather';
import Notification from 'react-native-vector-icons/Ionicons';
import LogOut from 'react-native-vector-icons/AntDesign';

const {logout} = actions;

const SettingPage = ({logout, navigation}) => {
  const arr = [
    {
      name: 'Account',
      icon: <UserIcon name={'user'} size={20} color='#fff'/>,
    },
    {
      name: 'Notification',
      icon: <Notification name={'notifications-outline'} size={20} color='#fff'/>,
    },
    {
      name: 'Logout',
      icon: <LogOut name={'logout'} size={20} color='#fff'/>,
      event:logout
    },
  ]
    return (
        <View style={styles.profileData}>
          {/* <TouchableOpacity 
             style={{marginTop: 20,flexDirection:'row'}}
             onPress={()=>logout()}>
            <RightArrow name={'angle-right'} size={20} style={{marginLeft: 20}} color='#fff'/>
            <Text style={styles.settings}>Logout</Text>
        </TouchableOpacity> */}
        {arr.map((item, i) => {
          return(
            <TouchableOpacity 
                  key={i}
                  style={{flexDirection:'row', padding: 10, justifyContent:'space-between', }}
                  onPress={item.event  ? ()=>item.event() : ()=>{alert('No action triggered')}}>
              <View style={{flexDirection:'row', padding: 15,}}>
              <View style={{marginRight: 10}}>{item.icon}</View>
              <Text style={{color:'#fff'}}>{item.name}</Text>
              </View>
              <View>
              <RightArrow name={'angle-right'} size={20} color='#fff'/>
              </View>
            </TouchableOpacity>
          )
        })}
        </View>
    )
}
export default connect(
  (state) => {
    return{
      
    }
  },{
    logout
  }
)(SettingPage)