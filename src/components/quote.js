import React, { Component } from 'react'
import LoadingHOC from './loading.hoc'


const Quote = ({ quote }) => {
  if(quote) {
    if(quote.status === 200) {
      return (
        <div>
          <p>{quote.data.quote}</p>
          <p>{quote.data.author}</p>
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
