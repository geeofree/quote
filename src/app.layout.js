import React from 'react'
import Quote from './components/quote'
import QuoteHeader from './components/header'

const AppLayout = () => (
  <div id="app">
    <div className="quote-container">
      <QuoteHeader />

      <div className="quote-body">
        <Quote />
      </div>
    </div>
  </div>
)

export default AppLayout
