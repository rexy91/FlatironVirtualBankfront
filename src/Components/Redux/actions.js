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

export const deleteCheckingAccount = (account) => {
   
        return {
          type: "DELETE_CHECKING_ACCOUNT",
          payload: account
        }
} 

export const deleteSavingAccount = (account) => {
  return {
    type: "DELETE_SAVING_ACCOUNT",
    payload: account
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

export const saveNewsToStore = (newsArray) => {
    // console.log('insdieAction')
    return {
      type: 'SAVE_NEWS_TO_STORE',
      payload: newsArray
    }
}

// No default export, it is name export, needs to import with {}

export const updateUserInfo = (updatedUserObj) => {
  // console.log('here')
  return {
    type: 'UPDATE_USER_INFO',
    payload: updatedUserObj
  }
}

export const dispatchChartData = (chartData) => {
    // console.log(chartData)
    return {
      type: 'DISPATCH_CHART_DATA',
      payload: chartData
    }
}

export const toggleLanguageState = (language) => {
    return {
      type: 'TOGGLE_LANGUAGE',
      payload: language
    }
}
export const saveAllUsersToStore = (users) => {
    return{
      type: 'SAVE_ALL_USERS',
      payload: users
    }
}

export const updateSendinguserBalance = (user) => {
  return{
    type: 'UPDATE_SENDINGUSER_BALANCE',
    payload: user
  }
}

export const sortTransAmount = (array) => {

  return{
    type: 'SORT_CHECKING_TRANS',
    payload: array
  }
}

export const updateInternalTransfer = (user) => {
  
  return{
    type: 'UPDATE_INTERNAL_TRANSFER',
    payload: user
  }

}