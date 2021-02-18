import React, { Component } from 'react'
import { Button } from 'antd'

// Utils
import { Context } from '../utils/Context'

class ImageView extends Component {
  render() {
    return (
      <div className='image-view'>
        <img
          src={"data:image/jpg;base64, " + this.context.state.imageData}
          alt='Uploaded photograph'
        />
        <br/>
        <Button
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
