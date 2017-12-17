import deburr from './deburr'

function reduceToAlphanumerics(name) {
  let outputLetters = []

  const deburred = deburr(name).toLowerCase()
  for (let i = 0; i < deburred.length; ++i) {
    if (deburred[i] >= 'a' && deburred[i] <= 'z' ||
        deburred[i] >= '0' && deburred[i] <= '9') {
      outputLetters.push(deburred[i])
    }
  }

  return outputLetters.join('')
}

function buildSearchIndex(data, keyFn) {
  const strings = data.map(item => {
    return reduceToAlphanumerics(keyFn(item))
  })

  const heapString = strings.join('|')
  const heapIndex = heapString.split('')

  let counter = 0;
  for (let i = 0; i < heapString.length; ++i) {
    if (heapString[i] === '|') {
      ++counter
      heapIndex[i] = undefined
    } else {
      heapIndex[i] = data[counter]
    }
  }

  return { heapString, heapIndex }
}

function getAllIndices(string, val) {
  let indices = []
  let i = -1

  while ((i = string.indexOf(val, i + 1)) !== -1) {
    indices.push(i)
  }

  return indices
}

export default class StringSearcher {
  constructor(data, keyFn) {
    this.data = data
    this.keyFn = keyFn

    const { heapString, heapIndex } = buildSearchIndex(data, keyFn)
    this.heapString = heapString
    this.heapIndex = heapIndex
  }

  search(searchString) {
    const indices = getAllIndices(this.heapString, reduceToAlphanumerics(searchString))
    return indices.map(index => this.heapIndex[index]).filter(item => item !== undefined)
  }
}
