import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class GreenPrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Hue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, #a8bc40 0%, #49cb9e 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.GreenHue?.value)}
              valueString={this.props.metadata?.GreenHue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Saturation</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, #393939 0%, #6bb341 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.GreenSaturation?.value)}
              valueString={this.props.metadata?.GreenSaturation?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default GreenPrimaryMetadata
