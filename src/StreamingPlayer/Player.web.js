import React, { Component } from 'react'
import { getDacast } from './loader'

export default class StreamingPlayer extends Component {
  constructor(props) {
    super(props)

    this._playerId = `dacast-${Math.round(Math.random() * 100000)}`
  }

  showPlayer = async () => {
    let { streamId } = this.props

    if (!streamId) { return }

    let dacast = await getDacast()

    this._player = dacast(streamId, this._playerId, {
      width: 375,
      height: 211,
    })

    window.setTimeout(() => {
      this._player.play()
    }, 0)
  }

  componentDidMount() {
    this.showPlayer()
  }

  componentWillUnmount() {
    // Do some cleanup?
  }

  render() {
    return (
      <div
        style={styles.wrapper}
        id={this._playerId}
      />
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#faa',
  }
}
