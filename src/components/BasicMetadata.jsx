import React, { Component } from 'react'

// Sub Components
import WBMetadata from './subcomponents/basic/WBMetadata'
import ToneMetadata from './subcomponents/basic/ToneMetadata'
import PresenceMetadata from './subcomponents/basic/PresenceMetadata'

// Primitives
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class BasicMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubheading>White Balance</MetadataSubheading>
        <WBMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Tone</MetadataSubheading>
        <ToneMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Presence</MetadataSubheading>
        <PresenceMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

BasicMetadata.contextType = Context

export default BasicMetadata
