import actions from './actions';

export const initialState = {
    userName: '',
    password: '',
    user : [],
    loading: false
}

export default function (state = initialState, action) {
    // console.log('actions.........',action)
    switch (action.type) {
        case actions.USERNAME:
            return {
                ...state,
                userName : action.userName,
            }
        case actions.PASSWORD:
            return {
                ...state,
              password: action.password
            } 
        case actions.SIGN_IN:
            return {
                  ...state,
                  loading: true,
                }   
        case actions.SIGN_IN_SUCCESS:
            console.log('check 29---------------->', action);
            return {
            ...state,
            user: action.user,
            loading: false
          }
          case actions.SIGN_IN_FAIL:
            return {
            ...state,
            user: [],
            loading: false
          }
          case actions.LOGOUT:
            return {
                userName: '',
                password: '',
                user : [],
                loading: false
              }
        default: return state
    }
}