import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Markdown} from "../../components/Markdown"
import {getArticle} from "../../utils/api"
import "./index.sass"

function Article() {
    let { category, articleId } = useParams()
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        getArticle(category, articleId).then(data => setMarkdown(data)).catch(() => setMarkdown(1))
    }, [])

    if(!markdown) {
        return <label>Loading...</label>
    }

    if(markdown === 1) {
        return <label>Something went wrong</label>
    }

    return (
        <div className="article">
            <div className="content">
                <Markdown markdown={markdown}/>
            </div>
        </div>
    )
}

export {Article}
