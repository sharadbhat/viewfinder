import React, { Component } from 'react'
import { Descriptions, Tag } from 'antd'

// Utils
import { Context } from '../utils/Context'

const { Item } = Descriptions

class CameraDetailsView extends Component {
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'scroll', padding: 20 }}>
        <Descriptions
        size={'small'}
          layout='vertical'
          colon={false}
          column={2}
          contentStyle={{ fontWeight: 600, marginBottom: 20 }}
        >
          <Item span={2} label={
            <Tag>Camera Model</Tag>
          }>
            {this.context.state.imageExif?.Make?.description} {this.context.state.imageExif?.Model?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Lens Model</Tag>
          }>
            {this.context.state.imageExif?.LensModel?.description || '—'}
          </Item>
          <Item label={
            <Tag>Focal Length</Tag>
          }>
            {this.context.state.imageExif?.FocalLength?.description || '—'}
          </Item>
          <Item label={
            <Tag>Aperture</Tag>
          }>
            {this.context.state.imageExif?.FNumber?.description || 'f/—'}
          </Item>
          <Item label={
            <Tag>Shutter Speed</Tag>
          }>
            {this.context.state.imageExif?.ShutterSpeedValue?.description || '— '}s
          </Item>
          <Item label={
            <Tag>ISO</Tag>
          }>
            {this.context.state.imageExif?.ISOSpeedRatings?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Metering Mode</Tag>
          }>
           {this.context.state.imageExif?.MeteringMode?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Exposure Program</Tag>
          }>
            {this.context.state.imageExif?.ExposureProgram?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Exposure Compensation</Tag>
          }>
            {this.context.state.imageExif?.ExposureBiasValue?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Flash</Tag>
          }>
            {this.context.state.imageExif?.Flash?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Software</Tag>
          }>
            {this.context.state.imageExif?.Software?.description || '—'}
          </Item>
          <Item span={2} label={
            <Tag>Copyright</Tag>
          }>
            {this.context.state.imageExif?.Copyright?.description || '—'}
          </Item>
        </Descriptions>
      </div>
    )
  }
}

CameraDetailsView.contextType = Context

export default CameraDetailsView
