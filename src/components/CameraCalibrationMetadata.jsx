import React, { Component } from 'react'

// Sub Components
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'
import RedPrimaryMetadata from './subcomponents/cameraCalibration/RedPrimaryMetadata'
import GreenPrimaryMetadata from './subcomponents/cameraCalibration/GreenPrimaryMetadata'
import BluePrimaryMetadata from './subcomponents/cameraCalibration/BluePrimaryMetadata'

// Primitives
import MetadataDisplay from './primitives/MetadataDisplay'
import MetadataSubheading from './primitives/MetadataSubheading'

// Utils
import { Context } from '../utils/Context'

class CameraCalibrationMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataDisplay title='Profile'>
          {this.context.state.imageMetadata?.CameraProfile?.value}
        </MetadataDisplay>
        <br/>
        <MetadataSubheading>Shadows</MetadataSubheading>
        <ShadowsMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Red Primary</MetadataSubheading>
        <RedPrimaryMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Green Primary</MetadataSubheading>
        <GreenPrimaryMetadata metadata={this.context.state.imageMetadata} />
        <br/>
        <MetadataSubheading>Blue Primary</MetadataSubheading>
        <BluePrimaryMetadata metadata={this.context.state.imageMetadata} />
        <br/>
      </div>
    )
  }
}

CameraCalibrationMetadata.contextType = Context

export default CameraCalibrationMetadata
