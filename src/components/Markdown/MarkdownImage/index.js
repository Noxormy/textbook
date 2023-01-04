import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Image} from "antd"
import {useLocation} from "react-router-dom"
import {getImage} from "../../../utils/api"
import {imagePlaceholder} from "../../../utils/common"
import "./index.sass"


function MarkdownImage({src="", alt="cover"}) {
    const location = useLocation()
    const [imageSource, setImageSource] = useState(imagePlaceholder)

    useEffect(() => {
        if(!src.includes("http") && !src.includes("base64")) {
            getImage(`${location.pathname}/${src}`).then(data => setImageSource(data))
        } else {
            setImageSource(src)
        }
    }, [])

    console.log(src)

    return <Image className={`markdown_image ${imageSource === imagePlaceholder ? "placeholder" : ""}`} src={imageSource} alt={alt}/>
}

MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export {MarkdownImage}
