import { Space, Progress as AntdProgress } from 'antd';

const Progress = ({title, percent}) => (
    <>
        <Space>
            <span>{title}</span>
            <AntdProgress percent={percent} size="small" style={{width: 170}} />
        </Space>
    </>
)

export default Progress