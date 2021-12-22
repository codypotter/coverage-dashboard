import {Progress, Space} from "antd";

const FuncCoverage = ({func}) => (
    <>
        <Space style={{marginBottom: 16}}>
            <span>Function line coverage:</span>
            <Progress percent={(func.lineCoverage * 100).toFixed(2)} size="small" style={{width: 170}} />
        </Space>
        <p>This function was executed {func.executionCount} times.</p>
    </>
)

export default FuncCoverage