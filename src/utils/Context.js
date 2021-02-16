import React, { Component } from 'react'

// Utils
import getXMP from './getXMP'

const Context = React.createContext()

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageData: null,
      imageMetadata: null
    }
  }

  setImageData = imageDataArrayBuffer => {
    this.setState({
      imageData: Buffer.from(imageDataArrayBuffer).toString('base64'),
      imageMetadata: getXMP(imageDataArrayBuffer)
    })
  }

  clearImageData = () => {
    this.setState({
      imageData: null,
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
