const InitialState = {
  isFetching: false,
  quote: { status: null, data: null }
}

const QuoteReducer = (state=InitialState, action) => {
  const assign = (value) => Object.assign({}, state, value)

  switch(action.type) {
    case "IS_FETCHING":
      return assign({ isFetching: action.payload })
    case "RESPONSE_RECEIVED":
      return assign({ quote: action.payload })
    default:
      return state
  }
}

export default QuoteReducer
