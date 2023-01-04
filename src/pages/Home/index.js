import React, {useEffect, useState} from "react"
import { useLoadingContext } from "react-router-loading"
import {CategoryCard} from "../../components/CategoryCard"
import {getCategories} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"
import {Typography} from "antd"
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
                <div className="welcome_card">
                    <Typography.Title level={3}>Your handbook of local laws and rules</Typography.Title>
                    <label>Here, all members of the community will help each other understand all the rules, laws, and obstacles you may encounter in their country.  You can join and contribute to our community through the <Typography.Link href="https://github.com/handbookhub">github repository</Typography.Link>, where everyone can contribute an article or fix</label>
                </div>
                {categories.map((item, key) => (
                    <CategoryCard link={toSnakeCase(item.name)} cover={item.image} title={item.name} key={key}/>
                ))}
            </div>
        </div>
    )
}

export {Home}
