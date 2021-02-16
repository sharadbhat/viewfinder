import React, { Component } from 'react'

// Sub Components
import HueMetadata from './subcomponents/hsl/HueMetadata'
import SaturationMetadata from './subcomponents/hsl/SaturationMetadata'
import LuminanceMetadata from './subcomponents/hsl/LuminanceMetadata'

// Primitives
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class HSLMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubheading>Hue</MetadataSubheading>
        <HueMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Saturation</MetadataSubheading>
        <SaturationMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Luminance</MetadataSubheading>
        <LuminanceMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

HSLMetadata.contextType = Context

export default HSLMetadata
