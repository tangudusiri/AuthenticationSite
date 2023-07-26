const actions = {
     USERNAME : 'USERNAME',
     PASSWORD : 'PASSWORD',
     SIGN_IN_SUCCESS : 'SIGN_IN_SUCCESS',
     SIGN_IN_FAIL : 'SIGN_IN_FAIL',
     SIGN_IN : 'SIGN_IN',
     LOGOUT : 'LOGOUT',
   
     setUserName : (userName) => ({
      type : actions.USERNAME,
      userName
     }),
     setPassword : (password) => ({
      type : actions.PASSWORD,
      password
     }),
     userSignIN : (callback) => ({
      type: actions.SIGN_IN,
      callback
     }),
     logout : () => ({
       type: actions.LOGOUT
     })
}
export default actions