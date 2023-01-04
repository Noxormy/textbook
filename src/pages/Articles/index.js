import React, {useEffect, useState} from "react"
import "./index.sass"
import {Card} from "../../components/Card"
import {useParams} from "react-router-dom"
import {getArticles} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"


function Articles() {
    let { category } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles(category).then(data => setArticles(data)).catch(() => setArticles(null))
    }, [])

    console.log(articles)

    if(articles == null) {
        return (
            <div className="articles">
                <label>Something went wrong</label>
            </div>
        )
    }

    return (
        <div className="articles">
            {articles.map((item, key) => (
                <Card link={toSnakeCase(item.name)}
                    cover={item.image}
                    alt={item.name}
                    title={item.name}
                    description={"asdas"}
                    key={key}/>
            ))}
        </div>
    )
}

export {Articles}
