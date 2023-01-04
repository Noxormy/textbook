import React, {useEffect, useState} from "react"
import { useLoadingContext } from "react-router-loading"
import {CategoryCard} from "../../components/CategoryCard"
import {getCategories} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"
import {Card} from "../../components/Card"
import "./index.sass"


function Home() {
    const loadingContext = useLoadingContext()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(data => setCategories(data))
            .then(() => loadingContext.done())
            .catch(() => setCategories(null))
    }, [])

    if(categories == null) {
        return (
            <div className="home">
                <label>Something went wrong</label>
            </div>
        )
    }

    return (
        <div className="home">
            <div className="content">
                <Card className="welcome_card" title="Your handbook of local laws and rules" description="Here all the community is going to help each other understand all the rules, laws and obstacles you may encounter in their country"/>
                {categories.map((item, key) => (
                    <CategoryCard link={toSnakeCase(item.name)} cover={item.image} title={item.name} key={key}/>
                ))}
            </div>
        </div>
    )
}

export {Home}
