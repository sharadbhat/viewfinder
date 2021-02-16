import React, { Component } from 'react'
import { Row, Col } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class PostCropVignettingMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Amount</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, silver 50%, #000000 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.PostCropVignetteAmount?.value)}
              valueString={this.props.metadata?.PostCropVignetteAmount?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Midpoint</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.PostCropVignetteMidpoint?.value)}
              valueString={this.props.metadata?.PostCropVignetteMidpoint?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Roundness</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, silver 50%, #000000 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.PostCropVignetteRoundness?.value)}
              valueString={this.props.metadata?.PostCropVignetteRoundness?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Feather</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.PostCropVignetteFeather?.value)}
              valueString={this.props.metadata?.PostCropVignetteFeather?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Highlights</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #000000 0%, #ffffff 100%)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.PostCropVignetteHighlights?.value)}
              valueString={this.props.metadata?.PostCropVignetteHighlights?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default PostCropVignettingMetadata
