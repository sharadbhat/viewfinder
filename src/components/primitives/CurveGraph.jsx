import React, { Component } from 'react'
import { Spin } from 'antd'
import Chart from 'react-google-charts'

class CurveGraph extends Component {
  constructor(props) {
    super(props)

    this.lineColors = {
      'rgb': '#484848',
      'red': '#E12D39',
      'green': '#18981D',
      'blue': '#4C63B6'
    }
  }

  render() {
    return (
      <div>
        <Chart
          width={'180px'}
          height={'180px'}
          chartType='LineChart'
          loader={
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Spin />
              Loading tone curve...
            </div>
          }
          data={[
            ['x', 'y'],
            ...(this.props.datapoints?.length > 0 ? this.props.datapoints : [[0, 0], [255, 255]])
          ]}
          options={{
            animation: {
              duration: 300,
              easing: 'in'
            },
            backgroundColor: {
              fill: 'whitesmoke'
            },
            chartArea: {
              width: '90%',
              height: '90%',
              backgroundColor: {
                stroke: '#000000'
              }
            },
            lineWidth: 2,
            series: {
              0: {
                color: this.lineColors[this.props.color],
                visibleInLegend: false,
                curveType: 'function',
                pointSize: 7
              },
            },
            enableInteractivity: false,
            hAxis: {
              ticks: [0, 64, 128, 192, 255],
              textPosition: 'none',
              minValue: 0,
              maxValue: 255
            },
            vAxis: {
              ticks: [0, 64, 128, 192, 255],
              textPosition: 'none',
              minValue: 0,
              maxValue: 255
            }
          }}
        />
      </div>
    )
  }
}

export default CurveGraph
