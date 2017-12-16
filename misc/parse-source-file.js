
if (process.argv.length !== 3) {
  console.log('Expected data/ directory path.')
  process.exit()
}

const fs = require('fs')
const path = require('path')
const DateInfo = require('date-info')

const dataDir = process.argv[2]

const files = fs.readdirSync(dataDir).filter(file => file.indexOf('source-') === 0)
console.log(files)

const data = files.map(file => {
  const dataString = fs.readFileSync(path.join(dataDir, file)).toString()

  return parseSourceFile(dataString)
})

function parseSourceFile(dataString) {
  return dataString.split('\n\n').slice(1).map(dayString => {
    const [date, ...placesString] = dayString.split('\n')

    return placesString.filter(str => !!str).map(placeString => {
      const [locationUntrimmed, peopleString] = placeString.split('—')

      if (peopleString === undefined) {
        console.log('Cannot parse:', placeString)
        process.exit()
      }

      const location = locationUntrimmed.trim()
      const people = peopleString.split(' ').filter(person => !!person)

      return { location, people }

    })

  })
}

const idForPlace = {
  Nijmegen: 1,
  Birmingham: 2,
  Uni: 3,
  London: 4,
  Wales: 5,
  Norwich: 6,
  Berlin: 7,
  Wolsier: 8,
  Borrby: 9,
  Copenhagen: 10,
  Malmo: 11
}

let dayPlaceId = 1
let encounterId = 1

data.forEach((month, monthNum) => {
  month.forEach((day, dayNum) => {

    dayId = DateInfo.date(2017, monthNum + 1, dayNum + 1).id

    day.forEach(({ location, people }, count) => {

      const currentDayPlaceId = dayPlaceId++

      people.forEach(person => {
        console.log([encounterId++, currentDayPlaceId, person, 'null'].join(','))
      })
    })
  })
})

// dayPlaces.map(({ id, day_id, place_id, count }) => {
//   console.log([ id, day_id, place_id, count ].join(','))
// })

// console.log(Object.keys(places))

//console.log(JSON.stringify(data))
