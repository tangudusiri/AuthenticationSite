import {put, takeEvery, call, fork, all, takeLatest, select} from 'redux-saga/effects';
import actions from '../redux/actions';
import { successToast, errorToast, userErrorToast } from '../Components/SignInPage';

 function* userSignIn ({callback}){
   const {userName, password}= yield select(state => state.login)
  //  console.log('userData..........',userName, password, loading)
   try{
    if(userName && password){
      const responseData = yield call(() => fetch("https://api.yepdev.co.za/yeplogin", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: userName,
                pass: password,
              })
            }));
       console.log('responseData..........', JSON.stringify(responseData))
       const data = yield call(() => responseData.json())
       if(data.statusCode === 200){
         yield put({type: actions.SIGN_IN_SUCCESS, user: data?.message || {}})
         yield call(()=> successToast())
         if(callback){
           yield callback(data)
         }
       }
       else{
        yield put({type: actions.SIGN_IN_FAIL})
         userErrorToast()
       }

    }else{
      yield put({type: actions.SIGN_IN_FAIL})
      errorToast()
    }
   }catch(error){
    yield put({type: actions.SIGN_IN_FAIL})
     console.log(error)
   }
  }
  
 function* watchSignIn(){
  yield takeLatest('SIGN_IN', userSignIn)
 }

 export default function* rootSaga() {
  yield all([
    fork(watchSignIn),
  ]);
}

