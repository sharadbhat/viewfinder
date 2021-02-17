import React, { Component } from 'react'

// Utils
import getMetadata from './getMetadata'

const Context = React.createContext()

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageData: null,
      imageExif: null,
      imageMetadata: null
    }
  }

  setImageData = imageDataArrayBuffer => {
    let metadata = getMetadata(imageDataArrayBuffer) || null
    this.setState({
      imageData: Buffer.from(imageDataArrayBuffer).toString('base64'),
      imageExif: metadata?.exif,
      imageMetadata: metadata?.xmp
    })
  }

  clearImageData = () => {
    this.setState({
      imageData: null,
      imageExif: null,
      imageMetadata: null
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setImageData: this.setImageData,
          clearImageData: this.clearImageData
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, Provider }

export const Consumer = Context.Consumer
