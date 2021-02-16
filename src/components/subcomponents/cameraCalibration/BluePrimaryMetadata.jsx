import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class BluePrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Hue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, #41bf8d 0%, #685ca8 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.BlueHue?.value)}
              valueString={this.props.metadata?.BlueHue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Saturation</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, #393939 0%, #49a3c0 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.BlueSaturation?.value)}
              valueString={this.props.metadata?.BlueSaturation?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BluePrimaryMetadata
