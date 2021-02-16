import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class LuminanceMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Red'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #391313, #993333, #e6b3b3)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentRed?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentRed?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Orange'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #392613, #996633, #e6ccb3)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentOrange?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentOrange?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Yellow'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #393913, #999933, #e6e6b3)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentYellow?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentYellow?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Green'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #263913, #669933, #cce6b3)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentGreen?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentGreen?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Aqua'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #133939, #339999, #b3e6e6)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentAqua?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentAqua?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Blue'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #131339, #333399, #b3b3e6)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentBlue?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentBlue?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Purple'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #261339, rebeccapurple, #ccb3e6)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentPurple?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentPurple?.value}
          />
        </MetadataDisplay>

        <MetadataDisplay title='Magenta'>
          <GradientSlider
            gradientString={'linear-gradient(90deg, #391339, #993399, #e6b3e6)'}
            min={-100}
            max={100}
            value={parseInt(this.props.metadata?.LuminanceAdjustmentMagenta?.value)}
            valueString={this.props.metadata?.LuminanceAdjustmentMagenta?.value}
          />
        </MetadataDisplay>
      </div>
    )
  }
}

export default LuminanceMetadata
