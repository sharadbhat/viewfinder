import React, { Component } from 'react'

// Sub Components
import PostCropVignettingMetadata from './subcomponents/effects/PostCropVignettingMetadata'
import GrainMetadata from './subcomponents/effects/GrainMetadata'

// Utils
import { Context } from '../utils/Context'

class EffectsMetadata extends Component {
  render() {
    return (
      <div>
        <b>Post Crop Vignetting</b>
        <PostCropVignettingMetadata metadata={this.context.state.imageMetadata} />
        <b>Grain</b>
        <GrainMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

EffectsMetadata.contextType = Context

export default EffectsMetadata
