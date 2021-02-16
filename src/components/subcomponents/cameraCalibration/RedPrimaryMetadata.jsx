import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class RedPrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Hue'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #a01e4e 0%, #c6a14f 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.RedHue?.value)}
            valueString={this.props.metadata?.RedHue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Saturation'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #393939 0%, #d8475a 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.RedSaturation?.value)}
            valueString={this.props.metadata?.RedSaturation?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default RedPrimaryMetadata
