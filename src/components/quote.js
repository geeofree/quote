import React, { Component } from 'react'
import LoadingHOC from './loading.hoc'


const Quote = ({ quote }) => {
  if(quote) {
    if(quote.status === 200) {
      return (
        <div className="quote-wrapper">
          <p className="quote">{quote.data.quote}</p>
          <p className="author">&#8212;{quote.data.author}</p>
        </div>
      )
    }
    else if(quote.status >= 400) {
      return <p>Something went wrong with fetching :(</p>
    }
  }
  return null
}

export default LoadingHOC(Quote)
