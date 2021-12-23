import { Descriptions } from 'antd'

const FuncCoverage = ({func}) => (
    <>
        <Descriptions title="Function Info" bordered style={{marginBottom: 16}}>
            <Descriptions.Item label="Total executable lines" span={2}>{func.executableLines}</Descriptions.Item>
            <Descriptions.Item label="Lines hit" span={1}>{func.coveredLines}</Descriptions.Item>
            <Descriptions.Item label="Function executions" span={3}>{func.executionCount}</Descriptions.Item>
        </Descriptions>
    </>
)

export default FuncCoverage