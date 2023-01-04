import React from "react"
import {Card} from "antd"
import Meta from "antd/es/card/Meta"
import "./index.sass"
import {Link} from "react-router-dom"


function Articles() {
    return (
        <div className="articles">
            <Link to="/articles/german-policeman">
                <Card cover={<img src="https://gumlet.assettype.com/wuzupnigeria%2F2022-01%2Ff21f0ecd-09b9-46a2-b478-cb8820e045f5%2FPOLIZEI.jpg?format=auto" alt="cover"/>}>
                    <Meta title="German Policeman" description="How to talk with the police" />
                </Card>
            </Link>
            <Link to="/articles">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/articles">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/articles">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/articles">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
            <Link to="/articles">
                <Card cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="cover"/>}>
                    <Meta title="Card title" description="This is the description" />
                </Card>
            </Link>
        </div>
    )
}

export {Articles}
