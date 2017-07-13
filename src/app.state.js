import { createStore, applyMiddleware } from 'redux'
import QuoteReducer from './reducers/quote.reducer'

const logger = (store) => (next) => (action) => {
  console.log('Dispatching action:', action)
  next(action)
}

const middleware =  applyMiddleware(logger)
const appState = createStore(QuoteReducer, {}, middleware)
export default appState
