import TableKeyIndex from './util/TableKeyIndex'
import TableNonKeyIndex from './util/TableNonKeyIndex'
import StringSearcher from './util/StringSearcher'

const people = require('../data/people.csv')
const encounters = require('../data/encounters.csv')
const days = require('../data/days.csv')
const dayPlaces = require('../data/dayPlaces.csv')
const places = require('../data/places.csv')

const dayById = new TableKeyIndex(days, day => day.id)
const placeById = new TableKeyIndex(places, place => place.id)
const personById = new TableKeyIndex(people, person => person.id)

const encountersByPersonId = new TableNonKeyIndex(encounters, encounter => encounter.personId)
const encountersByDayPlaceId = new TableNonKeyIndex(encounters, encounter => encounter.dayPlaceId)

const peopleSearcher = new StringSearcher(people, item => item.name)

export {
  people,
  encounters,
  days,
  dayPlaces,
  places,

  personById,
  dayById,
  placeById,

  encountersByPersonId,
  encountersByDayPlaceId,

  peopleSearcher
}