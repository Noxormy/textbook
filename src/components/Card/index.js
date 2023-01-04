import React from "react"
import PropTypes from "prop-types"
import Meta from "antd/es/card/Meta"
import {Link} from "react-router-dom"
import {Card as AntdCard} from "antd"
import "./index.sass"


function Card({className="", link="", cover="", alt="cover", title="", description=""}) {
    return (
        <Link to={link} className={`card ${className}`}>
            <AntdCard cover={cover ? <img src={cover} alt={alt}/> : null}>
                <Meta title={title} description={description} />
            </AntdCard>
        </Link>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string,
    cover: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool
}

export {Card}
