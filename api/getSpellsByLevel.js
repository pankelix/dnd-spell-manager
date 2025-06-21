const BASE_URL = 'https://www.dnd5eapi.co'

export async function getSpellsByLevel(spellLevel) {
    const spellIndexes = await fetch(BASE_URL + `/api/2014/spells?level=${spellLevel}`).then((response) =>
        response.json()
    )
    return Promise.all(
        spellIndexes.results.map((index) =>
            fetch(BASE_URL + index.url).then((response) => response.json())
        )
    )
}