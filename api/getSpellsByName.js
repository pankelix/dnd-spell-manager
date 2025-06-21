const BASE_URL = 'https://www.dnd5eapi.co'

export async function getSpellsByName(query) {
    const spellIndexes = await fetch(BASE_URL + '/api/2014/spells').then((response) =>
        response.json()
    )

    const filteredSpells = spellIndexes.results.filter((spell) =>
        spell.name.toLowerCase().includes(query.toLowerCase()))

    return Promise.all(
        filteredSpells.map((spell) =>
            fetch(BASE_URL + spell.url).then((response) => response.json())
        )
    )
}