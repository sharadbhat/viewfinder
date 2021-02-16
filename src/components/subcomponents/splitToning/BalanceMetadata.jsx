import React, { Component } from 'react'

// Primitives
import MetadataDisplay from '../../primitives/MetadataDisplay'
import GradientSlider from '../../primitives/GradientSlider'

class BalanceMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Balance'>
          <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SplitToningBalance?.value)}
              valueString={this.props.metadata?.SplitToningBalance?.value}
            />
        </MetadataDisplay>
      </div>
    )
  }
}

export default BalanceMetadata
