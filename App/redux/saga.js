import {put, takeEvery, call, fork, all, takeLatest} from 'redux-saga/effects';
import actions from '../redux/actions';
import { successToast, errorToast, userErrorToast } from '../Components/SignInPage';
 function* userSignIn (){
   const responseData = fetch("https://api.yepdev.co.za/yeplogin", {
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
         .then(data => console.log(data))
         .catch(e => e);
   yield put({type: actions.SIGN_IN_SUCCESS, user: responseData})
   if(responseData.statusCode === 200){
    successToast()
    setTimeout(()=>{
      navigation.navigate('Home', {name: userName})
    },3000)
  }
  else{
    userErrorToast()
  }
}
 
 function* watchSignIn(){
  yield takeLatest('SIGN_IN_SUCCESS', userSignIn)
 }

 export default function* rootSaga() {
  yield all([
    fork(watchSignIn),
  ]);
}

