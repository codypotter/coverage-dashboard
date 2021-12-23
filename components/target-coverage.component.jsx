import { Collapse, Descriptions } from 'antd'
import PanelContent from './panel-content.component'
import FileCoverage from './file-coverage.component'

const { Panel } = Collapse

const TargetCoverage = ({target}) => (
    <>
        <Descriptions  title="Target Info" bordered style={{marginBottom: 16}}>
            <Descriptions.Item label="Build path" span={3}>{target.buildProductPath}</Descriptions.Item>
            <Descriptions.Item label="Total executable lines" span={2}>{target.executableLines}</Descriptions.Item>
            <Descriptions.Item label="Lines hit" span={1}>{target.coveredLines}</Descriptions.Item>
        </Descriptions>

        <Collapse>
            {
                target.files.map((file) => (
                    <Panel header={<PanelContent type="file"
                                                 percent={(file.lineCoverage * 100).toFixed(2)}
                                                 title={file.name}/>}
                           key={file.name}>
                        <FileCoverage file={file} />
                    </Panel>
                ))
            }
        </Collapse>
    </>
)

export default TargetCoverage