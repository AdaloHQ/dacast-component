import React, { Component } from 'react'
import Player from './Player'

export default class StreamingPlayerWrapper extends Component {
  render() {
    return (
      <Player {...this.props} />
    )
  }
}
