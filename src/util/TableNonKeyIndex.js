export default class TableNonKeyIndex {
  constructor(data, keyFn) {
    this.data = data
    this.keyFn = keyFn

    this.index = {}
    this.data.forEach(item => {
      const entry = this.index[keyFn(item)]
      if (entry) {
        entry.push(item)
      } else {
        this.index[keyFn(item)] = [item]
      }
    })
  }

  find(key) {
    return this.index[key] || []
  }
}
