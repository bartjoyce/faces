export default class TableKeyIndex {
  constructor(data, keyFn) {
    this.data = data
    this.keyFn = keyFn

    this.index = {}
    this.data.forEach(item => {
      this.index[keyFn(item)] = item
    })
  }

  find(key) {
    return this.index[key] || null
  }
}
