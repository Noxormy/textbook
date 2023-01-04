import React from "react"
import "./index.sass"
import {Link} from "react-router-dom"
import {Card} from "antd"
import Meta from "antd/es/card/Meta"


function Home() {
    return (
        <div className="home">
            <Link to="/articles">
                <Card cover={<img src="https://pix4free.org/assets/library/2021-01-21/originals/cohabitation_laws.jpg" alt="cover"/>}>
                    <Meta title="Law articles" description="How to face with the law" />
                </Card>
            </Link>
        </div>
    )
}

export {Home}
