import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class GreenPrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Hue'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #a8bc40 0%, #49cb9e 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.GreenHue?.value)}
            valueString={this.props.metadata?.GreenHue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Saturation'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #393939 0%, #6bb341 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.GreenSaturation?.value)}
            valueString={this.props.metadata?.GreenSaturation?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default GreenPrimaryMetadata
