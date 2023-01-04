export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function toRegularCase(string) {
    return string.split("-").map(item => capitalize(item)).join(" ")
}

export function toSnakeCase(string) {
    return string.split(" ").map(item => item.toLowerCase()).join("-")
}