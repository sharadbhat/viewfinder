import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class RedPrimaryMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Hue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, #a01e4e 0%, #c6a14f 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.RedHue?.value)}
              valueString={this.props.metadata?.RedHue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Saturation</Col>
          <Col flex={3}>
          <GradientSlider
              gradientString={'linear-gradient(to right, #393939 0%, #d8475a 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.RedSaturation?.value)}
              valueString={this.props.metadata?.RedSaturation?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default RedPrimaryMetadata
