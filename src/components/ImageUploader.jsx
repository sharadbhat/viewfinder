import React, { Component } from 'react'
import { Upload, message } from 'antd';

// Utils
import { Context } from '../utils/Context'

// Icons
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class ImageUploader extends Component {
  beforeUpload = async file => {
    const reader = new FileReader()

    reader.onloadend = e => {
      this.context.setImageData(reader.result)
      message.success('File uploaded successfully')
    }
    
    reader.readAsArrayBuffer(file)

    // Prevent upload
    return false
  }

  render() {
    return (
      <div>
        <Dragger
          height={300}
          style={{ backgroundColor: 'whitesmoke', borderRadius: 10 }}
          showUploadList={false}
          multiple={false}
          accept={['.jpg', '.jpeg']}
          name='file'
          beforeUpload={this.beforeUpload}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag image to this area to upload
          </p>
        </Dragger>
      </div>
    )
  }
}

ImageUploader.contextType = Context

export default ImageUploader
