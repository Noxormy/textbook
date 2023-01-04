import {toRegularCase} from "./string"

// const AUTH = "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"

const OWNER = "handbookhub"
const REPO = "laws"
const COUNTRY = "Germany"

const ICON_NAME = "Icon.png"
const LANGUAGE = "en"

const getApi = (owner, repo, path) => `https://api.github.com/repos/${owner}/${repo}/contents/${COUNTRY}/${path}`
const getBlobApi = (owner, repo, sha) => `https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`

export async function getGitFile(owner, repo, path) {
    return await fetch(getApi(owner, repo, path))
        .then(d => d.json())
        .then(d => fetch(getBlobApi(owner, repo, d.sha)))
        .then(d => d.json())
        .then(d => atob(d.content))
}

export async function getArticle(category, article) {
    return getGitFile(OWNER, REPO, `${toRegularCase(category)}/${toRegularCase(article)}/${LANGUAGE}.md`)
}

export async function getArticles(category) {
    let data = await fetch(getApi(OWNER, REPO, toRegularCase(category)))
        .then(d => d.json())
        .then(d => d.filter(item => item.type === "dir")
            .map(item => ({
                name: item.name,
                link: item.git_url
            }))
        )

    for(let item of data) {
        let image_link = await fetch(item.link).then(d => d.json()).then(d => d.tree.find(i => i.path === ICON_NAME).url)
        item.image = `data:image/png;base64,${await fetch(image_link).then(d => d.json()).then(d => d.content)}`
    }

    return data
}

export async function getCategories() {
    let data = await fetch(getApi(OWNER, REPO, ""))
        .then(d => d.json())
        .then(d => d.filter(item => item.type === "dir")
            .map(item => ({
                name: item.name,
                link: item.git_url
            }))
        )

    for(let item of data) {
        let image_link = await fetch(item.link).then(d => d.json()).then(d => d.tree.find(i => i.path === ICON_NAME).url)
        item.image = `data:image/png;base64,${await fetch(image_link).then(d => d.json()).then(d => d.content)}`
    }

    return data
}

export async function getImage(path) {
    let realPath = path.split("/").map(item => toRegularCase(item)).filter((item, idx) => !(idx === 0 && item === "")).join("/")
    return await fetch(getApi(OWNER, REPO, realPath))
        .then(d => d.json())
        .then(d => fetch(d.git_url))
        .then(d => d.json())
        .then(d => `data:image/png;base64,${d.content}`)
}