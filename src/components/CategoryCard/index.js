import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import placeholder from "../../assets/placeholder.svg"
import "./index.sass"


function CategoryCard({link="", cover="", alt="cover", title=""}) {
    const src = cover ? `data:image/png;base64, ${cover}` : placeholder

    return (
        <Link to={link} className="category_card">
            <img src={src} alt={alt}/>
            <label>{title}</label>
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
