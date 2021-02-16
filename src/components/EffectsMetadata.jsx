import React, { Component } from 'react'

// Sub Components
import PostCropVignettingMetadata from './subcomponents/effects/PostCropVignettingMetadata'
import GrainMetadata from './subcomponents/effects/GrainMetadata'

// Primitives
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class EffectsMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubheading>Post Crop Vignetting</MetadataSubheading>
        <PostCropVignettingMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Grain</MetadataSubheading>
        <GrainMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

EffectsMetadata.contextType = Context

export default EffectsMetadata
