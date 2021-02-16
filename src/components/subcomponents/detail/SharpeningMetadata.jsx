import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class SharpeningMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Amount'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, silver 66.67%, #bf4040 100%)'}
            min={0}
            max={150}
            value={parseInt(this.props.metadata?.Sharpness?.value)}
            valueString={this.props.metadata?.Sharpness?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Radius'>
          {this.props.metadata?.SharpenRadius?.value}
        </MetadataDisplay>

        <MetadataDisplay title='Detail'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.SharpenDetail?.value)}
            valueString={this.props.metadata?.SharpenDetail?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Masking'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.SharpenEdgeMasking?.value)}
            valueString={this.props.metadata?.SharpenEdgeMasking?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default SharpeningMetadata


