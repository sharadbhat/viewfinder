import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class BluePrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Hue'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #41bf8d 0%, #685ca8 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.BlueHue?.value)}
            valueString={this.props.metadata?.BlueHue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Saturation'>
          <GradientSlider
            gradientString={'linear-gradient(to right, #393939 0%, #49a3c0 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.BlueSaturation?.value)}
            valueString={this.props.metadata?.BlueSaturation?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default BluePrimaryMetadata
