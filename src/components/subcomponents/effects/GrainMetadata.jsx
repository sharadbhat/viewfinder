import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class GrainMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Amount'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.GrainAmount?.value)}
            valueString={this.props.metadata?.GrainAmount?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Size'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.GrainSize?.value)}
            valueString={this.props.metadata?.GrainSize?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Roughness'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
            min={0}
            max={100}
            value={parseInt(this.props.metadata?.GrainFrequency?.value)}
            valueString={this.props.metadata?.GrainFrequency?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default GrainMetadata
