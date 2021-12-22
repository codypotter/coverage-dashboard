import {Collapse, Descriptions, Space} from 'antd'
import Progress from './progress.component'
import FuncCoverage from './func-coverage.component'

const { Panel } = Collapse

const FileCoverage = ({file}) => (
    <>
        <Descriptions title="File Info" bordered style={{marginBottom: 16}}>
            <Descriptions.Item label="Path" span={3}>{file.path}</Descriptions.Item>
            <Descriptions.Item label="Total executable lines" span={2}>{file.executableLines}</Descriptions.Item>
            <Descriptions.Item label="Lines hit" span={1}>{file.coveredLines}</Descriptions.Item>
        </Descriptions>

        <Collapse>
            {
                file.functions.map((func) => (
                    <Panel header={<Progress percent={(func.lineCoverage * 100).toFixed(2)} title={func.name}/>} key={func.name}>
                        <FuncCoverage func={func} />
                    </Panel>
                ))
            }
        </Collapse>
    </>
)

export default FileCoverage