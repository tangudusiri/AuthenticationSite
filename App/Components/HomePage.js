import React,{useState,useEffect} from "react";
import { 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  FlatList,
  LogBox} from "react-native";
import Search from 'react-native-vector-icons/Feather';
import LogOut from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import { connect } from "react-redux";
import actions from '../redux/actions';
const { logout } = actions;
const DashBoard = ({user, logout, testID}) =>{ 
    // const val = route?.params?.name.split('@')
    const [data,setData] = useState([])
		const [filter,setFilter] = useState('')
    const getData=async()=>{
       await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data=>setData(data));
        console.log('json...........',JSON.stringify( data.slice(0,3)))
      }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    },[])

    console.log('HomeScreen----------------------->', testID);
 
    return(
        <ScrollView 
            style={styles.homePage} 
            showsVerticalScrollIndicator={false}
            testID={'HomeScreen'}
            >
					<View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <Text style={styles.himeTitle}>Welcome</Text>
				  <TouchableOpacity testID="logout-btn" style={{
					  flex: 0.5, 
					  backgroundColor:'#fff', 
            marginTop: 30, 
            marginRight: 20, 
            flexDirection:'row', 
            justifyContent: 'space-around',
            borderRadius: 10
				  }}
				 	  onPress={()=>logout()}
				  >
					<Text style={{color:'black', fontSize:20, padding: 8}}>Logout</Text>
          <LogOut 
				    name='logout' 
						size={20} color='black' 
						style={{
							marginTop: 12, 
							}} 
					 />
					 </TouchableOpacity>
					 </View>
           <View style={[styles.textContainer,{marginTop: 50}]}>
            <Search name='search' size={20} style={{marginTop: 13, marginLeft: 10}} color='black'/>
            <TextInput
             style={styles.input}
             placeholder="Search here by name"
             value={filter}
             onChangeText={setFilter}
            />
           </View>
         {/* {(data || []).filter(c => (c?.name || '').toLowerCase().includes(filter.toLowerCase())) .map((item,i)=>{
            return(
                <View style={styles.card} key={i}>
                <Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Name:</Text> {item.name}</Text>
								<Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Email:</Text> {item.email}</Text>
								<Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Phone-num:</Text> {item.phone}</Text>
                </View>
            )
         })} */}
         <FlatList
           data = {(data || []).filter(c => (c?.name || '').toLowerCase().includes(filter.toLowerCase()))}
           keyExtractor = {item => item.id}
           scrollEnabled={false}
           renderItem = {({item}) => (
            <View style={styles.card}>
                <Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Name:</Text> {item.name}</Text>
								<Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Email:</Text> {item.email}</Text>
								<Text><Text style={{fontFamily:'Gordita-Bold', color:'black'}}>Phone-num:</Text> {item.phone}</Text>
             </View>
           ) }
         />
        </ScrollView>
    )
}
export default connect(
	(state) => {
		return {
			user: state?.login?.user?.user || {},
      securityToken: state?.login?.user?.accessToken || null,
		}
	}, {
    logout
}
)(DashBoard);