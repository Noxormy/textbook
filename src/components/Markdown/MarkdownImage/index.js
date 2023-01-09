import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Image} from "antd"
import {useLocation} from "react-router-dom"
import {client, Requests} from "../../../utils/api"
import placeholder from "../../../assets/placeholder.svg"
import "./index.sass"


function MarkdownImage({src="", alt="cover"}) {
    const location = useLocation()
    const [imageSource, setImageSource] = useState(placeholder)
    const imageSourceFormatted = imageSource === placeholder ? placeholder : `data:image/png;base64, ${imageSource}`

    useEffect(() => {
        if(!src.includes("http") && !src.includes("base64")) {
            const path = location.pathname.slice(1)
            const query = Requests.getImage(path)
            client.query({ query: query}).then(data => {
                const {data: {image}} = data
                setImageSource(image)
            })
        } else {
            setImageSource(src)
        }
    }, [])

    return <Image className={`markdown_image ${imageSource === placeholder ? "placeholder" : ""}`} src={imageSourceFormatted} alt={alt}/>
}

MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export {MarkdownImage}
