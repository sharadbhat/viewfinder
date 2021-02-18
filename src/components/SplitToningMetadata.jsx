import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

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
        <MetadataSubsection subheading='Highlights'>
          <HighlightsMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading=''>
          <BalanceMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Shadows'>
          <ShadowsMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

SplitToningMetadata.contextType = Context

export default SplitToningMetadata
