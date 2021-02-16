import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class ToneMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Exposure'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%)'}
            min={-4}
            max={4}
            value={parseFloat(this.props.metadata?.Exposure2012?.value)}
            valueString={this.props.metadata?.Exposure2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Contrast'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Contrast2012?.value)}
            valueString={this.props.metadata?.Contrast2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Highlights'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Highlights2012?.value)}
            valueString={this.props.metadata?.Highlights2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Shadows'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Shadows2012?.value)}
            valueString={this.props.metadata?.Shadows2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Whites'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Whites2012?.value)}
            valueString={this.props.metadata?.Whites2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Blacks'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Blacks2012?.value)}
            valueString={this.props.metadata?.Blacks2012?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default ToneMetadata
