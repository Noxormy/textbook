import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import {toRegularCase} from "./string"

export const client = new ApolloClient({
    uri: "http://localhost:80/graphql",
    cache: new InMemoryCache(),
})

export const Requests = {
    getCategories: gql`
        query {
            category {
              name
              icon
            }
        }
    `,
    getArticles: (category) => gql`
        query {
            category(categoryName: "${toRegularCase(category)}") {
                article {
                    name
                    description
                    icon
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
    getImage: (path) => gql`
        query {
            image(path: "${path.split("/").map(item => toRegularCase(item)).join("/")}")
        }
    `
}