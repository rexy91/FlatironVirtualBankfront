const initialState = {
    user: {
      user_transactions: []
    },
    token: ""
  }
  
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_USER_TO_STATE':
            // console.log('here')
            // Update the state, with user object form backend.
            // Spread the state, add key value pairs.
            console.log(action.payload)
        return {...state, user:action.payload.user, token:action.payload.token}

        case 'SIGN_UP_USER':

        return {...state, user:action.payload.user, token:action.payload.token}

        default:
            return state 
    }
}

export default userReducer