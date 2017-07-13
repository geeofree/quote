import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingQuote, dataReceived } from '../actions/quote.action'
import request from '../api.request'


const LoadingIcon = () => (
  <div className="loader-wrapper">
    <div className="loading" />
  </div>
)

const LoadingHOC = (WrappedComponent) => {
  class Loader extends Component {
    componentWillMount() {
      const { toggleFetch, dataReceived } = this.props

      toggleFetch(true)

      request.get()
      .then(response => {
        dataReceived(response.status, response.data)
        toggleFetch(false)
      })
      .catch(error => {
        dataReceived(error.response.status, error.response.data)
        toggleFetch(false)
      })
    }


    render() {
      const { isFetching } = this.props
      return isFetching ? <LoadingIcon /> : <WrappedComponent {...this.props} />
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

  return connect(mapStateToProps, mapDispatchToProps)(Loader)
}

export default LoadingHOC
