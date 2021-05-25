const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "balance/deposit": {
      // you can console.log your action and action.payload
      console.log("action", action)
      return {
        ...state,
        amount: state.amount + action.payload
      }
    }
    case "balance/reset": {
      return {
        ...state,
        amount: initialState.amount
      }
    }
    default: {
      return state;
    }
  }
}