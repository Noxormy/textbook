import {capitalize} from "./string"

const OWNER = "handbookhub"
const REPO = "laws"
const getApi = (owner, repo, path) => `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
const getBlobApi = (owner, repo, sha) => `https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`

export async function getGitFile(owner, repo, path) {
    let data = await fetch (getApi(owner, repo, path))
        .then (d => d.json ())
        .then (d => fetch (getBlobApi(owner, repo, d.sha)))
        .then (d => d.json ())
        .then (d => atob (d.content))

    return data
}

export async function getArticle(article) {
    return getGitFile(OWNER, REPO, `${article.split("_").map(item => capitalize(item)).join(" ")}.md`)
}