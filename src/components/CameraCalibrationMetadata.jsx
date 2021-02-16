import React, { Component } from 'react'

// Sub Components
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'
import RedPrimaryMetadata from './subcomponents/cameraCalibration/RedPrimaryMetadata'
import GreenPrimaryMetadata from './subcomponents/cameraCalibration/GreenPrimaryMetadata'
import BluePrimaryMetadata from './subcomponents/cameraCalibration/BluePrimaryMetadata'

// Utils
import { Context } from '../utils/Context'
import MetadataDisplay from './primitives/MetadataDisplay'

class CameraCalibrationMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Profile'>
          {this.context.state.imageMetadata?.CameraProfile?.value}
        </MetadataDisplay>
        <b>Shadows</b>
        <ShadowsMetadata metadata={this.context.state.imageMetadata} />
        <b>Red Primary</b>
        <RedPrimaryMetadata metadata={this.context.state.imageMetadata} />
        <b>Green Primary</b>
        <GreenPrimaryMetadata metadata={this.context.state.imageMetadata} />
        <b>Blue Primary</b>
        <BluePrimaryMetadata metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

CameraCalibrationMetadata.contextType = Context

export default CameraCalibrationMetadata
