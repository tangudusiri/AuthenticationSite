import React from "react";
import { View, Text, FlatList } from "react-native";
import ClockIn from 'react-native-vector-icons/Feather';
import ApplyLeave from 'react-native-vector-icons/MaterialIcons';
import WFH from 'react-native-vector-icons/FontAwesome5';
import PartialIcon from 'react-native-vector-icons/Octicons';
import LeaveBal from 'react-native-vector-icons/Feather';
import AttendenceIcon from 'react-native-vector-icons/AntDesign';
import HolidatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

const myData = [
  {
    icon: <ClockIn name={'clock'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Clock-In',
    describe: 'SHIFT TODAY',
    time: '10:00 AM - 7:00 PM',
    background: '#c74abf'
  },
  {
    icon: <ApplyLeave name={'flight-takeoff'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Apply leave',
    describe: 'You can apply leave\nfrom here',
    background: '#fc8451'
  },
  {
    icon: <WFH name={'shopping-bag'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Work from\nHome',
    describe: 'You can request for\nwork leave from here',
    background: '#09dfeb'
  },
  {
    icon: <PartialIcon name={'moon'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Partial day',
    describe: 'You can request for\npartial day from here',
    background: '#c74f04'
  },
  {
    icon: <LeaveBal name={'file-text'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Leave Balances',
    describe: 'View balances and leave history',
    background: '#9c8952'
  },
  {
    icon: <AttendenceIcon name={'clockcircleo'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Attendance\nHistory',
    describe: 'View attendance\nhistory and other\nstastics',
    background: '#045dc9'
  },
  {
    icon: <HolidatIcon name={'flower'} size={20} color={'#fff'} style={{ top: 5, left: 6 }} />,
    title: 'Holidays',
    describe: 'NEXT HOLIDAY',
    background: '#02ad0d'
  },
];

const MyPage = () => {

  return (
    // <ScrollView>
    // {myData.map((data,i) => {
    //     return(
    //      <View style={{flexWrap: 'wrap'}} key={i}>
    //       <View style={{width: 180, height: 150, borderWidth: 1, margin: 10, borderColor:'#d1d0cf'}}>
    //        <View style={{flexDirection:'row'}}>
    //         <View style={[styles.icon, {backgroundColor:data?.background ? data.background : null}]}>{data?.icon}</View>
    //         <Text style={styles.screenName}>{data?.title}</Text>
    //        </View>
    //        <Text style={{padding: 10}}>{data?.describe}</Text>
    //        {data?.time ? <Text style={{padding: 10, color:'black'}}>{data?.time}</Text> : null}
    //       </View>
    //      </View>
    //     )
    // })}
    // </ScrollView>
    <View style={{flex: 1, backgroundColor: '#FFFFFF', }}>
      {/* <View style={{ flex: 1, backgroundColor: 'red', }} />
      <View style={{ flex: 2, backgroundColor: 'green', }} />
      <View style={{ flex: 3, backgroundColor: 'blue', }} />
      <View style={{ flex: 4, backgroundColor: 'yellow', }} />
      <View style={{ flex: 5, backgroundColor: 'pink', }} /> */}

      <FlatList
        data={myData}
        keyExtractor={(item, i) => i}
        // ItemSeparatorComponent={() => <View style={{ margin: 2 }} />}
        renderItem={({ item, i }) => {
          return (
            <View style={{ flex: 0.5 , borderWidth: 1, backgroundColor: '#fff',   borderColor: '#d1d0cf', margin: 2 , paddingBottom: 40}}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.icon, { backgroundColor: item?.background ? item.background : null }]}>{item?.icon}</View>
                <Text style={styles.screenName}>{item?.title}</Text>
              </View>
              <Text style={{ padding: 10, fontFamily: 'Gordita-Black', }}>{item?.describe}</Text>
              {item?.time ? <Text style={{ marginLeft: 10,marginTop: -10, color: 'black', }}>{item?.time}</Text> : null}
            </View>
          )
        }}
        numColumns={2}
      />
    </View>
  )
}
export default MyPage