import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class PostCropVignettingMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Amount'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, silver 50%, #000000 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.PostCropVignetteAmount?.value)}
            valueString={this.props.metadata?.PostCropVignetteAmount?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Midpoint'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.PostCropVignetteMidpoint?.value)}
            valueString={this.props.metadata?.PostCropVignetteMidpoint?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Roundness'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, silver 50%, #000000 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.PostCropVignetteRoundness?.value)}
            valueString={this.props.metadata?.PostCropVignetteRoundness?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Feather'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.PostCropVignetteFeather?.value)}
            valueString={this.props.metadata?.PostCropVignetteFeather?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Highlights'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.PostCropVignetteHighlightContrast?.value)}
            valueString={this.props.metadata?.PostCropVignetteHighlightContrast?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default PostCropVignettingMetadata
