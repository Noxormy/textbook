import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Image} from "antd"
import {useLocation} from "react-router-dom"
import {Requests} from "../../../utils/api"
import placeholder from "../../../assets/placeholder.svg"
import "./index.sass"


function MarkdownImage({src="", alt="cover"}) {
    const location = useLocation()
    const [imageSource, setImageSource] = useState(placeholder)

    useEffect(() => {
        if(!src.includes("http") && !src.includes("base64")) {
            const path = location.pathname.slice(1)
            const link = Requests.getImage(path)
            setImageSource(link)
        } else {
            setImageSource(src)
        }
    }, [])

    return <Image className={`markdown_image ${imageSource === placeholder ? "placeholder" : ""}`} src={imageSource} alt={alt}/>
}

MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export {MarkdownImage}
