import { Fragment } from 'react'
import { Layout } from 'antd'

// Containers
import CameraDetailsView from './containers/CameraDetailsView'
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

const { Header, Content, Sider } = Layout

function App() {
  return (
    <Provider>
      <Layout className='site-layout'>
        <Content className='content'>
          <div className='desktop-hidden'>
            <Header>
              <h1 className='header'>
                ViewFinder
              </h1>
            </Header>
          </div>
          <div className='site-layout-content'>
            <div>
              <Consumer>
                {context => (
                  <Fragment>
                    {(context.state.imageData === null || context.state.imageData === undefined) &&
                      <div className='new-image-div'>
                        <div>
                          <ImageUploader />
                        </div>
                        <div>
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

          {/* FOR MOBILE */}
          <div className='mobile-visible details'>
            <div style={{ padding: 20 }}>
              <CameraDetailsView />
              <MetadataView />
            </div>
          </div>

          {/* FOR TABLET */}
          <div className='tablet-visible details'>
            <div className='camera-details-view'>
              <CameraDetailsView />
            </div>
            <div className='metadata-view'>
              <MetadataView />
            </div>
          </div>
        </Content>

        {/* FOR DESKTOP */}
        <div className='desktop-visible'>
          <Sider width={300} style={{ backgroundColor: '#E0E0E0' }}>
            <div className='camera-details-view'>
              <CameraDetailsView />
            </div>
          </Sider>
        </div>
        <div className='desktop-visible'>
          <Sider width={400} style={{ backgroundColor: '#E0E0E0', borderLeft: 'solid 5px lightgray' }}>
            <div className='metadata-view'>
              <MetadataView />
            </div>
          </Sider>
        </div>
        
      </Layout>
    </Provider>
  )
}

export default App
