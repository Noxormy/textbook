import React, {useEffect} from "react"
import {Card} from "../../components/Card"
import {useParams} from "react-router-dom"
import {toSnakeCase} from "../../utils/string"
import {useLoadingContext} from "react-router-loading"
import {Requests} from "../../utils/api"
import {useQuery} from "@apollo/client"
import "./index.sass"


function Articles() {
    let { category } = useParams()
    const loadingContext = useLoadingContext()
    const { loading, error, data } = useQuery(Requests.getArticles(category))

    useEffect(() => {
        if(data !== null || error !== null) {
            loadingContext.done()
        }
    }, [])

    if(loading) {
        return (
            <div className="articles">
                Loading...
            </div>
        )
    }

    if(error) {
        return (
            <div className="articles">
                Something went wrong
            </div>
        )
    }

    const {category: [{ article }]} = data

    return (
        <div className="articles">
            <div className="content">
                {article.map((item, key) => (
                    <Card link={toSnakeCase(item.name)}
                        cover={item.icon}
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
