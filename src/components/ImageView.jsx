import React, { Component } from 'react'
import { Button } from 'antd'

// Utils
import { Context } from '../utils/Context'

class ImageView extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ borderRadius: 10, maxWidth: '600px', maxHeight: '500px' }}
          src={"data:image/jpg;base64, " + this.context.state.imageData}
          alt='Uploaded photograph'
        />
        <br/>
        <Button
          style={{ marginTop: 20 }}
          onClick={this.context.clearImageData}
        >
          Choose new image
        </Button>
      </div>
    )
  }
}

ImageView.contextType = Context

export default ImageView
