import React, { Component } from 'react'
import { connect } from 'react-redux'


class TweetBtn extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    if(this.props.isFetching) e.preventDefault()
  }

  render() {
    const { clickHandler} = this
    const { quote } = this.props
    const tweetURL = quote.status && `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.data.quote)}`

    return (
      <a href={tweetURL} target="_blank" onClick={clickHandler}>
        <button className="tweet-button">Tweet it</button>
      </a>
    )
  }
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(TweetBtn)
