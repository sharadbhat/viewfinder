import React, { Component } from 'react'

// Primitives
import MetadataSubheading from '../components/primitives/MetadataSubheading'

class MetadataSubsection extends Component {
  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        {this.props.subheading &&
          <MetadataSubheading>{this.props.subheading}</MetadataSubheading>
        }
        {this.props.children}
      </div>
    )
  }
}

export default MetadataSubsection
