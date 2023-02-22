export const getFilms = async function (url) {
    const json = await fetch(url, {
        headers: {
            'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
            'Content-Type': 'application/json',
        }
    })
    const data = await json.json()
    return data
}

