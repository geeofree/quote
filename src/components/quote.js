import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingQuote, dataReceived } from '../actions/quote.action'
import request from '../api.request'


class Quote extends Component {
  componentWillMount() {
    const { toggleFetch, dataReceived } = this.props

    toggleFetch(true)

    request.get()
    .then(response => {
      dataReceived(response.status, response.data)
      toggleFetch(false)
    })
    .catch(error => {
      console.log(error.response)
      dataReceived(error.response.status, error.response.data)
      toggleFetch(false)
    })
  }

  render() {
    const { quote } = this.props

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

    return <p>placeholder</p>
  }

}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  quote: state.quote
})

const mapDispatchToProps = (dispatch) => ({
  toggleFetch: (bool) => dispatch(fetchingQuote(bool)),
  dataReceived: (status, data) => dispatch(dataReceived(status, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
