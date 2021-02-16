import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class HueMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Red</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #d147d1, #d14747, #d18c47)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentRed?.value)}
              valueString={this.props.metadata?.HueAdjustmentRed?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Orange</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #d14747, #d18c47, #d1d147)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentOrange?.value)}
              valueString={this.props.metadata?.HueAdjustmentOrange?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Yellow</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #d18c47, #d1d147, #8cd147)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentYellow?.value)}
              valueString={this.props.metadata?.HueAdjustmentYellow?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Green</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #d1d147, #8cd147, #47d1d1)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentGreen?.value)}
              valueString={this.props.metadata?.HueAdjustmentGreen?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Aqua</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #8cd147, #47d1d1, #4747d1)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentAqua?.value)}
              valueString={this.props.metadata?.HueAdjustmentAqua?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Blue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #47d1d1, #4747d1, #8c47d1)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentBlue?.value)}
              valueString={this.props.metadata?.HueAdjustmentBlue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Purple</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #4747d1, #8c47d1, #d147d1)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentPurple?.value)}
              valueString={this.props.metadata?.HueAdjustmentPurple?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Magenta</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #8c47d1, #d147d1, #d14747)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.HueAdjustmentMagenta?.value)}
              valueString={this.props.metadata?.HueAdjustmentMagenta?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default HueMetadata
