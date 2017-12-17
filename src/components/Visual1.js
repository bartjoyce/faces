import React from 'react'
import RetinaCanvas from './RetinaCanvas'

const W = 1200
const H = 160

import {
  days,
  personById,
  encountersByDayPlaceId,
  dayPlacesByDayId
} from '../model'

let encountersByPersonId = {}
const buckets = days.map((day, x) => {

  let people = []
  let peopleIndex = {}

  dayPlacesByDayId.find(day.id).map(dayPlace => {
    encountersByDayPlaceId.find(dayPlace.id).map(encounter => {
      if (!peopleIndex[encounter.personId]) {
        peopleIndex[encounter.personId] = true
        people.push(personById.find(encounter.personId))

        let encountersOfPerson = encountersByPersonId[encounter.personId]
        if (encountersOfPerson) {
          encountersOfPerson.push({ x, y: people.length - 1 })
        } else {
          encountersByPersonId[encounter.personId] = [
            { x, y: people.length - 1 }
          ]
        }
      }
    })
  })

  return { day, people }

})

function drawFn(canvas, ctx, state) {
  ctx.clearRect(0, 0, W, H)

  const BLOCK_WIDTH = W / buckets.length
  const BLOCK_HEIGHT = BLOCK_WIDTH * 2

  if (state.searchTerm) {
    ctx.fillStyle = '#eee'
    state.filteredPeople.forEach(person => {
      (encountersByPersonId[person.id] || []).forEach(({ x, y }) => {
        ctx.fillRect(x * BLOCK_WIDTH, 0, BLOCK_WIDTH, H)
      })
    })
  }

  ctx.fillStyle = state.searchTerm ? '#999' : '#000'
  buckets.forEach((bucket, i) => {
    const BAR_HEIGHT = BLOCK_HEIGHT * bucket.people.length
    ctx.fillRect(i * BLOCK_WIDTH, H - BAR_HEIGHT, BLOCK_WIDTH, BAR_HEIGHT)
  })

  if (state.searchTerm) {
    ctx.fillStyle = '#000'
    state.filteredPeople.forEach(person => {
      (encountersByPersonId[person.id] || []).forEach(({ x, y }) => {
        ctx.fillRect(x * BLOCK_WIDTH, H - (y + 1) * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT)
      })
    })
  }

  // ctx.beginPath()
  // ctx.moveTo(state.x % W, 10)
  // ctx.lineTo(W - 10, H - 10)
  // ctx.closePath()

  // ctx.strokeStyle = '#000'
  // ctx.lineWidth = '1px'
  // ctx.stroke()
}

export default class Visual1 extends React.Component {
  render() {
    return (
      <RetinaCanvas
        width={W}
        height={H}
        drawFn={drawFn}
        drawState={this.props}
      />
    )
  }
}
