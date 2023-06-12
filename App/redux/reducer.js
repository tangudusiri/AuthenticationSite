import actions from './actions';

export const initialState = {
    userName: '',
    password: '',
    user : []
}

export default function (state = initialState, action) {
    console.log('actions.........',action)
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
        case actions.SIGN_IN_SUCCESS:
          return {
            ...state,
            user: action.user,
          }
        default: return state
    }
}