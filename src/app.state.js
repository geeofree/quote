import { createStore } from 'redux'

function testReducer(state={}, action) {
  return state
}

const appState = createStore(testReducer)
export default appState
