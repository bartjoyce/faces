export const SET_PEOPLE_FILTER = 'SET_PEOPLE_FILTER'

export function setPeopleFilter(searchTerm) {
  return {
    type: SET_PEOPLE_FILTER,
    payload: searchTerm
  }
}
