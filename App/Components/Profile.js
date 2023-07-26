import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../Components/styles';
import { connect } from 'react-redux';
import PhoneIcon from 'react-native-vector-icons/Feather';
import MessageIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import UpArrow from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';
const info = [
  {
    title: 'About',
    description: 'Not a single line about who you are, Impossble!\nDonot be shy, let your teammates know who you are!'
  },
  {
    title: 'What I love about my job?',
    description: ''
  },
  {
    title: 'My Interests and hobbies',
    description: ''
  }
]

const teamData = [
  {
    profileName: 'PK',
    level1: 'NEXT LEVEL MANAGER',
    level2: 'Pavaneswar Kumar Nidamanuri',
    level3: 'Engineering Manager',
    icon: <UpArrow size={30} name={'arrowup'} color={'gray'} />
  },
  {
    profileName: 'PK',
    level1: 'REPORTING MANAGER',
    level2: 'Pavan Kumar Pasyavula',
    level3: 'Senior Software Engineer - II',
    backgroundColor: '#f74d80',
    icon: <UpArrow size={30} name={'arrowup'} color={'gray'} />
  },
  {
    profileName: 'TS',
    level1: '',
    level2: 'Tangudu Sireesha',
    level3: 'Associate Software Enginner'
  }
]

const footerData = [
  {
    title: 'Experience',
    description: 'Any past experience you want to share ?'
  },
  {
    title: 'Education',
    description: 'A good education is foundation for a better future'
  },
]

const ProfilePage = ({ userInfo }) => {
  return (
    <ScrollView style={{ flex: 1 , backgroundColor:'#FFFFFF'}}>
      <View style={styles.profileWrapper}>
        <View style={styles.peofileImg}>
          <PlusIcon name={'pluscircleo'} size={20} style={{ marginLeft: 85, marginTop: -40 }} color={'blue'} />
          <UserIcon name={'user'} size={30} color={'#fff'} />
        </View>
        <Text style={styles.profileName}>{userInfo?.user?.first_name || 'Sireesha'}{' '}{userInfo?.user?.last_name || 'Tangudu'}</Text>
        <Text style={styles.designation}>{'Associate Software Engineer'}</Text>
        <Text style={{ fontSize: 12 }}>{'Yep(Mobile) hyderabad'}</Text>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <View style={styles.iconWrapper}>
            <PhoneIcon name={'phone'} size={20} color='blue' style={{ top: 5, left: 7 }} />
          </View>
          <View style={styles.iconWrapper}>
            <MessageIcon name={'message-square'} size={20} color='blue' style={{ top: 7, left: 7 }} />
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      {info.map((data, i) => {
        return (
          <View style={{ margin: 20 }} key={i}>
            <Text
              style={{ fontFamily: 'Gordita-Medium', fontSize: 20, color: '#170c01' }}
            >{data?.title || ''}</Text>
            {data?.description ? <Text style={{ fontFamily: 'Gordita-Regular', fontSize: 14, lineHeight: 20 }}>{data?.description || ''}</Text> : null}
            {/* <TextInput
                 placeholder='Add a response'
                 style={styles.profileInput}
                 placeholderTextColor='blue'
                /> */}
            <TouchableOpacity style={styles.profileInput}>
              <Text style={{ textAlign: 'center', color: 'blue', padding: 10 }}>Add a response</Text>
            </TouchableOpacity>
          </View>
        )
      })}
      <Text style={[styles.profileName, { margin: 20 }]}>Team</Text>
      {teamData.map((data, i) => {
        return (
          <>
            <View style={{ flexDirection: 'row' }} key={i}>
              <View
                style={[
                  styles.teamWrapper,
                  { backgroundColor: data?.backgroundColor ? data?.backgroundColor : '#06c465', marginLeft: 20 }
                ]}>
                <Text style={{ textAlign: 'center', top: 10, fontSize: 20, color: '#fff' }}>{data?.profileName}</Text>
              </View>
              <View>
                <Text>{data?.level1 || ''}</Text>
                <Text style={styles.designation}>{data?.level2 || ''}</Text>
                <Text>{data?.level3 || ''}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 30 }}>
              {data?.icon}
            </View>
          </>
        )
      })}
      {footerData.map((data, i) => {
        return (
          <View style={{ margin: 20 }} key={i}>
            <Text
              style={{ fontFamily: 'Gordita-Medium', fontSize: 20, color: '#170c01' }}
            >{data?.title || ''}</Text>
            {data?.description ? <Text>{data?.description || ''}</Text> : null}
            {/* <TextInput
                 placeholder='Add a response'
                 style={styles.profileInput}
                 placeholderTextColor='blue'
                /> */}
            <TouchableOpacity style={styles.profileInput}>
              <Text style={{ textAlign: 'center', color: 'blue', padding: 10 }}>Add a response</Text>
            </TouchableOpacity>
          </View>
        )
      })}
    </ScrollView>
  )
}
export default connect(
  (state) => {
    console.log('profile.........', state?.login?.user)
    return {
      userInfo: state?.login?.user || {}
    }
  }, {

}
)(ProfilePage)