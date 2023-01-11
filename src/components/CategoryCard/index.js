import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Image} from "../Image"
import "./index.sass"


function CategoryCard({link="", cover="", placeholder="", alt="cover", title=""}) {
    const src = cover ? cover : placeholder

    return (
        <Link to={link} className="category_card">
            <Image src={src} placeholder={placeholder} alt={alt}/>
            <label>{title}</label>
        </Link>
    )
}

CategoryCard.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export {CategoryCard}
