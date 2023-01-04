import React from "react"
import {Card} from "antd"
import Meta from "antd/es/card/Meta"
import "./index.sass"
import {Link} from "react-router-dom"


function Articles() {
    return (
        <div className="articles">
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/article">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
        </div>
    )
}

export {Articles}
