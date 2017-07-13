export const fetchingQuote = (fetching) => ({
  type: 'IS_FETCHING',
  payload: fetching
})

export const dataReceived = (status, data) => ({
  type: 'RESPONSE_RECEIVED',
  payload: { status, data }
})
