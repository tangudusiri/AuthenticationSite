import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ActionSheet,{SheetManager} from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Eye from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import userActions from '../redux/actions';
const validateEmail = email => {
  var regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email));
};  

export const successToast = () => {
  Toast.show({
    type: 'success',
    text1: 'Logined successfully',
  });
}

export const userErrorToast = () => {
  Toast.show({
    type: 'error',
    text1: 'User doesnot exist', 
  });
}

export const errorToast = () => {
  Toast.show({
    type: 'error',
    text1: 'All fields are required!', 
  });
}

const SignIn = ({
  navigation, 
  userName, 
  password,
  setUserName,
  setPassword,
  responseData,
  userSignIn}) =>{
    console.log('check.........',userName,password)
    console.log('responseData.........',responseData)
    const actionSheetRef = useRef(null);
    // const [userName,setUserName] = useState('')
    // const [password,setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error,setError] = useState({
      userName:'',
      password:''
    })
    const [submit,setSubmit] = useState(false)
      
    useEffect(() => {
      console.log('emailcheck...........',validateEmail(userName))

      if(!validateEmail(userName)){
        setError({
          // ...error,
          userName: !userName ? 'Please enter email' : 'Please enter valid email',
        });
        setSubmit(false)
        return
      }  else if (!password) {
        setError({
          // ...error,
          // userName: '',
          password: 'password is required',
        });
        setSubmit(false)
        return
      } else{
        setError({
          // ...error,
          userName: '',
          password:''
        })
      }
    },[userName, password])

  const handleSubmit = () => {
    if(userName && password){
      fetch("https://api.yepdev.co.za/yeplogin", {
             method: "POST",
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               name: userName,
               pass: password,
             })
           })
           .then((response) => response.json())
           .then((responseData) => {
            console.log('res...............',JSON.stringify(responseData))
            if(responseData.statusCode === 200){
              setSubmit(!submit)
              successToast()
              setTimeout(()=>{
                navigation.navigate('Home', {name: userName})
                setUserName('')
                setPassword('')
              },3000)
            }
            else{
              userErrorToast()
              setUserName('')
              setPassword('')
            }
           })
        //    setSubmit(!submit)
        //    successToast()
        //    setTimeout(()=>{
        //      navigation.navigate('Home', {name: userName})
        //      setUserName('')
        //      setPassword('')
        //    },3000)
        //  }else{
        //    errorToast()
        //  } 
    }else{
      errorToast()
    }
  }

  // const successToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'Logined successfully',
  //   });
  // }
 
  
  // const userErrorToast = () => {
  //   Toast.show({
  //     type: 'error',
  //     text1: 'User doesnot exist', 
  //   });
  // }

  // const errorToast = () => {
  //   Toast.show({
  //     type: 'error',
  //     text1: 'All fields are required!', 
  //   });
  // }

   console.log('username..........',error.userName)
    return(
        <View style={{flex: 1, backgroundColor:'#25BE8F'}}>
            <TouchableOpacity  onPress={()=>SheetManager.show('sheet1')}>
               <Text style={styles.title}>Click here to Login Now!</Text> 
            </TouchableOpacity>
              <ActionSheet
              id='sheet1'
              ref={actionSheetRef}
              containerStyle={{
                flex:0.7,
                padding: 20, 
                borderTopRightRadius: 30, 
                borderTopLeftRadius: 30
              }}
              gestureEnabled={true}
              indicatorStyle={{backgroundColor:'#25BE8F'}}
              >
                <ScrollView  
                  style={{marginVertical: 20}} 
                  showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.label}>UserName</Text>
                    <View style={styles.textContainer}>
                    <Icon 
                       name="user" 
                       size={20} 
                       style={{marginVertical: 12,marginLeft: 10 }} 
                       color='black'
                    />
                    <TextInput
                      style={styles.input}
                      placeholder='Enter username'
                      value={userName}
                      onChangeText={setUserName}
                    />
                    </View>
                    {error?.userName ? <Text style={{color:'#CB6A86', marginLeft: 15}}>{error?.userName || ''}</Text> : null}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.textContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder='Enter your password'
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                    />
                    <Eye 
                      name={showPassword ? 'eye-off' : 'eye'} 
                      size={20} 
                      style={{marginLeft: 110, marginTop: 12,}} 
                      color='black'
                      onPress={()=>setShowPassword(!showPassword)}
                      />
                    </View>
                    {error?.password ? <Text style={{color:'#CB6A86', marginLeft: 15}}>{error?.password || ''}</Text> : null}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text 
                    style={{
                      color:'white', 
                      fontFamily:'Gordita-Medium', 
                      lineHeight: 15, 
                      fontSize: 15}}>SignIn</Text>
                    </TouchableOpacity>
                </ScrollView>
              </ActionSheet>
       </View>
    )
}

const mapStateToProps = (state) => {
  return {
      userName : state.login.userName || '',
      password : state.login.password || '',
      responseData: state.login.user || []
  }
}

const mapDispatchToProps = dispatch => ({
      setUserName:(userName)=>dispatch(userActions.setUserName(userName)),
      setPassword:(password)=>dispatch(userActions.setPassword(password)),
      userSignIn:(user)=>dispatch(userActions.userSignIN(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)