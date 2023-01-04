import React, {useEffect, useState} from "react"
import "./index.sass"
import {Card} from "../../components/Card"
import {useParams} from "react-router-dom"
import {getArticles} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"
import {useLoadingContext} from "react-router-loading"


function Articles() {
    let { category } = useParams()
    const loadingContext = useLoadingContext()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles(category)
            .then(data => setArticles(data))
            .then(() => loadingContext.done())
            .catch(() => setArticles(null))
    }, [])

    if(articles == null) {
        return (
            <div className="articles">
                <label>Something went wrong</label>
            </div>
        )
    }

    return (
        <div className="articles">
            <div className="content">
                {articles.map((item, key) => (
                    <Card link={toSnakeCase(item.name)}
                        cover={item.image}
                        alt={item.name}
                        title={item.name}
                        description={item.description}
                        key={key}/>
                ))}
            </div>
        </div>
    )
}

export {Articles}
