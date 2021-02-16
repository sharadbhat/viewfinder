import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class NoiseReductionMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Luminance'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceSmoothing?.value)}
            valueString={this.props.metadata?.LuminanceSmoothing?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Color'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.ColorNoiseReduction?.value)}
            valueString={this.props.metadata?.ColorNoiseReduction?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Detail'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.ColorNoiseReductionDetail?.value)}
            valueString={this.props.metadata?.ColorNoiseReductionDetail?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Smoothness'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.ColorNoiseReductionSmoothness?.value)}
            valueString={this.props.metadata?.ColorNoiseReductionSmoothness?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default NoiseReductionMetadata


