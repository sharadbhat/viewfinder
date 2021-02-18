import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

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
        <MetadataSubsection subheading='White Balance'>
          <WBMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>

        <MetadataSubsection subheading='Tone'>
          <ToneMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Presence'>
          <PresenceMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

BasicMetadata.contextType = Context

export default BasicMetadata
