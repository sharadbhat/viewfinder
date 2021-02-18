import React, { Component } from 'react'

// Sub Components
import Curves from './subcomponents/toneCurve/Curves'

// Utils
import { Context } from '../utils/Context'

class ToneCurve extends Component {
  render() {
    return (
      <div>
        <Curves metadata={this.context.state.imageMetadata} />
      </div>
    )
  }
}

ToneCurve.contextType = Context

export default ToneCurve
