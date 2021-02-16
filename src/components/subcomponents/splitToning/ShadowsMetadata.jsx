import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class ShadowsMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col flex={2}>Hue</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(172, 87, 83) 0%, rgb(173, 131, 85) 10%, rgb(135, 158, 93) 25%, rgb(85, 169, 172) 50%, rgb(99, 85, 172) 75%, rgb(172, 83, 133) 90%, rgb(172, 82, 107) 100%)'}
              min={0}
              max={360}
              value={parseInt(this.props.metadata?.SplitToningShadowHue?.value)}
              valueString={this.props.metadata?.SplitToningShadowHue?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Saturation</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(90deg, #424242, #bf4040)'}
              min={0}
              max={100}
              value={parseInt(this.props.metadata?.SplitToningShadowSaturation?.value)}
              valueString={this.props.metadata?.SplitToningShadowSaturation?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ShadowsMetadata
