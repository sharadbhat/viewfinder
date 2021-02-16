import React, { Component } from 'react'

// Sub Components
import WBMetadata from './subcomponents/basic/WBMetadata'
import ToneMetadata from './subcomponents/basic/ToneMetadata'
import PresenceMetadata from './subcomponents/basic/PresenceMetadata'

// Utils
import { Context } from '../utils/Context'

class BasicMetadata extends Component {
  render() {
    return (
      <div>
        <b>White Balance</b>
        <WBMetadata metadata={this.context.state.imageMetadata} />
        <b>Tone</b>
        <ToneMetadata metadata={this.context.state.imageMetadata} />
        <b>Presence</b>
        <PresenceMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

BasicMetadata.contextType = Context

export default BasicMetadata
