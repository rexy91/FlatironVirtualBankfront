const initialState = {

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case 'SAVE_USER_TO_STATE':
            // Update the state, with user object form backend.
            // Spread the state, add key value pairs.
            // console.log(action.payload)
        return {...state, user:action.payload.user, token:action.payload.token}

        case 'SIGN_UP_USER':

        return {...state, user:action.payload.user, token:action.payload.token}

        case 'DYNAMIC_SEARCH_TRANS':
              //  console.log(state)
              // With react, we didnt want allthe arrays. 
            //   let arrayWeCareAbout = state.user.checking.transactions.filter(transation => {
            //       return transation.trans_type.toLowerCase().includes(action.payload.search)
            //   })
              // console.log(action.payload)
              // console.log({...state,transactions: arrayWeCareAbout}, state)
                  /// ??????
          // return {...state,transactions: arrayWeCareAbout}
                return {...state, searchTerm: action.payload}

        // Deleting

        case 'DELETE_ACCOUNT':
                
                // Payload has the id: 
                // Keep {...state.user} , but set checking to be empty. 
                // If don't keep state, user will be gone too.
                // Then persist to the backend. 
                fetch(`http://localhost:3000/checkings/${action.payload}`,{
                    method:'DELETE'
                })
                .then(res =>res.json())
                .then(console.log)
                
                return {user: {...state.user, checking: {}}}
                

        default:
            return state 
    }
}

export default userReducer