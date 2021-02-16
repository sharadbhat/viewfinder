import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class SaturationMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Red'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #dd3c3c)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentRed?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentRed?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Orange'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #dd8c3c)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentOrange?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentOrange?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Yellow'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #dddd3c)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentYellow?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentYellow?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Green'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #8cdd3c)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentGreen?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentGreen?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Aqua'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #3cdddd)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentAqua?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentAqua?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Blue'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #3c3cdd)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentBlue?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentBlue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Purple'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #8c3cdd)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentPurple?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentPurple?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Magenta'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #424242, #dd3cdd)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.SaturationAdjustmentMagenta?.value)}
            valueString={this.props.metadata?.SaturationAdjustmentMagenta?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default SaturationMetadata
