import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class SharpeningMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Amount</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, silver 66.67%, #bf4040 100%)'}
              min={0}
              max={150}
              value={parseInt(this.props.metadata?.Sharpness?.value)}
              valueString={this.props.metadata?.Sharpness?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Radius</Col>
          <Col flex={3}>{this.props.metadata?.SharpenRadius?.value}</Col>
        </Row>
        <Row>
          <Col flex={2}>Detail</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.SharpenDetail?.value)}
              valueString={this.props.metadata?.SharpenDetail?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Masking</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.SharpenEdgeMasking?.value)}
              valueString={this.props.metadata?.SharpenEdgeMasking?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SharpeningMetadata


