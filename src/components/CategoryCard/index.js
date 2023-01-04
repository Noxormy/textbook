import React from "react"
import PropTypes from "prop-types"
import Meta from "antd/es/card/Meta"
import {Link} from "react-router-dom"
import {Card as AntdCard} from "antd"
import {imagePlaceholder} from "../../utils/common"
import "./index.sass"


function CategoryCard({link="", cover="", alt="cover", title="", description=""}) {
    const src = cover ? cover : imagePlaceholder

    return (
        <Link to={link} className="card">
            <AntdCard cover={<img src={src} alt={alt}/>}>
                <Meta title={title} description={description} />
            </AntdCard>
        </Link>
    )
}

CategoryCard.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export {CategoryCard}
