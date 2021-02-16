import React, { Component } from 'react'

// Sub Components
import SharpeningMetadata from './subcomponents/detail/SharpeningMetadata'
import NoiseReductionMetadata from './subcomponents/detail/NoiseReductionMetadata'

// Primitives
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class DetailMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubheading>Sharpening</MetadataSubheading>
        <SharpeningMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Noise Reduction</MetadataSubheading>
        <NoiseReductionMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

DetailMetadata.contextType = Context

export default DetailMetadata
