import { Fragment } from 'react'
import { Layout } from 'antd'

// Containers
import MetadataView from './containers/MetadataView'

// Components
import ImageUploader from './components/ImageUploader'
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
      <Layout style={{ height: '100vh' }}>
        <Content style={{ padding: '25px' }}>
          <div className='site-layout-content'>
            <div>
              <Consumer>
                {context => (
                  <Fragment>
                    {(context.state.imageData === null || context.state.imageData === undefined) &&
                      <div style={{ width: '40vw', margin: '0 auto' }}>
                        <ImageUploader />
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
        <Sider width={400} theme='light' style={{ borderLeft: 'solid 2px grey' }}>
          <MetadataView />
        </Sider>
      </Layout>
    </Provider>
  )
}

export default App
