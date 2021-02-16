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
      <div style={{ height: '100vh', overflow: 'scroll', padding: '0 30px 0 30px' }}>
        <Divider orientation='right' style={{ borderColor: '#000' }}>Basic</Divider>
        <BasicMetadata />
        <Divider orientation='right' style={{ borderColor: '#000' }}>HSL</Divider>
        <HSLMetadata />
        <Divider orientation='right' style={{ borderColor: '#000' }}>Split Toning</Divider>
        <SplitToningMetadata />
        <Divider orientation='right' style={{ borderColor: '#000' }}>Detail</Divider>
        <DetailMetadata />
        <Divider orientation='right' style={{ borderColor: '#000' }}>Effects</Divider>
        <EffectsMetadata />
        <Divider orientation='right' style={{ borderColor: '#000' }}>Camera Calibration</Divider>
        <CameraCalibrationMetadata />
      </div>
    )
  }
}

MetadataView.contextType = Context

export default MetadataView
