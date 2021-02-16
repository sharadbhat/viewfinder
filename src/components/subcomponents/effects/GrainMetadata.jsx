import React, { Component } from 'react'
import { Row, Col } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class GrainMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Amount</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.GrainAmount?.value)}
              valueString={this.props.metadata?.GrainAmount?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Size</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.GrainSize?.value)}
              valueString={this.props.metadata?.GrainSize?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Roughness</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.GrainFrequency?.value)}
              valueString={this.props.metadata?.GrainFrequency?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default GrainMetadata
