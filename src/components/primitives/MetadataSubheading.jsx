import React, { Component } from 'react'
import { Tag } from 'antd'

class MetadataSubheading extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginBottom: 7 }}>
        <Tag>
          <b>
            {this.props.children}
          </b>
        </Tag>
      </div>
    )
  }
}

export default MetadataSubheading
