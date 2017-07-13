import React      from 'react'
import { render } from 'react-dom'
import './app.style.sass'

import { Provider } from 'react-redux'
import appState     from './app.state'
import AppLayout    from './app.layout'


const App = () => (
  <Provider store={appState}>
    <AppLayout />
  </Provider>
)


const root = document.getElementById('root')
render(<App />, root)
