import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {Markdown} from "../../components/Markdown"
import {Requests} from "../../utils/api"
import {useLoadingContext} from "react-router-loading"
import {useQuery} from "@apollo/client"
import "./index.sass"


function Article() {
    let { category, articleId } = useParams()
    const loadingContext = useLoadingContext()
    const { loading, error, data } = useQuery(Requests.getArticle(category, articleId))

    useEffect(() => {
        if(data !== null || error !== null) {
            loadingContext.done()
        }
    }, [])

    if(loading) {
        return (
            <div className="article">
                Loading...
            </div>
        )
    }

    if(error) {
        return (
            <div className="article">
                Something went wrong
            </div>
        )
    }

    const {category: [{article}]} = data
    const [{content}] = article

    return (
        <div className="article">
            <div className="content">
                <Markdown markdown={content}/>
            </div>
        </div>
    )
}

export {Article}
