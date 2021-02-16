import React, { Component } from 'react'

// Sub Components
import HighlightsMetadata from './subcomponents/splitToning/HighlightsMetadata'
import BalanceMetadata from './subcomponents/splitToning/BalanceMetadata'
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'

// Utils
import { Context } from '../utils/Context'

class SplitToningMetadata extends Component {
  render() {
    return (
      <div>
        <b>Highlights</b>
        <HighlightsMetadata metadata={this.context.state.imageMetadata} />
        <BalanceMetadata metadata={this.context.state.imageMetadata} />
        <b>Shadows</b>
        <ShadowsMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

SplitToningMetadata.contextType = Context

export default SplitToningMetadata
