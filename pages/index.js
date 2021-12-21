import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Divider, Typography, Layout ,Input } from 'antd'

const { Header, Footer, Content } = Layout
const { Title } = Typography

import 'antd/dist/antd.dark.css'

export default function Home(props) {
  const [coverageData, setCoverageData] = useState(null);

  const downloadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const jsonFile = event.target.files[0];
      
      let jsonText = await jsonFile.text()
      let p = document.createElement('p')
      p.innerHTML = jsonText
      document.querySelector("main").appendChild(p)
      console.log(JSON.parse(jsonText))
      setCoverageData(JSON.parse(jsonText));
    }
  };

  return (
    <div>
      <Head>
        <title>Coverage Report</title>
        <meta name="description" content="Code coverage report dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>
          <Title>Xcode Coverage Parser</Title>
        </Header>
        <Content>
          <Row justify="center">
            <Col span={12}>
              <label htmlFor='coverageData'>Choose a coverage JSON file:</label>
              <Input name='coverageData' type='file' onChange={downloadToClient} />
            </Col>
          </Row>
            
            
          
          <Divider></Divider>
        </Content>
        <Footer>

        </Footer>
      </Layout>
      
    </div>
  )
}
