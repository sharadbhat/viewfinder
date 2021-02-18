import React, { Component } from 'react'
import { Tag } from 'antd'

class MetadataSubheading extends Component {
  render() {
    return (
      <div className='metadata-subheading'>
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
