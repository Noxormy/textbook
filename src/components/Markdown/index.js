import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import PropTypes from "prop-types"
import "./index.sass"


function Markdown({markdown}) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
        </ReactMarkdown>
    )
}

Markdown.propTypes = {
    markdown: PropTypes.string
}

export {Markdown}
