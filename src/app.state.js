import { createStore, applyMiddleWare } from 'redux'
import QuoteReducer from './reducers/quote.reducer'

const logger = (store) => (next) => (action) => {
  console.log('Dispatching action:', action)
  next(action)
}

const middleware =  applyMiddleWare(logger)
const appState = createStore(QuoteReducer, {}, middleware)
export default appState
