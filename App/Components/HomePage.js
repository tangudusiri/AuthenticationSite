import React,{useState,useEffect} from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, FlatList} from "react-native";
import Search from 'react-native-vector-icons/Feather';
import LogOut from 'react-native-vector-icons/AntDesign';
import styles from "./styles";
import { LogBox } from "react-native";
const DashBoard = ({navigation, route}) =>{ 
    const val = route?.params?.name.split('@')
    const [data,setData] = useState([])
		const [filter,setFilter] = useState('')
    const getData=async()=>{
       await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data=>setData(data));
        // console.log('json...........',JSON.stringify( data.slice(0,3)))
      }
    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    },[])

    return(
        <ScrollView 
            style={styles.homePage} 
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true} >
					<View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <Text style={styles.himeTitle}>Hii {val[0].charAt(0).toUpperCase() + val[0].slice(1)}</Text>
				  <TouchableOpacity style={{
					  flex: 0.5, 
					  backgroundColor:'#fff', 
            marginTop: 30, 
            marginRight: 20, 
            flexDirection:'row', 
            justifyContent: 'space-around',
            borderRadius: 10
				  }}
				 	  onPress={()=>navigation.goBack()}
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
export default DashBoard