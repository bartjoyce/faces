import {
  SET_PEOPLE_FILTER
} from './actions'

import {
  people,
  dayPlaces,
  personById,
  dayById,
  placeById,
  encountersByPersonId,
  encountersByDayPlaceId,
  peopleSearcher
} from './model'

const initialState = {
  peopleFilter: {
    searchTerm: '',
    filteredPeople: [],
    filteredDayPlaces: [],
    filteredPeopleIndex: {},
    filteredDayPlacesIndex: {}
  }
}

export default function reduce(state, action) {

  state = state || initialState

  switch (action.type) {
    case SET_PEOPLE_FILTER: {

      const searchTerm = action.payload
      if (searchTerm) {

        const filteredPeople = peopleSearcher.search(searchTerm)

        let filteredPeopleIndex = {}
        let filteredDayPlacesIndex = {}
        filteredPeople.forEach(person => {
          filteredPeopleIndex[person.id] = true
          encountersByPersonId.find(person.id).forEach(encounter => {
            filteredDayPlacesIndex[encounter.dayPlaceId] = true
          })
        })

        const filteredDayPlaces = dayPlaces.filter(dayPlace => (
          filteredDayPlacesIndex[dayPlace.id]
        ))

        state = Object.assign({}, state, {
          peopleFilter: {
            searchTerm,
            filteredPeople,
            filteredDayPlaces,
            filteredPeopleIndex,
            filteredDayPlacesIndex
          }
        })

      } else {

        state = Object.assign({}, state, {
          peopleFilter: {
            searchTerm,
            filteredPeople: [],
            filteredDayPlaces: [],
            filteredPeopleIndex: {},
            filteredDayPlacesIndex: {}
          }
        })

      }

      break
    }
  }

  return state

}
