import React, { useRef, useState, useEffect } from 'react';
import { ActivityIndicator, Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
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
  userName,
  password,
  setUserName,
  setPassword,
  loading,
  userSignIn,
  navigation,
}) => {
  // console.log('responseData.........',responseData)
  const actionSheetRef = useRef(null);
  // const [userName,setUserName] = useState('')
  // const [password,setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({
    userName: '',
    password: ''
  })
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    SheetManager.show('sheet1')
  }, []);

  // useEffect(() => {
  //   // handleValidations();
  // },[userName, password])

  const handleValidations = () => {
    console.log('check------------------->', userName, password);
    if (!userName) {
      setError({
        ...error,
        userName: 'Please enter email',
      });
      setSubmit(false)
      return false;
    }
    if (!validateEmail(userName)) {
      setError({
        ...error,
        userName: 'Please enter valid email',
      });
      setSubmit(false)
      return false;
    }
    if (!password) {
      setError({
        ...error,
        userName: '',
        password: 'password is required',
      });
      setSubmit(false)
      return false;
    } else {
      setError({
        // ...error,
        userName: '',
        password: ''
      })
      return true;
    }
  }

  const handleSubmitBy = () => {
    // navigation.navigate('HomeScreen');
    // return;
    if (handleValidations()) {
      userSignIn(response => {
        setUserName('')
        setPassword('')
        console.log('response..........', JSON.stringify(response))
      });
    }
  }
  //  console.log('username..........',error.userName)
  return (
    <View style={{ flex: 1, backgroundColor: '#25BE8F' }}>
      {/* <TouchableOpacity  onPress={()=>SheetManager.show('sheet1')}>
               <Text style={styles.title}>Click here to Login Now!</Text> 
            </TouchableOpacity> */}
      <ActionSheet
        id='sheet1'
        ref={actionSheetRef}
        containerStyle={{
          flex: 0.7,
          padding: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30
        }}
        gestureEnabled={true}
        indicatorStyle={{ backgroundColor: '#25BE8F' }}
      >
        <ScrollView
          style={{ marginVertical: 20 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'never'}
        >
          <Text style={styles.label}>UserName</Text>
          <View style={styles.textContainer}>
            <Icon
              name="user"
              size={20}
              style={{ marginVertical: 12, marginLeft: 10 }}
              color='black'
            />
            <TextInput
              testID='Username'
              style={styles.input}
              placeholder='Enter username'
              value={userName}
              onChangeText={setUserName}
            />
          </View>
          {error?.userName ? <Text style={{ color: '#CB6A86', marginLeft: 15 }}>{error?.userName}</Text> : null}
          <Text style={styles.label}>Password</Text>
          <View style={styles.textContainer}>
            <TextInput
              testID='Password'
              style={styles.input}
              placeholder='Enter your password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Eye
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              style={{ marginLeft: 110, marginTop: 12, }}
              color='black'
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          {error?.password ? <Text style={{ color: '#CB6A86', marginLeft: 15 }}>{'This field * required!'}</Text> : null}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmitBy}
            testID='Login-button'>
            {loading ? <ActivityIndicator /> :
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Gordita-Medium',
                  lineHeight: 15,
                  fontSize: 15
                }}>{'Login'}</Text>
            }
          </TouchableOpacity>

        </ScrollView>
      </ActionSheet>
    </View>
  )
}

const mapStateToProps = (state) => {
  console.log('check state--------------------->', state);
  return {
    userName: state.login.userName || '',
    password: state.login.password || '',
    responseData: state.login.user || [],
    loading: state.login.loading
  }
}

const mapDispatchToProps = dispatch => ({
  setUserName: (userName) => dispatch(userActions.setUserName(userName)),
  setPassword: (password) => dispatch(userActions.setPassword(password)),
  userSignIn: (callback) => dispatch(userActions.userSignIN(callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)