import $ from '../core'

$.prototype.get = async function (url, dataTypeAnswer = 'json') {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}`)
    }
    switch (dataTypeAnswer) {
        case 'json':
            return await res.json()
        case 'text':
            return await res.text()
        case 'blob':
            return await res.blob()
    }
}
$.prototype.post = async function (url, data, dataTypeAnswer = 'text') {
    const res = await fetch(url, {
        method: "POST",
        body: data
    })
    switch (dataTypeAnswer) {
        case 'json':
            return await res.json()
        case 'text':
            return await res.text()
        case 'blob':
            return await res.blob()
    }
}