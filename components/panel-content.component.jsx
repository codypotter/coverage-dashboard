import { Row, Col, Progress as AntdProgress } from 'antd'
import { FileTextFilled, AppleFilled, FundFilled, BugFilled } from '@ant-design/icons'

const PanelContent = ({title, percent, type}) => (
    <>
        <Row justify="space-between" style={{width: "96%", marginRight: 8}}>
            <Col>
                <Row gutter={8}>
                    <Col>
                        {do {
                            switch(type) {
                                case 'file': <FileTextFilled />; break;
                                case 'target': <AppleFilled />; break;
                                case 'function': <FundFilled />; break;
                                default: <BugFilled />
                            }
                        }}
                    </Col>
                    <Col>
                        {title}
                    </Col>
                </Row>

            </Col>
            <Col>
                <AntdProgress percent={percent} style={{width: "300px"}} />
            </Col>
        </Row>
    </>
)

export default PanelContent