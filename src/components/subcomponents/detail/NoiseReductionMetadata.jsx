import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class NoiseReductionMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Luminance</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceSmoothing?.value)}
              valueString={this.props.metadata?.LuminanceSmoothing?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Color</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.ColorNoiseReduction?.value)}
              valueString={this.props.metadata?.ColorNoiseReduction?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Detail</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.ColorNoiseReductionDetail?.value)}
              valueString={this.props.metadata?.ColorNoiseReductionDetail?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Smoothness</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.ColorNoiseReductionSmoothness?.value)}
              valueString={this.props.metadata?.ColorNoiseReductionSmoothness?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default NoiseReductionMetadata


