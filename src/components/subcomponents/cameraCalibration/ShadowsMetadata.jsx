import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class ShadowsMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Tint</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(59, 153, 58) 0%, rgb(99, 97, 100) 50%, rgb(153, 57, 152) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.ShadowTint?.value)}
              valueString={this.props.metadata?.ShadowTint?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ShadowsMetadata
