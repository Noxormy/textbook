import React from "react"
import PropTypes from "prop-types"
import {ImageWithLoader} from "../../Image"
import {useLocation} from "react-router-dom"
import {Requests} from "../../../utils/api"
import "./index.sass"


function MarkdownImage({src="", alt="cover"}) {
    const location = useLocation()
    const loader = async () => {
        if(!src.includes("http") && !src.includes("base64")) {
            const path = location.pathname.slice(1)
            return Requests.getImage(path)
        } else {
            return src
        }
    }

    return <ImageWithLoader className="markdown_image" loader={loader} alt={alt} zoom={true}/>
}

MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export {MarkdownImage}
