import Head from 'next/head'
import { useState } from 'react'
import { PageHeader, Collapse, Row, Col, Divider, Typography, Layout ,Input } from 'antd'
import Coverage from '../components/coverage.component'

const { Header, Footer, Content } = Layout
const { Title } = Typography
const { Panel } = Collapse

import 'antd/dist/antd.dark.css'
import UploadSteps from "../components/upload-steps.component";

export default function Home(props) {
  const [coverageData, setCoverageData] = useState(null);

  const downloadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const jsonFile = event.target.files[0];
      
      let jsonText = await jsonFile.text()

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
              <label htmlFor='coverageData'>Choose a coverage JSON file:</label>
              <Input name='coverageData' type='file' onChange={downloadToClient} />
            </Col>
          </Row>

          <Divider/>

          <Row justify="center">
            <Col span={20}>
              {
                !coverageData ? <UploadSteps /> : <Coverage data={coverageData} />
              }
            </Col>
          </Row>

        </Content>
        <Footer>

        </Footer>
      </Layout>
      
    </div>
  )
}
