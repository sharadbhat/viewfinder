import React, { Component } from 'react'
import { Col, Row } from 'antd'

// Primitives
import GradientSlider from '../../primitives/GradientSlider'

class ToneMetadata extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col flex={2}>Exposure</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%)'}
              min={-4}
              max={4}
              value={parseFloat(this.props.metadata?.Exposure2012?.value)}
              valueString={this.props.metadata?.Exposure2012?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Contrast</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Contrast2012?.value)}
              valueString={this.props.metadata?.Contrast2012?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Highlights</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Highlights2012?.value)}
              valueString={this.props.metadata?.Highlights2012?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Shadows</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Shadows2012?.value)}
              valueString={this.props.metadata?.Shadows2012?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Whites</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Whites2012?.value)}
              valueString={this.props.metadata?.Whites2012?.value}
            />
          </Col>
        </Row>
        <Row>
          <Col flex={2}>Blacks</Col>
          <Col flex={3}>
            <GradientSlider
              gradientString={'linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)'}
              min={-100}
              max={100}
              value={parseInt(this.props.metadata?.Blacks2012?.value)}
              valueString={this.props.metadata?.Blacks2012?.value}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ToneMetadata
