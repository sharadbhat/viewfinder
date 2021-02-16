import { Col, Row } from 'antd'
import React, { Component } from 'react'

// Sub Components
import ShadowsMetadata from './subcomponents/splitToning/ShadowsMetadata'
import RedPrimaryMetadata from './subcomponents/cameraCalibration/RedPrimaryMetadata'
import GreenPrimaryMetadata from './subcomponents/cameraCalibration/GreenPrimaryMetadata'
import BluePrimaryMetadata from './subcomponents/cameraCalibration/BluePrimaryMetadata'

// Utils
import { Context } from '../utils/Context'

class CameraCalibrationMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Profile</Col>
          <Col flex={3}>{this.context.state.imageMetadata?.CameraProfile?.value}</Col>
        </Row>
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
