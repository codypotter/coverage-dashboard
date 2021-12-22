import { Collapse, Progress, Space, Descriptions } from 'antd'

import FileCoverage from "./file-coverage.component";

const { Panel } = Collapse

const TargetCoverage = ({target}) => (
    <>
        <Descriptions  title="Target Info" bordered>
            <Descriptions.Item label="Build Path" span={3}>{target.buildProductPath}</Descriptions.Item>
            <Descriptions.Item label="Total Executable Lines" span={2}>{target.executableLines}</Descriptions.Item>
            <Descriptions.Item label="Lines hit" span={1}>{target.coveredLines}</Descriptions.Item>
        </Descriptions>

        <Collapse>
            {
                target.files.map((file) => (
                    <Panel header={file.name} key={file.name}>
                        <FileCoverage file={file} />
                    </Panel>
                ))
            }
        </Collapse>
    </>
)

export default TargetCoverage