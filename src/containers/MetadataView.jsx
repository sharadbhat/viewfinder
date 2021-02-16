import React, { Component } from 'react'
import { Divider } from 'antd'

// Components
import BasicMetadata from '../components/BasicMetadata'
import HSLMetadata from '../components/HSLMetadata'
import SplitToningMetadata from '../components/SplitToningMetadata'
import DetailMetadata from '../components/DetailMetadata'
import EffectsMetadata from '../components/EffectsMetadata'
import CameraCalibrationMetadata from '../components/CameraCalibrationMetadata'

// Utils
import { Context } from '../utils/Context'

class MetadataView extends Component {
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'scroll' }}>
        <Divider orientation='right'>Basic</Divider>
        <BasicMetadata />
        <Divider orientation='right'>HSL</Divider>
        <HSLMetadata />
        <Divider orientation='right'>Split Toning</Divider>
        <SplitToningMetadata />
        <Divider orientation='right'>Detail</Divider>
        <DetailMetadata />
        <Divider orientation='right'>Effects</Divider>
        <EffectsMetadata />
        <Divider orientation='right'>Camera Calibration</Divider>
        <CameraCalibrationMetadata />
      </div>
    )
  }
}

MetadataView.contextType = Context

export default MetadataView
