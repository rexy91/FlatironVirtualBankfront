const initialState = {
  transactions: []
}

const transactionReducer = (state = initialState, action) => {

  console.log(action.payload)
  switch (action.type) {
    case "INITIALIZE_TRANSACTIONS":
      return {...state, transactions: action.payload}
    
    default:
      return state;

  }
}


export default snackReducer