import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingQuote, dataReceived } from '../actions/quote.action'
import request from '../api.request'


class NewQuoteBtn extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    const { isFetching, toggleFetch, dataReceived } = this.props

    toggleFetch(true)

    if(!isFetching) {
      request.get()
      .then(response => {
        dataReceived(response.status, response.data)
        toggleFetch(false)
      })
      .catch(error => {
        const { response } = error
        dataReceived(response.status, response.data)
        toggleFetch(false)
      })
    }
  }


  render() {
    const { clickHandler } = this
    return <button className="new-quote-button" onClick={clickHandler}>New Quote</button>
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  toggleFetch: (bool) => dispatch(fetchingQuote(bool)),
  dataReceived: (status, data) => dispatch(dataReceived(status, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuoteBtn)
