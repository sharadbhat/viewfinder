import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class LuminanceMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Red</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #391313, #993333, #e6b3b3)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentRed?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentRed?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Orange</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #392613, #996633, #e6ccb3)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentOrange?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentOrange?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Yellow</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #393913, #999933, #e6e6b3)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentYellow?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentYellow?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Green</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #263913, #669933, #cce6b3)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentGreen?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentGreen?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Aqua</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #133939, #339999, #b3e6e6)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentAqua?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentAqua?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Blue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #131339, #333399, #b3b3e6)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentBlue?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentBlue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Purple</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #261339, rebeccapurple, #ccb3e6)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentPurple?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentPurple?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Magenta</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #391339, #993399, #e6b3e6)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.LuminanceAdjustmentMagenta?.value)}
              valueString={this.props.metadata?.LuminanceAdjustmentMagenta?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default LuminanceMetadata
