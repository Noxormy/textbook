import React from "react"
import PropTypes from "prop-types"
import Meta from "antd/es/card/Meta"
import {Link} from "react-router-dom"
import {Card as AntdCard} from "antd"
import {Image} from "../Image"
import "./index.sass"


function Card({className="", link="", cover="", placeholder="", alt="cover", title="", description=""}) {
    const src = cover ? cover : placeholder

    return (
        <Link to={link} className={`card ${className}`}>
            <AntdCard cover={<Image src={src} className="image" placeholder={placeholder} alt={alt}/>}>
                <Meta title={title} description={description} />
            </AntdCard>
        </Link>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string,
    cover: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    loading: PropTypes.bool
}

export {Card}
