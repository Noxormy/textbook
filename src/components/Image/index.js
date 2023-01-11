import React from "react"
import PropTypes from "prop-types"
import placeholderSvg from "../../assets/placeholder.svg"
import {Image as AntImage} from "antd"
import {useImage, useImageWithLoader} from "../../utils/hooks"
import "./index.sass"


function getImage(src="", className="", alt="", zoom=false, placeholder="", isLoading=true, props) {
    props = {
        src,
        alt,
        className: `${className} progressiveImage ${isLoading && placeholder === placeholderSvg? "placeholder" : ""}`,
        ...props
    }

    if (zoom) {
        return <AntImage {...props}/>
    } else {
        return <img {...props}/>
    }
}


function ProgressiveImage({src="", className="", alt="", zoom=false, placeholder="", ...props}) {
    const placeHolderImage = placeholder || placeholderSvg
    const [imageSrc, isLoading] = useImage(src, placeHolderImage)
    return getImage(imageSrc, className, alt, zoom, placeHolderImage, isLoading, props)
}

function ProgressiveImageWithLoader({loader, className="", alt="", zoom=false, placeholder="", ...props}) {
    const placeHolderImage = placeholder || placeholderSvg
    const [imageSrc, isLoading] = useImageWithLoader(loader, placeHolderImage)
    return getImage(imageSrc, className, alt, zoom, placeHolderImage, isLoading, props)
}

ProgressiveImage.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    zoom: PropTypes.bool,
    placeholder: PropTypes.string,
}

ProgressiveImageWithLoader.propTypes = {
    loader: PropTypes.func,
    className: PropTypes.string,
    alt: PropTypes.string,
    zoom: PropTypes.bool,
    placeholder: PropTypes.string,
}

export {ProgressiveImage as Image, ProgressiveImageWithLoader as ImageWithLoader}
