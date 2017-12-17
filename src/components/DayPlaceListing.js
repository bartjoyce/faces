import React from 'react'

import {
  people,
  dayPlaces,
  personById,
  dayById,
  placeById,
  encountersByPersonId,
  encountersByDayPlaceId,
  peopleSearcher
} from '../model'

const monthName = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default class DayPlaceListing extends React.PureComponent {
  render() {
    return (
      <div>
        {!this.props.searchTerm ? (
          dayPlaces.map(({ id, dayId, placeId }) => {
            const day = dayById.find(dayId)
            const place = placeById.find(placeId)
            const names = encountersByDayPlaceId.find(id).map(({ personId }) => personById.find(personId).name)

            return (
              <div key={id} style={{ margin: 10 }}>
                <span className="date">
                  <b>{monthName[day.month]} {day.date}</b> {place.name === 'Uni' ? 'at' : 'in'} {place.name}
                </span>
                <div style={{ marginLeft: 15, marginTop: 4, fontWeight: 300 }}>
                  {names.join(', ')}
                </div>
              </div>
            )
          })
        ) : (
          this.props.filteredDayPlaces.map(({ id, dayId, placeId }) => {

            const day = dayById.find(dayId)
            const place = placeById.find(placeId)
            const people = encountersByDayPlaceId.find(id).map(({ personId }) => personById.find(personId))

            return (
              <div key={id} style={{ margin: 10 }}>
                <span className="date">
                  <b>{monthName[day.month]} {day.date}</b> {place.name === 'Uni' ? 'at' : 'in'} {place.name}
                </span>
                <div style={{ marginLeft: 15, marginTop: 4, fontWeight: 300 }}>
                  {people.map(({ id, name }, i, arr) => {
                    const comma = (i + 1 < arr.length ? ', ' : '')
                    const style = this.props.filteredPeopleIndex[id] ? { fontWeight: 'bold' } : undefined
                    return (
                      <span key={i} style={style}>
                        {name + comma}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
