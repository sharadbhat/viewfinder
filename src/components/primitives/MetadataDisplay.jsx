import React, { Component } from 'react'
import { Row, Col } from 'antd'

class MetadataDisplay extends Component {
  render() {
    return (
      <Row gutter={16} style={{ height: 30 }}>
        <Col style={{ width: 120 }}>
          <div style={{ float: 'right' }}>
            {this.props.title}
          </div>
        </Col>
        <Col flex={'auto'}>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}

export default MetadataDisplay
