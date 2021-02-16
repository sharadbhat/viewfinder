import React, { Component } from 'react'

// Sub Components
import HighlightsMetadata from './subcomponents/splitToning/HighlightsMetadata'
import BalanceMetadata from './subcomponents/splitToning/BalanceMetadata'
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'

// Primitives
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class SplitToningMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubheading>Highlights</MetadataSubheading>
        <HighlightsMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <BalanceMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Shadows</MetadataSubheading>
        <ShadowsMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

SplitToningMetadata.contextType = Context

export default SplitToningMetadata
