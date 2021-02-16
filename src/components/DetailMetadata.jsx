import React, { Component } from 'react'

// Sub Components
import SharpeningMetadata from './subcomponents/detail/SharpeningMetadata'
import NoiseReductionMetadata from './subcomponents/detail/NoiseReductionMetadata'

// Utils
import { Context } from '../utils/Context'

class DetailMetadata extends Component {
  render() {
    return (
      <div>
        <b>Sharpening</b>
        <SharpeningMetadata metadata={this.context.state.imageMetadata} />
        <b>Noise Reduction</b>
        <NoiseReductionMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

DetailMetadata.contextType = Context

export default DetailMetadata
