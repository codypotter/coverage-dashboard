import {Result, Collapse, Descriptions} from 'antd'

const { Panel } = Collapse
import TargetCoverage from './target-coverage.component'
import PanelContent from './panel-content.component'

const Coverage = ({data}) => (
    <>
        <Result
            status={data.lineCoverage > 0.60 ? "success" : "warning" }
            title={`Your project coverage is ${(data.lineCoverage * 100).toFixed(2)}%`}
        />
        <Descriptions  title="Coverage Details" bordered style={{marginBottom: 16}}>
            <Descriptions.Item label="Total executable lines" span={1}>{data.executableLines}</Descriptions.Item>
            <Descriptions.Item label="Lines hit" span={1}>{data.coveredLines}</Descriptions.Item>
        </Descriptions>
        <Collapse>
            {
                data.targets.map((target) => (
                    <Panel header={<PanelContent type="target" title={target.name} percent={(target.lineCoverage * 100).toFixed(2)}/>} key={target.name}>
                        <TargetCoverage target={target}/>
                    </Panel>
                ))
            }
        </Collapse>
    </>
)

export default Coverage
