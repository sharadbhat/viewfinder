import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class SaturationMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Red</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #dd3c3c)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentRed?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentRed?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Orange</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #dd8c3c)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentOrange?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentOrange?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Yellow</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #dddd3c)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentYellow?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentYellow?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Green</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #8cdd3c)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentGreen?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentGreen?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Aqua</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #3cdddd)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentAqua?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentAqua?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Blue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #3c3cdd)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentBlue?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentBlue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Purple</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #8c3cdd)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentPurple?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentPurple?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Magenta</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #dd3cdd)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.SaturationAdjustmentMagenta?.value)}
              valueString={this.props.metadata?.SaturationAdjustmentMagenta?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SaturationMetadata
