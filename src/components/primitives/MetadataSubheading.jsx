import React, { Component } from 'react'

class MetadataSubheading extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginBottom: 7 }}>
        <b>
          {this.props.children}
        </b>
      </div>
    )
  }
}

export default MetadataSubheading
