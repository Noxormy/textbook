import React from "react"
import PropTypes from "prop-types"
import {Image} from "../../Image"
import {useLocation} from "react-router-dom"
import {Requests} from "../../../utils/api"
import "./index.sass"


function MarkdownImage({src="", alt="cover"}) {
    const location = useLocation()

    if(!src.includes("http") && !src.includes("base64")) {
        const path = location.pathname.slice(1)
        const imageLink = Requests.getImage(path)
        return <Image className="markdown_image" src={imageLink} placeholder={`${imageLink}&thumbnail=True`} alt={alt} zoom={true}/>
    } else {
        return <Image className="markdown_image" src={src} alt={alt} zoom={true}/>
    }
}

MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export {MarkdownImage}
