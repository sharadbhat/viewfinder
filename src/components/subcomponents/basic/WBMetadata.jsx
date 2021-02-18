import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class WBMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='White Balance'>
          {this.props.metadata?.WhiteBalance?.value || '—'}
        </MetadataDisplay>

        <MetadataDisplay title='Temperature'>
          {this.props.metadata?.Temperature?.value || '—'}
        </MetadataDisplay>

        <MetadataDisplay title='Tint'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(59, 153, 58) 0%, rgb(99, 97, 100) 50%, rgb(153, 57, 152) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Tint?.value)}
            valueString={this.props.metadata?.Tint?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default WBMetadata
