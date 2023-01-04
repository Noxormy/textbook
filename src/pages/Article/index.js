import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Markdown} from "../../components/Markdown"
import {getArticle} from "../../utils/api"
import "./index.sass"

function Article() {
    let { articleId } = useParams()
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        getArticle(articleId).then(data => setMarkdown(data))
    }, [])

    if(!markdown) {
        return <label>Loading...</label>
    }

    return (
        <div className="article">
            <Markdown markdown={markdown}/>
        </div>
    )
}

export {Article}
