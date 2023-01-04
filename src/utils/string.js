export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatMultipleWords(string) {
    return string.split("-").map(item => capitalize(item)).join(" ")
}