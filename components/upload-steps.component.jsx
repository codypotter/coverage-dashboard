import {Steps} from 'antd'

const { Step } = Steps

const UploadSteps = () => (
    <Steps direction="vertical" size="small" current={-1}>
        <Step title="Enable" description="Change your Xcode build scheme settings to gather code coverage">
            Here is some stuff inside?
        </Step>
        <Step title="Test" description="Kick off a test run and reveal in Finder">

        </Step>
        <Step title="Convert" description="xcrun xccov view --report --json <test>.xcresult">

        </Step>
        <Step title="Upload" description="Upload the json file to this page">

        </Step>
    </Steps>
)

export default UploadSteps