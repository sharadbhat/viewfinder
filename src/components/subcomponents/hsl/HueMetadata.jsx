import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class HueMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Red'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #d147d1, #d14747, #d18c47)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentRed?.value)}
            valueString={this.props.metadata?.HueAdjustmentRed?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Orange'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #d14747, #d18c47, #d1d147)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentOrange?.value)}
            valueString={this.props.metadata?.HueAdjustmentOrange?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Yellow'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #d18c47, #d1d147, #8cd147)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentYellow?.value)}
            valueString={this.props.metadata?.HueAdjustmentYellow?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Green'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #d1d147, #8cd147, #47d1d1)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentGreen?.value)}
            valueString={this.props.metadata?.HueAdjustmentGreen?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Aqua'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #8cd147, #47d1d1, #4747d1)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentAqua?.value)}
            valueString={this.props.metadata?.HueAdjustmentAqua?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Blue'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #47d1d1, #4747d1, #8c47d1)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentBlue?.value)}
            valueString={this.props.metadata?.HueAdjustmentBlue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Purple'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #4747d1, #8c47d1, #d147d1)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentPurple?.value)}
            valueString={this.props.metadata?.HueAdjustmentPurple?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Magenta'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #8c47d1, #d147d1, #d14747)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.HueAdjustmentMagenta?.value)}
            valueString={this.props.metadata?.HueAdjustmentMagenta?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default HueMetadata
