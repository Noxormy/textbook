import React from "react"
import PropTypes from "prop-types"
import placeholder from "../../assets/placeholder.svg"
import {Image as AntImage} from "antd"
import {useImage, useImageWithLoader} from "../../utils/common"
import "./index.sass"


function getImage(src="", className="", alt="", zoom=false, isLoading=true, props) {
    props = {
        src,
        alt,
        className: `${className} progressiveImage ${isLoading ? "placeholder" : ""}`,
        ...props
    }

    if (zoom) {
        return <AntImage {...props}/>
    } else {
        return <img {...props}/>
    }
}


function ProgressiveImage({src="", className="", alt="", zoom=false, ...props}) {
    const [imageSrc, isLoading] = useImage(src, placeholder)
    return getImage(imageSrc, className, alt, zoom, isLoading, props)
}

function ProgressiveImageWithLoader({loader, className="", alt="", zoom=false, ...props}) {
    const [imageSrc, isLoading] = useImageWithLoader(loader, placeholder)
    return getImage(imageSrc, className, alt, zoom, isLoading, props)
}

ProgressiveImage.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    zoom: PropTypes.bool,
}

ProgressiveImageWithLoader.propTypes = {
    loader: PropTypes.func,
    className: PropTypes.string,
    alt: PropTypes.string,
    zoom: PropTypes.bool,
}

export {ProgressiveImage as Image, ProgressiveImageWithLoader as ImageWithLoader}
