import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import {toRegularCase} from "./string"

const API = "http://130.61.57.117:8000"

export const client = new ApolloClient({
    uri: `${API}/graphql`,
    cache: new InMemoryCache(),
})

export const Requests = {
    getCategories: gql`
        query {
            category {
                name
                icons {
                    default
                    thumbnail
                }
            }
        }
    `,
    getArticles: (category) => gql`
        query {
            category(categoryName: "${toRegularCase(category)}") {
                article {
                    name
                    description
                    icons {
                        default
                        thumbnail
                    }
                }
            }
        }
    `,
    getArticle: (category, article) => gql`
        query {
            category(categoryName: "${toRegularCase(category)}") {
                article(articleName: "${toRegularCase(article)}") {
                    content
                }
            }
        }
    `,
    getImage: (path) => `${API}/image?path=${path.split("/").map(item => toRegularCase(item)).join("/")}`
}