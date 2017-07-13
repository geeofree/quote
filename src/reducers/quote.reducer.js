const InitialState = {
  fetch: { status: null, fetching: false },
  quote: {}
}

const QuoteReducer = (state=InitialState, action) => {
  const assign = (value) => Object.assign({}, state, value)

  switch(action.type) {
    case "FETCH_REQUEST":
      return assign(action.payload)
    case "SHOW_QUOTE":
      return assign(action.payload)
    default:
      return state
  }
}

export default QuoteReducer
