export const signUpUser = (newUserState) => {
  return {
      type: "SIGN_UP_USER",
      payload: newUserState
  }
}

export const saveUserToState = (userInfoFromBackEnd) => {
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

export const mstp = () => {

}
