import React from "react"
import PropTypes from "prop-types"
import Meta from "antd/es/card/Meta"
import {Link} from "react-router-dom"
import {Card as AntdCard} from "antd"
import placeholder from "../../assets/placeholder.svg"
import "./index.sass"


function Card({link="", cover=placeholder, alt="cover", title="", description="", loading=false}) {
    return (
        <Link to={link} className="card">
            <AntdCard cover={loading ? null : <img src={cover} alt={alt}/>} loading={loading}>
                <Meta title={title} description={description} />
            </AntdCard>
        </Link>
    )
}

Card.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool
}

export {Card}
