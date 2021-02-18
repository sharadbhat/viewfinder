import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

// Sub Components
import HueMetadata from './subcomponents/hsl/HueMetadata'
import SaturationMetadata from './subcomponents/hsl/SaturationMetadata'
import LuminanceMetadata from './subcomponents/hsl/LuminanceMetadata'

// Utils
import { Context } from '../utils/Context'

class HSLMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubsection subheading='Hue'>
          <HueMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>

        <MetadataSubsection subheading='Saturation'>
          <SaturationMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Luminance'>
          <LuminanceMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

HSLMetadata.contextType = Context

export default HSLMetadata
