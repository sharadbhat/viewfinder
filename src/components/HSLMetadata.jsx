import React, { Component } from 'react'

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
        <b>Hue</b>
        <HueMetadata metadata={this.context.state.imageMetadata} />
        <b>Saturation</b>
        <SaturationMetadata metadata={this.context.state.imageMetadata} />
        <b>Luminance</b>
        <LuminanceMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

HSLMetadata.contextType = Context

export default HSLMetadata
