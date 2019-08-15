// format on save removes commas/semicolons inside interface
interface Pob {
  a: number
  b: string
}

const test1: Pob = {
  a: 456,
  b: 'Dis is test'
}

// null and undefined will be any
let test3 = null
let test5 = undefined

// nullable
let test2: number = null
let test4 = 'abc'
test4 = null

// let's see output
console.log('Print Out:', test2)
