import React, { Component } from 'react'
import { Radio } from 'antd'

// Primitives
import CurveGraph from '../../primitives/CurveGraph'

class Curves extends Component {
  constructor(props) {
    super(props)

    this.state = {
      radioValue: 'rgb',
      datapoints: []
    }

    this.radioOptions = [
      {
        label: 'RGB',
        value: 'rgb'
      },
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      },
      {
        label: 'Blue',
        value: 'blue'
      }
    ]

    this.toneCurveMap = {
      'rgb': 'ToneCurvePV2012',
      'red': 'ToneCurvePV2012Red',
      'green': 'ToneCurvePV2012Green',
      'blue': 'ToneCurvePV2012Blue',
    }
  }

  componentDidMount = () => {
    this.formatDataPoints(this.props.metadata?.[this.toneCurveMap['rgb']] || [])
  }

  formatDataPoints = rawData => {
    let formattedData = []

    rawData?.value?.forEach(point => {
      formattedData.push(JSON.parse('[' + point.value + ']'))
    })

    this.setState({
      datapoints: formattedData
    })
  }

  updateRadioValue = value => {
    this.formatDataPoints(this.props.metadata?.[this.toneCurveMap[value.target.value]] || [])

    this.setState({
      radioValue: value.target.value
    })
  }

  render() {
    return (
      <div className='curves'>
        <Radio.Group
          style={{ marginBottom: 15, borderRadius: 5 }}
          optionType='button'
          buttonStyle='solid'
          options={this.radioOptions}
          value={this.state.radioValue}
          onChange={this.updateRadioValue}
          defaultValue={'rgb'}
        />

        <CurveGraph
          color={this.state.radioValue}
          datapoints={this.state.datapoints}
        />
      </div>
    )
  }
}

export default Curves
