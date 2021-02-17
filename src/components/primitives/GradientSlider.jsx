import React, { Component } from 'react'
import { Col, Row, Slider } from 'antd'

class GradientSlider extends Component {
  render() {
    return (
      <Row>
        <Col style={{ width: 150 }}>
          <Slider
            tooltipVisible={false}
            min={this.props.min || 0}
            max={this.props.max || 100}
            defaultValue={this.props.defaultValue || 0}
            value={this.props.value}
            style={{ cursor: 'default' }}
            railStyle={{
              backgroundImage: this.props.gradientString
            }}
            trackStyle={{
              backgroundColor: 'rgba(0,0,0,0)'
            }}
            handleStyle={{
              cursor: 'default',
              borderColor: 'grey'
            }}
          />
        </Col>
        <Col>
          {this.props.valueString || ''}
        </Col>
      </Row>
    )
  }
}

export default GradientSlider
