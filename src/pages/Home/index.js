import React, {useEffect, useState} from "react"
import {CategoryCard} from "../../components/CategoryCard"
import {getCategories} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"
import "./index.sass"


function Home() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    return (
        <div className="home">
            {categories.map((item, key) => (
                <CategoryCard link={toSnakeCase(item.name)} cover={item.image} title={item.name} key={key}/>
            ))}
        </div>
    )
}

export {Home}
