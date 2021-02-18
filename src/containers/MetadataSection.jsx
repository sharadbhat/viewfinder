import React, { Component } from 'react'
import { Divider } from 'antd'

class MetadataSection extends Component {
  render() {
    return (
      <div className='metadata-section'>
        <Divider orientation='right' style={{ borderColor: '#000000' }}>{this.props.title}</Divider>
        {this.props.children}
      </div>
    )
  }
}

export default MetadataSection
