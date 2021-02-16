import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class BalanceMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Balance</Col>
          <Col flex={3}>
          <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SplitToningBalance?.value)}
              valueString={this.props.metadata?.SplitToningBalance?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BalanceMetadata
