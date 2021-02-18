import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

// Sub Components
import PostCropVignettingMetadata from './subcomponents/effects/PostCropVignettingMetadata'
import GrainMetadata from './subcomponents/effects/GrainMetadata'

// Utils
import { Context } from '../utils/Context'

class EffectsMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubsection subheading='Post Crop Vignetting'>
          <PostCropVignettingMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>

        <MetadataSubsection subheading='Grain'>
          <GrainMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

EffectsMetadata.contextType = Context

export default EffectsMetadata
