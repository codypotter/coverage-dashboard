import Head from 'next/head'
import { useState } from 'react'
import { PageHeader, Space, Steps, Row, Col, Divider, Typography, Layout ,Input } from 'antd'

const { Header, Footer, Content } = Layout
const { Title } = Typography
const { Step } = Steps

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
      <Layout hasSider={false}>
        <Header>
          <PageHeader
            backIcon={false}
            title="Xcode Coverage Dashboard"
          />

        </Header>
        <Content>
          <Row justify="center" style={{marginTop: "16px"}}>
            <Col>
              <Steps direction="vertical" size="small" current={-1}>
                <Step title="Enable" description="Change your Xcode build scheme settings to gather code coverage">
                  Here is some stuff inside?
                </Step>
                <Step title="Test" description="Kick off a test run and reveal in Finder">

                </Step>
                <Step title="Convert" description="xcrun xccov view --report --json <test>.xcresult">

                </Step>
                <Step title="Upload" description="Upload the json file to this page">

                </Step>
              </Steps>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <label htmlFor='coverageData'>Choose a coverage JSON file:</label>
              <Input name='coverageData' type='file' onChange={downloadToClient} />
            </Col>
          </Row>
          <Divider/>

        </Content>
        <Footer>

        </Footer>
      </Layout>
      
    </div>
  )
}
