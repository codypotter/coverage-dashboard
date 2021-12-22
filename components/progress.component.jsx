import { Row, Col, Space, Progress as AntdProgress } from 'antd';

const Progress = ({title, percent}) => (
    <>
        <Row justify="space-between" style={{width: "97%"}}>
            <Col>
                {title}
            </Col>
            <Col>
                <AntdProgress percent={percent} style={{width: "300px"}} />
            </Col>
        </Row>
    </>
)

export default Progress