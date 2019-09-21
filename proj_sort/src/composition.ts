interface Sortable {
  compare(l: number, r: number): boolean
  swap(l: number, r: number): void
  length(): number
}

class Sort<T extends Sortable> {
  constructor(public collection: T) {}

  sort(): T {
    const length = this.collection.length()
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
    return this.collection
  }
}

class NumberCollection {
  constructor(public data: number[]) {}
  compare(l: number, r: number): boolean {
    return this.data[l] > this.data[r]
  }
  swap(l: number, r: number): void {
    const newNumbers = this.data
    const temp = newNumbers[l]
    newNumbers[l] = newNumbers[r]
    newNumbers[r] = temp
    // return new NumberCollection(newNumbers)
  }
  length(): number {
    return this.data.length
  }
}

class StringCollection {
  constructor(public data: string) {}
  compare(l: number, r: number): boolean {
    return this.data[l].toLowerCase() > this.data[r].toLowerCase()
  }
  swap(l: number, r: number): void {}
}

const numCollection = new NumberCollection([10, -5, 0, 7, 2])
const sort = new Sort(numCollection)
console.log(sort.sort().data)
