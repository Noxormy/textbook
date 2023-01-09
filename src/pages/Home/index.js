import React, {useEffect} from "react"
import { useLoadingContext } from "react-router-loading"
import {Requests} from "../../utils/api"
import {toSnakeCase} from "../../utils/string"
import {useQuery} from "@apollo/client"
import {CategoryCard} from "../../components/CategoryCard"
import {Typography} from "antd"
import "./index.sass"


function Home() {
    const loadingContext = useLoadingContext()
    const { loading, error, data } = useQuery(Requests.getCategories)

    useEffect(() => {
        if(data !== null || error !== null) {
            loadingContext.done()
        }
    }, [data])

    if(loading) {
        return (
            <div className="home">
                Loading...
            </div>
        )
    }

    if(error) {
        return (
            <div className="home">
                Something went wrong
            </div>
        )
    }

    const {category} = data

    return (
        <div className="home">
            <div className="content">
                <div className="welcome_card">
                    <Typography.Title level={3}>Your handbook of local laws and rules</Typography.Title>
                    <label>Here, all members of the community will help each other understand all the rules, laws, and obstacles you may encounter in their country.  You can join and contribute to our community through the <Typography.Link href="https://github.com/handbookhub">github repository</Typography.Link>, where everyone can contribute an article or fix</label>
                </div>
                {category.map((item, key) => (
                    <CategoryCard link={toSnakeCase(item.name)} cover={item.icon} title={item.name} key={key}/>
                ))}
            </div>
        </div>
    )
}

export {Home}
