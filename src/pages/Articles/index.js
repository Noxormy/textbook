import React from "react"
import {Card} from "antd"
import Meta from "antd/es/card/Meta"
import "./index.sass"


function Articles() {
    return (
        <div className="articles">
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
            <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                <Meta title="Card title" description="This is the description" />
            </Card>
        </div>
    )
}

export {Articles}
