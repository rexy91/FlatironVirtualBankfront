export const signUpUser = (newUserState) => {
  return {
      
      type: "SIGN_UP_USER",
      payload: newUserState
  }
}

export const signUpAccount = (newUserState) => {
    return {
        type: 'EXISTINGUSER_SIGNUP_ACCOUNT',
        payload: newUserState
    }
}

export const deleteAccount = (accountId) => {
   
        return {
          type: "DELETE_ACCOUNT",
          payload: accountId
        }
} 

export const saveUserToState = (userInfoFromBackEnd) => {
    // When this action is called, it will then look into reducer to match the switch statement. 
    return {
      type: "SAVE_USER_TO_STATE",
      // Will look for reducers with type = 'SAVE_USER_TO_STATE'
      // Payload is the object/res from backend 
      payload: userInfoFromBackEnd
    }
  }

export const saveTransactionsToState = (transactions) => {
  return {
    type: "INITIALIZE_TRANSACTIONS",
    payload: transactions
  }
}

export const dynamicSearch = (searchTerm) => {
  
  return {
    // dynamicSearch() is passed into DybamicSearch component, gets called there, and dispatch an action here, then goes to the reducer to update teh state.
    type: 'DYNAMIC_SEARCH_TRANS',
    payload: searchTerm
  }
}

// checkingDepositObj will be passed as payload to reducer: 
export const onlineCheckingDeposit = (checkingDepositObj) => {
  
  return {
    type: 'ONLINE_CHECKING_DEPOSIT',
    payload: checkingDepositObj
  }
}

// export const onlineWithdrawal = (checkingWithdrawalObj) => {
//   return {
//     type: 'ONLINE_WITHDRAWAL',
//     payload: checkingWithdrawalObj

//   }
// }

export const onlineWithdrawal = (check) => {
  // debugger
  return {
    type: "ONLINE_WITHDRAWAL",
    payload: check
  }
}


export const handleLogout = () => {
  console.log('here')
  return {
    type: 'HANDLE_LOGOUT',
  }
}