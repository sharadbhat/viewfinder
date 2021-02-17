import { Fragment } from 'react'
import { Layout } from 'antd'

// Containers
import MetadataView from './containers/MetadataView'

// Components
import ImageUploader from './components/ImageUploader'
import SampleImageList from './components/SampleImageList'
import ImageView from './components/ImageView'

// Utils
import { Consumer, Provider } from './utils/Context'

// CSS
import './App.css'
import 'antd/dist/antd.css'

const { Content, Sider } = Layout

function App() {
  return (
    <Provider>
      <Layout className='site-layout'>
        <Content className='content'>
          <div className='site-layout-content'>
            <div>
              <Consumer>
                {context => (
                  <Fragment>
                    {(context.state.imageData === null || context.state.imageData === undefined) &&
                      <div className='new-image-div'>
                        <ImageUploader />
                        <div style={{ marginTop: 100 }}>
                          <SampleImageList />
                        </div>
                      </div>
                    }
                    {(context.state.imageData === null || context.state.imageData === undefined) ||
                      <ImageView />
                    }
                  </Fragment>
                )}
              </Consumer>
            </div>
          </div>
        </Content>
        <Sider width={400} style={{ backgroundColor: '#E0E0E0' }}>
          <MetadataView />
        </Sider>
      </Layout>
    </Provider>
  )
}

export default App
