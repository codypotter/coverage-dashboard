import {Collapse, Progress, Space} from 'antd'
import FuncCoverage from './func-coverage.component'

const { Panel } = Collapse

const FileCoverage = ({file}) => (
    <>
        <Space style={{marginBottom: 16}}>
            File line coverage:
            <Progress percent={(file.lineCoverage * 100).toFixed(2)} size="small" style={{width: 170}} />
        </Space>
        <Collapse>
            {
                file.functions.map((func) => (
                    <Panel header={func.name} key={func.name}>
                        <FuncCoverage func={func} />
                    </Panel>
                ))
            }
        </Collapse>
    </>
)

export default FileCoverage