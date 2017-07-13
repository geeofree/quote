import React from 'react'
import QuoteBtn from './quote.button'
import TweetBtn from './tweet.button'

const QuoteHeader = () => (
  <div className="quote-header">
    <h1 className="title">Quote.me</h1>

    <div className="header-buttons">
      <TweetBtn />
      <QuoteBtn />
    </div>
  </div>
)

export default QuoteHeader
