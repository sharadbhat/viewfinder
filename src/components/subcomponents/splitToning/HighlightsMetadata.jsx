import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class HighlightsMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Hue'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(172, 87, 83) 0%, rgb(173, 131, 85) 10%, rgb(135, 158, 93) 25%, rgb(85, 169, 172) 50%, rgb(99, 85, 172) 75%, rgb(172, 83, 133) 90%, rgb(172, 82, 107) 100%)'}
            min={0}
            max={360}
            value={parseInt(this.props.metadata?.SplitToningHighlightHue?.value)}
            valueString={this.props.metadata?.SplitToningHighlightHue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Saturation'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #bf4040)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.SplitToningHighlightSaturation?.value)}
            valueString={this.props.metadata?.SplitToningHighlightSaturation?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default HighlightsMetadata
