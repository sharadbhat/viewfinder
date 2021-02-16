import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class PresenceMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Clarity'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Clarity2012?.value)}
            valueString={this.props.metadata?.Clarity2012?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Dehaze'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Dehaze?.value)}
            valueString={this.props.metadata?.Dehaze?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Vibrance'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(88, 89, 89) 0%, rgb(123, 143, 92) 50%, rgb(75, 147, 110) 70%, rgb(115, 51, 159) 90%, rgb(183, 48, 80) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Vibrance?.value)}
            valueString={this.props.metadata?.Vibrance?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Saturation'>
          <GradientSlider
            gradientString={'linear-gradient(to right, rgb(88, 89, 89) 0%, rgb(123, 143, 92) 50%, rgb(75, 147, 110) 70%, rgb(115, 51, 159) 90%, rgb(183, 48, 80) 100%)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.Saturation?.value)}
            valueString={this.props.metadata?.Saturation?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default PresenceMetadata
