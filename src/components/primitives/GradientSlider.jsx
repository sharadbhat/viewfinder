import React, { Component } from 'react'
import { Slider } from 'antd'

class GradientSlider extends Component {
  render() {
    return (
      <div>
        <Slider
          min={this.props.min || 0}
          max={this.props.max || 100}
          defaultValue={this.props.defaultValue || 0}
          value={this.props.value}
          railStyle={{
            backgroundImage: this.props.gradientString
          }}
          trackStyle={{ 
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          handleStyle={{
            borderColor: 'grey'
          }}
        />
      </div>
    )
  }
}

export default GradientSlider
