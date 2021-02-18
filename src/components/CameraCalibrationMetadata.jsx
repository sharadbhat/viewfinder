import React, { Component } from 'react'

// Containers
import MetadataSubsection from '../containers/MetadataSubsection'

// Sub Components
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'
import RedPrimaryMetadata from './subcomponents/cameraCalibration/RedPrimaryMetadata'
import GreenPrimaryMetadata from './subcomponents/cameraCalibration/GreenPrimaryMetadata'
import BluePrimaryMetadata from './subcomponents/cameraCalibration/BluePrimaryMetadata'

// Primitives
import MetadataDisplay from './primitives/MetadataDisplay'

// Utils
import { Context } from '../utils/Context'

class CameraCalibrationMetadata extends Component {
  render() {
    return (
      <div>
        <MetadataSubsection subheading=''>
          <MetadataDisplay title='Profile'>
            {this.context.state.imageMetadata?.CameraProfile?.value || '—'}
          </MetadataDisplay>
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Shadows'>
          <ShadowsMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Red Primary'>
          <RedPrimaryMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Green Primary'>
          <GreenPrimaryMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
        
        <MetadataSubsection subheading='Blue Primary'>
          <BluePrimaryMetadata metadata={this.context.state.imageMetadata} />
        </MetadataSubsection>
      </div>
    )
  }
}

CameraCalibrationMetadata.contextType = Context

export default CameraCalibrationMetadata
