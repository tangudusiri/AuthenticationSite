const actions = {
     USERNAME : 'USERNAME',
     PASSWORD : 'PASSWORD',
     SIGN_IN_SUCCESS : 'SIGN_IN_SUCCESS',
   
     setUserName : (userName) => ({
      type : actions.USERNAME,
      userName
     }),
     setPassword : (password) => ({
      type : actions.PASSWORD,
      password
     }),
     userSignIN : (user) => ({
      type: actions.SIGN_IN_SUCCESS,
      user
     })
}
export default actions