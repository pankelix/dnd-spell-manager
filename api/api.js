const BASE_URL = 'https://www.dnd5eapi.co'

export async function getAllClasses() {
    return fetch(BASE_URL + '/api/classes')
    .then((response) => response.json())
}