import { Result, Collapse } from 'antd'

const { Panel } = Collapse
import TargetCoverage from './target-coverage.component'
import PanelContent from './panel-content.component'

const Coverage = ({data}) => (
    <>
        <Result
            status={data.lineCoverage > 0.60 ? "success" : "warning" }
            title={`Your project's line coverage is ${(data.lineCoverage * 100).toFixed(2)}%`}
            subtitle={`Your test covered ${data.coveredLines} out of ${data.executableLines} executable lines.`}
        />
        <div>
            Your test covered {data.coveredLines} out of {data.executableLines} executable lines.
        </div>
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
