import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class WBMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>White Balance</Col>
          <Col flex={3}>{this.props.metadata?.WhiteBalance?.value}</Col>
        </Row>
        <Row>
          <Col flex={2}>Temperature</Col>
          <Col flex={3}>{this.props.metadata?.Temperature?.value}</Col>
        </Row>
        <Row>
          <Col flex={2}>Tint</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(59, 153, 58) 0%, rgb(99, 97, 100) 50%, rgb(153, 57, 152) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Tint?.value)}
              valueString={this.props.metadata?.Tint?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default WBMetadata
