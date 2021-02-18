import React, { Component } from 'react'
import { Divider } from 'antd'
import Axios from 'axios'
import { v4 as uuid } from 'uuid'

// Utils
import { Context } from '../utils/Context.js'
import sampleList from "../utils/sampleImagesList.js"

class SampleImageList extends Component {
  selectImage = async imgSrc => {
    let fileData = await Axios.get(imgSrc, {
      responseType: 'arraybuffer'
    })
    this.context.setImageData(fileData.data)
  }

  render() {
    return (
      <div>
        <Divider plain style={{ borderColor: 'lightgray' }}>
          Try some sample images!
        </Divider>
        <div className='sample-list'>
          {sampleList.map((imgSrc, i) => {
            return (
              <img
                key={uuid()}
                width={125}
                height={125}
                src={imgSrc}
                alt={`sample${i}`}
                onClick={() => this.selectImage(imgSrc)}
              />
            )})
          }
        </div>
      </div>
    )
  }
}

SampleImageList.contextType = Context

export default SampleImageList
