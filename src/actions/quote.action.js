export const requestQuote = (status, fetching) => ({
  type: 'FETCH_REQUEST',
  payload: { status, fetching }
})

export const showQuote = (quote) => ({
  type: 'SHOW_QUOTE',
  payload: quote
})
