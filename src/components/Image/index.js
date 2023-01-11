import React from "react"
import PropTypes from "prop-types"
import placeholderSvg from "../../assets/placeholder.svg"
import {Image as AntImage, Skeleton} from "antd"
import "./index.sass"


function ProgressiveImage({src="", className="", alt="", zoom=false, placeholder="", ...props}) {
    const skeletonPlaceholder = <Skeleton.Image active={true} />
    const placeholderElement = placeholder ? <AntImage src={placeholder} alt={alt} preview={false} placeholder={skeletonPlaceholder}/> : skeletonPlaceholder
    const allClassNames = `${className} progressiveImage`

    return (
        <div className={allClassNames}>
            <AntImage src={src} alt={alt} preview={zoom} placeholder={placeholderElement} fallback={placeholderSvg} {...props}/>
        </div>
    )
}


ProgressiveImage.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    zoom: PropTypes.bool,
    placeholder: PropTypes.string,
}

export {ProgressiveImage as Image}
