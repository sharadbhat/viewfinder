import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

// Sub Components
import SharpeningMetadata from './subcomponents/detail/SharpeningMetadata'
import NoiseReductionMetadata from './subcomponents/detail/NoiseReductionMetadata'

// Utils
import { Context } from '../utils/Context'

class DetailMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubsection subheading='Sharpening'>
          <SharpeningMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>

        <MetadataSubsection subheading='Noise Reduction'>
          <NoiseReductionMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

DetailMetadata.contextType = Context

export default DetailMetadata
