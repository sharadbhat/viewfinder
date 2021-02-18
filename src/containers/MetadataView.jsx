import React, { Component } from 'react'
import { Typography } from 'antd'
import { v4 as uuid } from 'uuid'

// Containers
import MetadataSection from './MetadataSection'

// Components
import BasicMetadata from '../components/BasicMetadata'
import ToneCurve from '../components/ToneCurve'
import HSLMetadata from '../components/HSLMetadata'
import SplitToningMetadata from '../components/SplitToningMetadata'
import DetailMetadata from '../components/DetailMetadata'
import EffectsMetadata from '../components/EffectsMetadata'
import CameraCalibrationMetadata from '../components/CameraCalibrationMetadata'

// Utils
import { Context } from '../utils/Context'

const { Title } = Typography

let sectionsList = [
  {
    title: 'Basic',
    component: BasicMetadata
  },
  {
    title: 'Tone Curve',
    component: ToneCurve,
  },
  {
    title: 'HSL',
    component: HSLMetadata
  },
  {
    title: 'Split Toning',
    component: SplitToningMetadata
  },
  {
    title: 'Detail',
    component: DetailMetadata
  },
  {
    title: 'Effects',
    component: EffectsMetadata
  },
  {
    title: 'Camera Calibration',
    component: CameraCalibrationMetadata
  }
]

class MetadataView extends Component {
  render() {
    return (
      <div>
        <Title level={5}>Lightroom Settings</Title>
        {sectionsList.map(object => {
          return (
            <MetadataSection key={uuid()} title={object.title}>
              <object.component />
            </MetadataSection>
          )
        })}
      </div>
    )
  }
}

MetadataView.contextType = Context

export default MetadataView
